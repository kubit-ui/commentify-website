import React from "react";
import styles from "./zoomedContentView.module.css";
import {
  CardColor,
  ColoredCardContent as ColoredCardData,
} from "../coloredCard/coloredCard.types";
import {
  Header as ColoredCardHeader,
  Content as ColoredCardContent,
} from "../coloredCard/coloredCard";

function ZoomedContentView({ color = "pink" }: { color?: `${CardColor}` }) {
  const contentData = ColoredCardData[color].content;

  return (
    <div className={`${styles["zoomContent"]} coloredCard-${color}`}>
      {/* Header wrapper que desaparecerá */}
      <div className={styles["zoomContent__header"]}>
        <ColoredCardHeader
          number={ColoredCardData[color].header.number}
          title={ColoredCardData[color].header.title}
          date={ColoredCardData[color].header.date}
        />
      </div>

      {/* Content que permanecerá visible */}
      <div className={`${styles["zoomContent__content"]} coloredCard-${color}`}>
        <ColoredCardContent
          title={contentData.title}
          description={contentData.description}
        />
      </div>
    </div>
  );
}

export default ZoomedContentView;
