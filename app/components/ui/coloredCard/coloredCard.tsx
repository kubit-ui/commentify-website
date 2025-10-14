import React from "react";

import GhostButton from "../ghostButton/ghostButton";

import styles from "./coloredCard.module.css";
import {
  CardColor,
  HeaderProps,
  ContentProps,
  ColoredCardContent,
} from "./coloredCard.types";

/**
 * Header component for ColoredCard
 * Displays card number, title, and date information
 * 
 * @param number - Sequential number for the card
 * @param title - Main title of the card
 * @param date - Date information for the card
 * @returns Header section of the colored card
 */
export function Header({ number, title, date }: HeaderProps) {
  return (
    <div className={styles.coloredCard__header}>
      <div aria-label={`Card number ${number}`} className={styles.coloredCard__header__bullet}>
        {number}
      </div>
      <div className={styles.coloredCard__header__title}>
        {title}
      </div>
      <div className={styles.coloredCard__header__date}>
        <time dateTime={date}>{date}</time>
      </div>
    </div>
  );
}

/**
 * Content component for ColoredCard
 * Displays optional title and description content
 * 
 * @param title - Optional content title
 * @param description - Main description text
 * @returns Content section of the colored card
 */
export function Content({ title, description }: ContentProps) {
  return (
    <div className={styles.coloredCard__content}>
      {title && (
        <h3 className={styles.coloredCard__content__title}>
          {title}
        </h3>
      )}
      <pre className={styles.coloredCard__content__description}>
        {description}
      </pre>
    </div>
  );
}

/**
 * Footer component for ColoredCard
 * Contains action buttons for editing and deleting
 * 
 * @returns Footer section with action buttons
 */
export function Footer() {
  return (
    <div aria-label="Card actions" className={styles.coloredCard__footer} role="toolbar">
      <GhostButton
        aria-label="Edit this card"
        icon="/edit_pencil.svg"
        label="Edit"
      />
      <GhostButton
        aria-label="Delete this card"
        icon="/delete_trash.svg"
        label="Delete"
      />
    </div>
  );
}

function ColoredCard({ color }: { color: `${CardColor}` }) {
  return (
    <div className={`${styles["coloredCard"]} coloredCard-${color}`}>
      <Header {...ColoredCardContent[color].header} />
      <Content {...ColoredCardContent[color].content} />
      <Footer />
    </div>
  );
}

export default ColoredCard;
