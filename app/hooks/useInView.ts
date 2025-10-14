import { useState, useEffect, useRef, RefObject, useCallback } from "react";

/**
 * Configuration options for the useInView hook
 */
interface UseInViewOptions extends IntersectionObserverInit {
  /** Whether to trigger only once when element becomes visible */
  triggerOnce?: boolean;
  /** Delay before triggering the visibility change */
  delay?: number;
}

/**
 * Custom hook to detect when an element enters the viewport using IntersectionObserver API
 * 
 * @param options Configuration options for IntersectionObserver and hook behavior
 * @returns Tuple containing [ref, inView, entry] where:
 *   - ref: Reference to attach to the target element
 *   - inView: Boolean indicating if element is currently visible
 *   - entry: Latest IntersectionObserverEntry (optional)
 * 
 * @example
 * ```tsx
 * const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
 * 
 * return (
 *   <div ref={ref}>
 *     {inView ? 'Element is visible!' : 'Element is hidden'}
 *   </div>
 * );
 * ```
 */
export function useInView<T extends Element>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean, IntersectionObserverEntry | null] {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    triggerOnce = true,
    delay = 0,
  } = options;

  const [inView, setInView] = useState<boolean>(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const ref = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [currentEntry] = entries;
      setEntry(currentEntry);

      const isIntersecting = currentEntry.isIntersecting;

      if (delay > 0) {
        setTimeout(() => setInView(isIntersecting), delay);
      } else {
        setInView(isIntersecting);
      }

      // Disconnect observer if triggerOnce is true and element is visible
      if (triggerOnce && isIntersecting && observerRef.current) {
        observerRef.current.disconnect();
      }
    },
    [delay, triggerOnce]
  );

  useEffect(() => {
    const element = ref.current;
    
    // Early return if element doesn't exist or IntersectionObserver is not supported
    if (!element || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      threshold,
      root,
      rootMargin,
    };

    observerRef.current = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    observerRef.current.observe(element);

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [threshold, root, rootMargin, handleIntersection]);

  return [ref, inView, entry];
}
