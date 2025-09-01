import { useState, useEffect, useRef, RefObject } from "react";

/**
 * Custom hook to detect when an element enters the viewport
 * @param options Configuration options for IntersectionObserver
 * @returns [ref, inView] where ref is the reference to attach to the element and inView is a boolean indicating if the element is visible
 */
export function useInView<T extends Element>(
  options: IntersectionObserverInit = { threshold: 0.1 }
): [RefObject<T | null>, boolean] {
  const [inView, setInView] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // Only trigger once when element becomes visible
      }
    }, options);

    observer.observe(element);

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, [options.threshold, options.root, options.rootMargin]);

  return [ref, inView];
}
