"use client";

import React from "react";
import styles from "./accordion.module.css";
import Image from "next/image";

const defaultItems = [
  {
    title: "Streamlined annotations",
    content:
      "Effortlessly create and manage annotations. Categorize your comments based on various aspects (poeditor, accessibility and analytics).",
  },
  {
    title: "Enhanced portability",
    content:
      "Stop losing comments when relocating Figma files. Commentify ensures your annotations travel with you.",
  },
  {
    title: "Instant access",
    content:
      "Access team members' comments directly from the left sidebar menu. Commentify swiftly directs you to pertinent information.",
  },
  {
    title: "Developer mode compatibility",
    content: "Integrate Commentify into your development workflow.",
  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
  allowMultiple?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
}) => {
  const [openIndexes, setOpenIndexes] = React.useState<number[]>([]);

  const usedItems = items || defaultItems;

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      // Multiple mode: add or remove index
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      // Exclusive mode: only one row open or closed
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  return (
    <div className={styles["accordion"]}>
      {usedItems.map((item, index) => (
        <div
          key={index}
          className={`${styles["accordion__item"]} ${
            openIndexes.includes(index) ? styles["accordion__item--open"] : ""
          }`}
        >
          <button
            className={styles["accordion__header"]}
            onClick={() => toggleItem(index)}
          >
            <span>{item.title}</span>
            <div className={styles["accordion__icon"]}>
              <Image
                src={
                  openIndexes.includes(index)
                    ? "icon_minus-circle.svg"
                    : "icon_plus-circle.svg"
                }
                alt={"icon"}
                height={25}
                width={25}
              />
            </div>
          </button>
          <div
            className={styles["accordion__content"]}
            // TODO - Will have to do something with this fixed value of maxHeight for responsiveness
            // (maybe CSS variables with values assigned from .tsx component dynamically)
            // ? Calculate height based on content??
            style={{
              maxHeight: openIndexes.includes(index) ? "110px" : "0",
            }}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
