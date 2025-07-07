import React from "react";
import styles from "./zoomedFooterButtonView.module.css";
import {
  CardColor,
  ColoredCardContent as ColoredCardData,
} from "../coloredCard/coloredCard.types";
import {
  Content as ColoredCardContent,
  Footer as ColoredCardFooter,
} from "../coloredCard/coloredCard";

function ZoomedFooterButtonView({
  color = "blue",
}: {
  color?: `${CardColor}`;
}) {
  const contentData = ColoredCardData[color].content;

  const truncatedContent = {
    title: "",
    description: getHalfDescription(contentData.description),
  };

  return (
    <div className={`${styles["zoomFooter"]} coloredCard-${color}`}>
      {/* Content container */}
      <div className={styles["zoomFooter__content"]}>
        <ColoredCardContent
          title={truncatedContent.title}
          description={truncatedContent.description}
        />
      </div>

      {/* Footer container */}
      <div className={styles["zoomFooter__footer"]}>
        <ColoredCardFooter />
      </div>
    </div>
  );
}

// Function that truncates descriptions intelligently
function getHalfDescription(description: string): string {
  // If the description contains line breaks, take half of the lines
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
