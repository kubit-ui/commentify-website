import React from "react";
import styles from "./featuresSection.module.css";
import ColoredCard from "../ui/coloredCard/coloredCard";
import Accordion from "../ui/accordion/accordion";
import SpreadCards from "../ui/spreadCards/spreadCards";
import { SpreadCard } from "../ui/spreadCards/spreadCard/spreadCard";
import ZoomedContentView from "../ui/zoomedViews/zoomedContentView";
import ZoomedFooterButtonView from "../ui/zoomedViews/zoomedFooterButtonView";
import Video from "./video/video";

function FeaturesSection() {
  return (
    <section className={styles["featuresSection"]}>
      <div className={styles["featuresSection__featuresCard"]}>
        {/* INTRO */}
        <div className={styles["featuresSection__featuresCard__intro"]}>
          <div
            className={
              styles["featuresSection__featuresCard__intro__cardContainer"]
            }
          >
            <div
              className={
                styles[
                  "featuresSection__featuresCard__intro__cardContainer__cardColumn"
                ]
              }
            >
              <ColoredCard color="orange" />
              <ColoredCard color="green" />
            </div>
            <div
              className={`${styles["featuresSection__featuresCard__intro__cardContainer__cardColumn"]} ${styles["featuresSection__featuresCard__intro__cardContainer__cardColumn--right"]}`}
            >
              <ColoredCard color="pink" />
              <ColoredCard color="blue" />
            </div>
          </div>
          <div
            className={
              styles["featuresSection__featuresCard__intro__accordion"]
            }
          >
            <span
              className={
                styles["featuresSection__featuresCard__intro__accordion__title"]
              }
            >
              What can you achieve with Commentify?
            </span>
            <Accordion allowMultiple={false} />
          </div>
        </div>
        {/* ANIMATED AND ZOOMED VIEWS */}
        <div className={styles["featuresSection__featuresCard__content"]}>
          <div
            className={
              styles["featuresSection__featuresCard__content__section"]
            }
          >
            <p
              className={
                styles["featuresSection__featuresCard__content__title"]
              }
            >
              Team selector
            </p>
            <div
              className={
                styles[
                  "featuresSection__featuresCard__content__section-content"
                ]
              }
            >
              <SpreadCards
                cards={[
                  <SpreadCard key={"blue"} color="blue" />,
                  <SpreadCard key={"pink"} color="pink" />,
                  <SpreadCard key={"green"} color="green" />,
                  <SpreadCard key={"orange"} color="orange" />,
                ]}
              />
            </div>
          </div>

          <div
            className={
              styles["featuresSection__featuresCard__content__section"]
            }
          >
            <p
              className={
                styles["featuresSection__featuresCard__content__title"]
              }
            >
              Descriptions
            </p>
            <div
              className={
                styles[
                  "featuresSection__featuresCard__content__section-content"
                ]
              }
            >
              <ZoomedContentView color="blue" />
            </div>
          </div>

          <div
            className={
              styles["featuresSection__featuresCard__content__section"]
            }
          >
            <p
              className={
                styles["featuresSection__featuresCard__content__title"]
              }
            >
              Actions
            </p>
            <div
              className={
                styles[
                  "featuresSection__featuresCard__content__section-content"
                ]
              }
            >
              <ZoomedFooterButtonView color="green" />
            </div>
          </div>
        </div>
        {/* VIDEO */}
        <div className={styles["featuresSection__featuresCard__video"]}>
          <Video
            src="./video/Commentify.mp4"
            videoOptions={{
              autoPlay: true,
              muted: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
