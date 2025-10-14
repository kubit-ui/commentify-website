import React, { useState, useEffect, useCallback } from "react";

import AnimateOnScroll from "../ui/animateOnScroll/animateOnScroll";
import ColoredCard from "../ui/coloredCard/coloredCard";
import { CardColor } from "../ui/coloredCard/coloredCard.types";

import styles from "./carouselSection.module.css";

/**
 * Card data interface
 */
interface CardData {
  color: CardColor;
  key: string;
}

/**
 * Static card data configuration - moved outside component to prevent re-renders
 */
const CARDS_DATA: CardData[] = [
  { color: CardColor.ORANGE, key: "orange" },
  { color: CardColor.GREEN, key: "green" },
  { color: CardColor.PINK, key: "pink" },
  { color: CardColor.BLUE, key: "blue" },
];

/**
 * CarouselSection Component
 * 
 * Displays an animated horizontal carousel of colored cards with marquee effect.
 * Features a sliding entrance animation followed by an infinite horizontal scroll.
 * 
 * Features:
 * - Initial slide-in animation from the right
 * - Automatic marquee activation after animation completion
 * - Smooth infinite horizontal scrolling
 * - Duplicated card sets for seamless loop
 * - Performance optimized with proper cleanup
 * 
 * @returns The carousel section component
 */
function CarouselSection() {
  const [showMarquee, setShowMarquee] = useState<boolean>(false);

  /**
   * Activate marquee effect after initial slide animation completes
   */
  const activateMarquee = useCallback(() => {
    setShowMarquee(true);
  }, []);

  useEffect(() => {
    const marqueeTimer = setTimeout(activateMarquee, 2000);

    return () => {
      clearTimeout(marqueeTimer);
    };
  }, [activateMarquee]);
  /**
   * Render carousel cards with duplication for seamless loop effect
   */
  const renderCards = useCallback((prefix: string) => {
    return CARDS_DATA.map((card) => (
      <ColoredCard key={`${prefix}-${card.key}`} color={card.color} />
    ));
  }, []);

  return (
    <section 
      aria-label="Animated carousel showcase"
      className={styles.carouselSection}
      role="region"
    >
      <AnimateOnScroll
        animationType="sliding-animation"
        className={styles.carouselSection__cards}
        delay="delay-first"
        direction="from-right"
      >
        <div
          aria-hidden="true"
          className={`${styles.carouselSection__track} ${
            showMarquee ? styles["carouselSection__track--marquee"] : ""
          }`}
          role="presentation"
        >
          {/* Always show both sets when marquee is active to avoid layout shifts */}
          {renderCards("first")}
          {renderCards("second")}
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default CarouselSection;
