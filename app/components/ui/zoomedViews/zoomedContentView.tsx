import React from "react";

import {
  Header as ColoredCardHeader,
  Content as ColoredCardContent,
} from "../coloredCard/coloredCard";
import {
  CardColor,
  ColoredCardContent as ColoredCardData,
} from "../coloredCard/coloredCard.types";

import styles from "./zoomedContentView.module.css";

/**
 * ZoomedContentView Props Interface
 */
interface ZoomedContentViewProps {
  /** Color theme for the zoomed content view */
  color?: keyof typeof ColoredCardData;
  /** Optional additional CSS class name */
  className?: string;
}

/**
 * ZoomedContentView Component
 * 
 * Displays a zoomed-in view of colored card content with animated transitions.
 * Shows both header and content sections with the header disappearing on zoom.
 * 
 * Features:
 * - Animated header disappearance on zoom interaction
 * - Persistent content section during zoom state
 * - Color-themed styling based on selected card color
 * - Smooth CSS transitions between states
 * - Responsive design for all device sizes
 * 
 * @param props - Component props with color and optional className
 * @returns The zoomed content view component
 */
function ZoomedContentView({ color = CardColor.PINK, className }: ZoomedContentViewProps) {
  const contentData = ColoredCardData[color].content;
  const headerData = ColoredCardData[color].header;

  return (
    <div 
      aria-label={`Zoomed view of ${color} card content`}
      className={`${styles.zoomContent} coloredCard-${color} ${className || ''}`}
      role="region"
    >
      {/* Header wrapper - disappears on zoom */}
      <div 
        aria-hidden="true"
        className={styles.zoomContent__header}
        role="presentation"
      >
        <ColoredCardHeader
          date={headerData.date}
          number={headerData.number}
          title={headerData.title}
        />
      </div>

      {/* Content - remains visible during zoom */}
      <div 
        className={`${styles.zoomContent__content} coloredCard-${color}`}
        role="main"
      >
        <ColoredCardContent
          description={contentData.description}
          title={contentData.title}
        />
      </div>
    </div>
  );
}

export default ZoomedContentView;
