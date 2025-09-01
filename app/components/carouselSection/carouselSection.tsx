import React, { useState, useEffect } from "react";
import styles from "./carouselSection.module.css";
import ColoredCard from "../ui/coloredCard/coloredCard";
import AnimateOnScroll from "../ui/animateOnScroll/animateOnScroll";

function CarouselSection() {
  const [showMarquee, setShowMarquee] = useState(false);

  const cardsData = [
    { color: "orange" as const, key: "orange" },
    { color: "green" as const, key: "green" },
    { color: "pink" as const, key: "pink" },
    { color: "blue" as const, key: "blue" },
  ];

  // Activate marquee effect after initial slide animation completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMarquee(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <section className={styles["carouselSection"]}>
      <AnimateOnScroll
        animationType="sliding-animation"
        direction="from-right"
        delay="delay-first"
        className={styles["carouselSection__cards"]}
      >
        <div
          className={`${styles["carouselSection__track"]} ${
            showMarquee ? styles["carouselSection__track--marquee"] : ""
          }`}
        >
          {/* Always show both sets when marquee is active to avoid layout shifts */}
          {cardsData.map((card) => (
            <ColoredCard key={`first-${card.key}`} color={card.color} />
          ))}
          {cardsData.map((card) => (
            <ColoredCard key={`second-${card.key}`} color={card.color} />
          ))}
        </div>
      </AnimateOnScroll>
    </section>
  );
}

export default CarouselSection;
