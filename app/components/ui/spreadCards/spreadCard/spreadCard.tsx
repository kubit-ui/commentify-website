import React from "react";

import {
  CardColor,
  ColoredCardContent,
} from "../../coloredCard/coloredCard.types";

import styles from "./spreadCard.module.css";

interface SpreadCardProps {
  color: `${CardColor}`;
}

export function SpreadCard({ color }: SpreadCardProps) {
  // Obtain the header content based on the color prop
  const { number, title } = ColoredCardContent[color].header;

  return (
    <div className={`${styles.spreadCard} coloredCard-${color}`}>
      <div className={styles.spreadCard__bullet}>{number}</div>
      <div className={styles.spreadCard__title}>{title}</div>
    </div>
  );
}

export default SpreadCard;
