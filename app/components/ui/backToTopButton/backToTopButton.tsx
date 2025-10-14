"use client";

import Image from "next/image";
import React, { 
  useRef, 
  useState, 
  useEffect, 
  useCallback, 
  useImperativeHandle,
  forwardRef
} from "react";

import styles from "./backToTopButton.module.css";

/**
 * Props interface for the BackToTopButton component
 */
interface BackToTopButtonProps {
  /** Bottom position offset in pixels from the viewport bottom */
  bottomPosition?: number;
  /** Scroll offset in pixels before the button becomes visible */
  visibilityScrollOffset?: number;
  /** Reference to element that should stop the button's positioning */
  stopElement?: React.RefObject<HTMLElement | null>;
  /** Custom click handler */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Custom aria-label for accessibility */
  ariaLabel?: string;
  /** Whether to use smooth scrolling behavior */
  smoothScroll?: boolean;
  /** Custom CSS class name */
  className?: string;
}

/**
 * BackToTopButton component - A floating action button that scrolls to page top
 * 
 * Features:
 * - Appears/disappears based on scroll position
 * - Stops positioning relative to footer or other elements
 * - Smooth scroll animation
 * - Accessible with proper ARIA attributes
 * - Throttled scroll event handling for performance
 * 
 * @param bottomPosition - Distance from viewport bottom (default: 32px)
 * @param visibilityScrollOffset - Scroll distance before showing button (default: 300px) 
 * @param stopElement - Element reference to stop button positioning
 * @param onClick - Custom click handler
 * @param ariaLabel - Custom accessibility label
 * @param smoothScroll - Enable smooth scrolling (default: true)
 * @param className - Additional CSS classes
 * @returns BackToTopButton component
 */
const BackToTopButton = forwardRef<HTMLButtonElement, BackToTopButtonProps>(
  (
    {
      bottomPosition = 32,
      visibilityScrollOffset = 300,
      stopElement,
      onClick,
      ariaLabel = "Scroll to top of page",
      smoothScroll = true,
      className,
    },
    ref
  ) => {
    const innerRef = useRef<HTMLButtonElement | null>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    // Forward the ref to inner button element
    useImperativeHandle(
      ref,
      () => innerRef.current || ({} as HTMLButtonElement),
      []
    );

    /**
     * Throttled scroll handler for better performance
     */
    const handleScrollListener = useCallback(() => {
      if (typeof window === "undefined") return;

      const stopElementCurrent = stopElement?.current;
      const buttonElement = innerRef.current;
      
      if (!buttonElement) return;

      // Reset bottom position
      let newBottomPosition = bottomPosition;

      // Adjust button position relative to stop element if provided
      if (stopElementCurrent) {
        const buttonRect = buttonElement.getBoundingClientRect();
        const stopRect = stopElementCurrent.getBoundingClientRect();
        const overlap = buttonRect.bottom - stopRect.top;

        if (overlap > 0) {
          newBottomPosition += overlap + 8; // Add 8px buffer
        }
      }

      // Update button position
      buttonElement.style.bottom = `${newBottomPosition}px`;

      // Determine visibility based on scroll position
      const currentScrollY = window.scrollY;
      const shouldBeVisible = currentScrollY >= visibilityScrollOffset;
      
      setVisible(shouldBeVisible);
    }, [stopElement, visibilityScrollOffset, bottomPosition]);

    /**
     * Throttle function for scroll performance optimization
     */
    const throttle = useCallback((func: () => void, delay: number) => {
      let timeoutId: NodeJS.Timeout;
      let lastExecTime = 0;
      
      return () => {
        const currentTime = Date.now();
        
        if (currentTime - lastExecTime > delay) {
          func();
          lastExecTime = currentTime;
        } else {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func();
            lastExecTime = Date.now();
          }, delay - (currentTime - lastExecTime));
        }
      };
    }, []);

    // Set up scroll listener with throttling
    useEffect(() => {
      if (typeof window === "undefined") return;

      const throttledScrollHandler = throttle(handleScrollListener, 16); // ~60fps

      // Initial call to set correct position
      handleScrollListener();

      window.addEventListener("scroll", throttledScrollHandler, { passive: true });
      window.addEventListener("resize", handleScrollListener, { passive: true });

      return () => {
        window.removeEventListener("scroll", throttledScrollHandler);
        window.removeEventListener("resize", handleScrollListener);
      };
    }, [handleScrollListener, throttle]);

    /**
     * Handle button click - scroll to top with optional custom behavior
     */
    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      
      setIsScrolling(true);
      
      const scrollToTop = () => {
        window.scrollTo({ 
          top: 0, 
          behavior: smoothScroll ? "smooth" : "auto" 
        });
      };

      scrollToTop();

      // Reset scrolling state after animation
      if (smoothScroll) {
        setTimeout(() => setIsScrolling(false), 500);
      } else {
        setIsScrolling(false);
      }

      // Call custom onClick handler if provided
      onClick?.(event);
    }, [onClick, smoothScroll]);

    return (
      <button
        ref={innerRef}
        aria-hidden={!visible}
        aria-label={ariaLabel}
        className={`${styles.backToTop} ${
          visible ? styles.visible : styles.hidden
        } ${isScrolling ? styles.scrolling : ""} ${className || ""}`}
        tabIndex={visible ? 0 : -1}
        type="button"
        onClick={handleClick}
      >
        <Image
          alt=""
          height={24}
          priority={false}
          src="/icon_up-arrow-alt.svg"
          width={24}
        />
        <span className="sr-only">{ariaLabel}</span>
      </button>
    );
  }
);

BackToTopButton.displayName = "BackToTopButton";

export default BackToTopButton;
