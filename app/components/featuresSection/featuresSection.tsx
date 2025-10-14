import React from "react";

import Accordion from "../ui/accordion/accordion";
import ColoredCard from "../ui/coloredCard/coloredCard";
import { CardColor } from "../ui/coloredCard/coloredCard.types";
import { SpreadCard } from "../ui/spreadCards/spreadCard/spreadCard";
import SpreadCards from "../ui/spreadCards/spreadCards";
import ZoomedContentView from "../ui/zoomedViews/zoomedContentView";
import ZoomedFooterButtonView from "../ui/zoomedViews/zoomedFooterButtonView";

import styles from "./featuresSection.module.css";
import Video from "./video/video";

/**
 * Video configuration interface
 */
interface VideoOptions {
  autoPlay: boolean;
  muted: boolean;
  loop: boolean;
}

/**
 * FeaturesSection Component
 * 
 * Displays the main features showcase section with interactive elements.
 * Contains cards, accordion, team selector, descriptions, actions, and demo video.
 * 
 * Features:
 * - Introduction section with colored cards and accordion
 * - Team selector with spread cards animation
 * - Description viewer with zoomed content
 * - Action buttons with zoomed footer view
 * - Demo video with custom controls
 * - Responsive layout optimized for all devices
 * 
 * @returns The features section component
 */
function FeaturesSection() {
  /**
   * Video configuration with performance optimizations
   */
  const videoOptions: VideoOptions = {
    autoPlay: true,
    muted: true,
    loop: true,
  };

  /**
   * Card colors for the team selector
   */
  const teamSelectorCards: CardColor[] = [CardColor.BLUE, CardColor.PINK, CardColor.GREEN, CardColor.ORANGE];

  return (
    <section 
      aria-labelledby="features-heading"
      className={styles.featuresSection}
      role="main"
    >
      <div className={styles.featuresSection__featuresCard}>
        {/* INTRO */}
        <div className={styles.featuresSection__featuresCard__intro}>
          <div className={styles.featuresSection__featuresCard__intro__cardContainer}>
            <div className={styles.featuresSection__featuresCard__intro__cardContainer__cardColumn}>
              <ColoredCard color="orange" />
              <ColoredCard color="green" />
            </div>
            <div className={`${styles.featuresSection__featuresCard__intro__cardContainer__cardColumn} ${styles["featuresSection__featuresCard__intro__cardContainer__cardColumn--right"]}`}>
              <ColoredCard color="pink" />
              <ColoredCard color="blue" />
            </div>
          </div>
          <div className={styles.featuresSection__featuresCard__intro__accordion}>
            <h2
              className={styles.featuresSection__featuresCard__intro__accordion__title}
              id="features-heading"
            >
              What can you achieve with Commentify?
            </h2>
            <Accordion allowMultiple={false} />
          </div>
        </div>
        {/* ANIMATED AND ZOOMED VIEWS */}
        <div className={styles.featuresSection__featuresCard__content}>
          <div className={styles.featuresSection__featuresCard__content__section}>
            <h3 className={styles.featuresSection__featuresCard__content__title}>
              Team selector
            </h3>
            <div className={styles["featuresSection__featuresCard__content__section-content"]}>
              <SpreadCards
                cards={teamSelectorCards.map((color) => (
                  <SpreadCard key={color} color={color} />
                ))}
              />
            </div>
          </div>

          <div className={styles.featuresSection__featuresCard__content__section}>
            <h3 className={styles.featuresSection__featuresCard__content__title}>
              Descriptions
            </h3>
            <div className={styles["featuresSection__featuresCard__content__section-content"]}>
              <ZoomedContentView color={CardColor.BLUE} />
            </div>
          </div>

          <div className={styles.featuresSection__featuresCard__content__section}>
            <h3 className={styles.featuresSection__featuresCard__content__title}>
              Actions
            </h3>
            <div className={styles["featuresSection__featuresCard__content__section-content"]}>
              <ZoomedFooterButtonView color={CardColor.GREEN} />
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div 
          aria-label="Commentify demo video"
          className={styles.featuresSection__featuresCard__video}
          role="region"
        >
          <Video
            src="./video/Commentify.mp4"
            videoOptions={videoOptions}
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
