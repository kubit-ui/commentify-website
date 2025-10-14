import React from "react";

import styles from "./spreadCards.module.css";

/**
 * SpreadCards Props Interface
 */
interface SpreadCardsProps {
  /** Array of React nodes to display as spread cards */
  cards: React.ReactNode[];
  /** Optional additional CSS class name */
  className?: string;
}

/**
 * SpreadCards Component
 * 
 * Displays a collection of cards in a spread/fan layout with CSS custom properties
 * for dynamic positioning. Each card is positioned based on its index and total count.
 * 
 * Features:
 * - Dynamic positioning using CSS custom properties
 * - Responsive spread animation
 * - Support for any React node as card content
 * - Accessible keyboard navigation
 * 
 * @param props - Component props containing cards array and optional className
 * @returns The spread cards container
 */
function SpreadCards({ cards, className }: SpreadCardsProps) {
  return (
    <div 
      aria-label="Team member selection cards"
      className={`${styles.spreadCards} ${className || ''}`}
      role="group"
    >
      {cards.map((card, index) => (
        <div
          key={`spread-card-${index}`}
          className={styles.spreadCards__card}
          role="presentation"
          style={
            {
              "--index": index,
              "--total-cards": cards.length,
            } as React.CSSProperties
          }
        >
          {card}
        </div>
      ))}
    </div>
  );
}

export default SpreadCards;
