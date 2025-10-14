import React, { ReactNode, HTMLAttributes, ElementType } from "react";

import { useInView } from "../../../hooks/useInView";

import styles from "./animateOnScroll.module.css";

/**
 * Available animation types for entrance effects
 */
type AnimationType = "appearing-animation" | "sliding-animation";

/**
 * Available animation directions for entrance effects
 */
type AnimationDirection = "from-bottom" | "from-left" | "from-right";

/**
 * Available animation delays for staggered effects
 */
type AnimationDelay = "delay-first" | "delay-second" | "delay-third";

/**
 * Props interface for AnimateOnScroll component
 */
interface AnimateOnScrollProps extends HTMLAttributes<HTMLElement> {
  /** Content to be animated */
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
  /** Type of animation to apply */
  animationType?: AnimationType;
  /** Direction from which the element should animate */
  direction?: AnimationDirection;
  /** Delay before animation starts */
  delay?: AnimationDelay;
  /** Intersection observer threshold (0-1) */
  threshold?: number;
  /** HTML element type to render */
  as?: ElementType;
  /** Whether to apply wall container effect */
  wallEffect?: boolean;
}

/**
 * AnimateOnScroll Component
 * 
 * Provides scroll-triggered animations using IntersectionObserver API.
 * Animates children elements when they enter the viewport with customizable
 * animation types, directions, and delays for creating engaging user experiences.
 * 
 * Features:
 * - Multiple animation types (appearing, sliding)
 * - Configurable animation directions
 * - Staggered animation delays
 * - Customizable intersection thresholds
 * - Polymorphic rendering with 'as' prop
 * - Optional wall container effect
 * 
 * @param children - Content to animate
 * @param className - Additional CSS classes
 * @param animationType - Animation style (default: "appearing-animation")
 * @param direction - Animation direction (default: "from-bottom")
 * @param delay - Animation delay (default: "delay-first")
 * @param threshold - Intersection threshold (default: 0.1)
 * @param as - Element type to render (default: "div")
 * @param wallEffect - Apply wall container effect (default: false)
 * @returns Animated wrapper component
 */
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  className = "",
  animationType = "appearing-animation",
  direction = "from-bottom",
  delay = "delay-first",
  threshold = 0.1,
  as: Component = "div",
  wallEffect = false,
  ...rest
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({ 
    threshold,
    triggerOnce: true 
  });

  return (
    <div
      ref={ref}
      className={`${className} ${wallEffect ? styles["wall-container"] : ""}`}
      {...rest}
    >
      <Component
        className={`
            ${className}
            ${styles[animationType]}
            ${styles[direction]}
            ${styles[delay]}
            ${inView ? styles["visible"] : ""}
          `}
      >
        {children}
      </Component>
    </div>
  );
};

export default AnimateOnScroll;
