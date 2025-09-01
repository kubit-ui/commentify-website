import React, { ReactNode, HTMLAttributes, ElementType } from "react";
import { useInView } from "../../../hooks/useInView";
import styles from "./animateOnScroll.module.css";

type AnimationType = "appearing-animation" | "sliding-animation";
type AnimationDirection = "from-bottom" | "from-left" | "from-right";
type AnimationDelay = "delay-first" | "delay-second" | "delay-third";

interface AnimateOnScrollProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  animationType?: AnimationType;
  direction?: AnimationDirection;
  delay?: AnimationDelay;
  threshold?: number;
  as?: ElementType;
  wallEffect?: boolean;
}

/**
 * Component that animates its children when they enter the viewport
 * Uses CSS transitions with appropriate delay to create entrance animations
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
  const [ref, inView] = useInView<HTMLDivElement>({ threshold });

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
