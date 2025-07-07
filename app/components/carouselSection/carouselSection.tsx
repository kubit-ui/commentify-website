import React from "react";
import styles from "./carouselSection.module.css";
import ColoredCard from "../ui/coloredCard/coloredCard";

function CarouselSection() {
  return (
    <section className={styles["carouselSection"]}>
      <div className={styles["carouselSection__cards"]}>
        <ColoredCard color="orange" />
        <ColoredCard color="green" />
        <ColoredCard color="pink" />
        <ColoredCard color="blue" />
      </div>
    </section>
  );
}

export default CarouselSection;
