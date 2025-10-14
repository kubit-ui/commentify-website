"use client";

import Image from "next/image";
import React, { useState, useCallback, useRef, useEffect } from "react";

import styles from "./accordion.module.css";

/**
 * Accordion item interface defining the structure of each accordion item
 */
interface AccordionItem {
  /** Unique identifier for the accordion item */
  id?: string;
  /** The title/header text for the accordion item */
  title: string;
  /** The content body text for the accordion item */
  content: string;
}

/**
 * Accordion component props interface
 */
interface AccordionProps {
  /** Array of accordion items to display */
  items?: AccordionItem[];
  /** Whether multiple items can be open simultaneously */
  allowMultiple?: boolean;
  /** CSS class name for custom styling */
  className?: string;
  /** Callback fired when an item is opened/closed */
  onToggle?: (index: number, isOpen: boolean) => void;
}

/**
 * Default accordion items for Commentify features
 */
const DEFAULT_ITEMS: AccordionItem[] = [
  {
    id: "streamlined-annotations",
    title: "Streamlined annotations",
    content:
      "Effortlessly create and manage annotations. Categorize your comments based on various aspects (poeditor, accessibility and analytics).",
  },
  {
    id: "enhanced-portability",
    title: "Enhanced portability",
    content:
      "Stop losing comments when relocating Figma files. Commentify ensures your annotations travel with you.",
  },
  {
    id: "instant-access",
    title: "Instant access",
    content:
      "Access team members' comments directly from the left sidebar menu. Commentify swiftly directs you to pertinent information.",
  },
  {
    id: "developer-mode",
    title: "Developer mode compatibility",
    content: "Integrate Commentify into your development workflow.",
  },
] as const;

/**
 * Accordion component for displaying collapsible content sections
 * 
 * @param items - Array of accordion items (uses default Commentify features if not provided)
 * @param allowMultiple - Whether multiple accordion items can be open at once
 * @param className - Additional CSS classes
 * @param onToggle - Callback for when items are toggled
 * @returns Rendered accordion component
 */
const Accordion: React.FC<AccordionProps> = ({
  items = DEFAULT_ITEMS,
  allowMultiple = false,
  className,
  onToggle,
}) => {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  /**
   * Initialize content refs array when items change
   */
  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, items.length);
  }, [items.length]);

  /**
   * Toggle accordion item open/closed state
   */
  const toggleItem = useCallback((index: number) => {
    setOpenIndexes((prevOpenIndexes) => {
      const newOpenIndexes = new Set(prevOpenIndexes);
      const isCurrentlyOpen = newOpenIndexes.has(index);

      if (allowMultiple) {
        // Multiple mode: add or remove index
        if (isCurrentlyOpen) {
          newOpenIndexes.delete(index);
        } else {
          newOpenIndexes.add(index);
        }
      } else {
        // Exclusive mode: only one item can be open at a time
        newOpenIndexes.clear();
        if (!isCurrentlyOpen) {
          newOpenIndexes.add(index);
        }
      }

      // Call onToggle callback if provided
      onToggle?.(index, !isCurrentlyOpen);

      return newOpenIndexes;
    });
  }, [allowMultiple, onToggle]);

  /**
   * Get dynamic height for accordion content based on actual content
   */
  const getContentHeight = useCallback((index: number): string => {
    const element = contentRefs.current[index];
    if (!element) return "0px";
    
    if (openIndexes.has(index)) {
      return `${element.scrollHeight}px`;
    }
    return "0px";
  }, [openIndexes]);

  return (
    <div className={`${styles.accordion} ${className || ""}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        const itemId = item.id || `accordion-item-${index}`;
        
        return (
          <div
            key={itemId}
            className={`${styles["accordion__item"]} ${
              isOpen ? styles["accordion__item--open"] : ""
            }`}
          >
            <button
              aria-controls={`${itemId}-content`}
              aria-expanded={isOpen}
              className={styles["accordion__header"]}
              type="button"
              onClick={() => toggleItem(index)}
            >
              <span className={styles["accordion__title"]}>{item.title}</span>
              <div aria-hidden="true" className={styles["accordion__icon"]}>
                <Image
                  alt=""
                  height={25}
                  priority={false}
                  src={isOpen ? "/icon_minus-circle.svg" : "/icon_plus-circle.svg"}
                  width={25}
                />
              </div>
            </button>
            
            <div
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              aria-hidden={!isOpen}
              className={styles["accordion__content"]}
              id={`${itemId}-content`}
              style={{
                maxHeight: getContentHeight(index),
              }}
            >
              <div className={styles["accordion__content-inner"]}>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
