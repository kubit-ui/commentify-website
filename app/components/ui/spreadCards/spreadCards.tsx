import React from "react";

import styles from "./spreadCards.module.css";

function SpreadCards({ cards }: { cards: React.ReactNode[] }) {
  return (
    <div className={styles["spreadCards"]}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={styles["spreadCards__card"]}
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
