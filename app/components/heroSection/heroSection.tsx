import Image from "next/image";
import React from "react";

import { useMediaQuery } from "../../hooks/useMediaQuery";
import AnimateOnScroll from "../ui/animateOnScroll/animateOnScroll";
import ColoredCard from "../ui/coloredCard/coloredCard";

import styles from "./heroSection.module.css";

/**
 * Animation delay type for consistent animation timing
 */
type AnimationDelay = "delay-first" | "delay-second" | "delay-third";

/**
 * HeroSection Component
 * 
 * Main hero section of the Commentify website featuring:
 * - Animated logo and branding elements
 * - Descriptive heading with key value propositions
 * - Interactive colored cards showcase
 * - Call-to-action with external link to Figma plugin
 * 
 * @returns The hero section component
 */
function HeroSection() {
  // Responsive breakpoint for desktop-specific animations
  const isDesktop = useMediaQuery("(min-width: 1101px)");

  // Conditional animation delay based on screen size
  const bottomSectionDelay: AnimationDelay = isDesktop ? "delay-third" : "delay-first";

  return (
    <section className={styles["heroSection"]}>
      <div className={styles["heroSection__header"]}>
        <div className={styles["heroSection__header--left"]}>
          <div className={styles["heroSection__header--left__logocontainer"]}>
            <Image
              priority
              alt="Commentify Figma Plugin Logo - Comment Management Tool"
              className={styles["heroSection__header--left__logo"]}
              height={40}
              src="/commentify_logo.svg"
              width={40}
            />
            <div className={styles["heroSection__header--left__logo__text"]}>
              <Image
                priority
                alt="Commentify - Ultimate Figma Comments and Layer Annotations Plugin"
                className={styles["heroSection__header--left__title"]}
                height={30}
                src="/commentify_text.svg"
                width={200}
              />
              <p
                className={styles["heroSection__header--left__logo__subtitle"]}
              >
                Made by Kubit
              </p>
            </div>
          </div>

          {/* Main descriptive heading with animation */}
          <AnimateOnScroll
            wallEffect
            animationType="appearing-animation"
            as="h1"
            className={styles["heroSection__header--left__text"]}
            delay="delay-second"
            direction="from-bottom"
          >
            Maximize the <strong>utility of comments</strong> in Figma.{" "}
            <strong>Manage layer annotations</strong> seamlessly with your team.
            Transform chaotic comment threads into{" "}
            <strong>organized hubs</strong> of productivity.
          </AnimateOnScroll>
        </div>

        {/* Cards with sliding animation from bottom */}
        <div className={`${styles["heroSection__header__cardContainer"]}`}>
          <AnimateOnScroll
            animationType="appearing-animation"
            className={styles["heroSection__header__cardContainer__cardColumn"]}
            delay="delay-first"
            direction="from-bottom"
            wallEffect={false}
          >
            <ColoredCard color="orange" />
            <ColoredCard color="green" />
          </AnimateOnScroll>

          <AnimateOnScroll
            wallEffect
            className={`${styles["heroSection__header__cardContainer__cardColumn"]} ${styles["heroSection__header__cardContainer__cardColumn--right"]}`}
            delay="delay-first"
            direction="from-bottom"
          >
            <ColoredCard color="blue" />
            <ColoredCard color="pink" />
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom section with sliding animation from bottom */}
      <AnimateOnScroll
        wallEffect
        animationType="appearing-animation"
        className={styles["heroSection__bottomInfo"]}
        delay={bottomSectionDelay}
        direction="from-bottom"
        threshold={0.2}
      >
        <h2>
          The ultimate plugin for maximizing the utility of comments in Figma
        </h2>
        <p>
          Commentify goes beyond basic annotation tools—it&apos;s your
          indispensable ally for managing layer annotations seamlessly in Figma.
          With it, chaotic comment threads are transformed into organized hubs
          of productivity.
        </p>
        <a
          className={styles["heroSection__bottomInfo__discoverButton"]}
          href="https://www.figma.com/community/plugin/1414902180901995274/commentify-ods"
          target="_blank"
        >
          Discover it now
          <Image
              alt="Download Commentify Figma Plugin - External link icon"
              height={18}
              src="/icon_link-external.svg"
              width={18}
            />
        </a>
      </AnimateOnScroll>
    </section>
  );
}

export default HeroSection;
