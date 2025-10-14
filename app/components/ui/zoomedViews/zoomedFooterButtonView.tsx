import React from "react";

import {
  Content as ColoredCardContent,
  Footer as ColoredCardFooter,
} from "../coloredCard/coloredCard";
import {
  CardColor,
  ColoredCardContent as ColoredCardData,
} from "../coloredCard/coloredCard.types";

import styles from "./zoomedFooterButtonView.module.css";

/**
 * ZoomedFooterButtonView Props Interface
 */
interface ZoomedFooterButtonViewProps {
  /** Color theme for the zoomed footer view */
  color?: keyof typeof ColoredCardData;
  /** Optional additional CSS class name */
  className?: string;
}

/**
 * ZoomedFooterButtonView Component
 * 
 * Displays a zoomed-in view of colored card footer with action buttons.
 * Shows truncated content and emphasizes the footer action section.
 * 
 * Features:
 * - Intelligent content truncation (respects word boundaries)
 * - Animated footer button emphasis on zoom
 * - Color-themed styling based on selected card color
 * - Responsive design for all device sizes
 * - Accessible button interactions
 * 
 * @param props - Component props with color and optional className
 * @returns The zoomed footer view component
 */
function ZoomedFooterButtonView({
  color = CardColor.BLUE,
  className,
}: ZoomedFooterButtonViewProps) {
  const contentData = ColoredCardData[color].content;

  const truncatedContent = {
    title: "",
    description: getHalfDescription(contentData.description),
  };

  return (
    <div 
      aria-label={`Zoomed view of ${color} card footer actions`}
      className={`${styles.zoomFooter} coloredCard-${color} ${className || ''}`}
      role="region"
    >
      {/* Content container with truncated text */}
      <div className={styles.zoomFooter__content}>
        <ColoredCardContent
          description={truncatedContent.description}
          title={truncatedContent.title}
        />
      </div>

      {/* Footer container with action buttons */}
      <div 
        aria-label="Card action buttons"
        className={styles.zoomFooter__footer}
        role="complementary"
      >
        <ColoredCardFooter />
      </div>
    </div>
  );
}

/**
 * Intelligently truncates descriptions to show the second half of content
 * while respecting word boundaries and line breaks.
 * 
 * @param description - The full description text to truncate
 * @returns The truncated description (second half)
 */
function getHalfDescription(description: string): string {
  // If the description contains line breaks, take the second half of the lines
  if (description.includes("\n")) {
    const lines = description.split("\n");
    const halfLinesIndex = Math.ceil(lines.length / 2);
    return lines.slice(halfLinesIndex).join("\n");
  }

  // For single line descriptions, take the second half
  // but ensure we don't cut words in the middle
  const halfLength = Math.ceil(description.length / 2);

  // Find the first space after the halfway point
  let startIndex = halfLength;
  while (startIndex < description.length && description[startIndex] !== " ") {
    startIndex++;
  }

  // If we reached the end without finding a space, find the last space before halfway
  if (startIndex >= description.length) {
    startIndex = halfLength;
    while (startIndex > 0 && description[startIndex] !== " ") {
      startIndex--;
    }
  }

  // Return the second half starting from a word boundary
  return startIndex <= 0 ? description : description.slice(startIndex + 1);
}

export default ZoomedFooterButtonView;
