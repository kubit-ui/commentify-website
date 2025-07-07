import React from "react";

import styles from "./coloredCard.module.css";
import GhostButton from "../ghostButton/ghostButton";
import {
  CardColor,
  HeaderProps,
  ContentProps,
  ColoredCardContent,
} from "./coloredCard.types";

export function Header({ number, title, date }: HeaderProps) {
  return (
    <div className={styles["coloredCard__header"]}>
      <div className={styles["coloredCard__header__bullet"]}>{number}</div>
      <div className={styles["coloredCard__header__title"]}>{title}</div>
      <div className={styles["coloredCard__header__date"]}>{date}</div>
    </div>
  );
}

export function Content({ title, description }: ContentProps) {
  return (
    <div className={styles["coloredCard__content"]}>
      {title && (
        <div className={styles["coloredCard__content__title"]}>{title}</div>
      )}
      <pre className={styles["coloredCard__content__description"]}>
        {description}
      </pre>
    </div>
  );
}

export function Footer() {
  return (
    <div className={styles["coloredCard__footer"]}>
      <GhostButton
        label="Edit"
        icon={"/edit_pencil.svg"}
        // onClick={() => console.log("Left Action")}
      />
      <GhostButton
        label="Delete"
        icon={"/delete_trash.svg"}
        // onClick={() => console.log("Right Action")}
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
