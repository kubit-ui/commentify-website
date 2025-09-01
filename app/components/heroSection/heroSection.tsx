import React from "react";
import ColoredCard from "../ui/coloredCard/coloredCard";
import Image from "next/image";
import styles from "./heroSection.module.css";
import AnimateOnScroll from "../ui/animateOnScroll/animateOnScroll";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function HeroSection() {
  // Check if we're on desktop (screens larger than 1100px)
  const isDesktop = useMediaQuery("(min-width: 1101px)");

  // Use delay-third for desktop, delay-first for tablet/mobile
  const bottomSectionDelay = isDesktop ? "delay-third" : "delay-first";

  return (
    <section className={styles["heroSection"]}>
      <div className={styles["heroSection__header"]}>
        <div className={styles["heroSection__header--left"]}>
          <div className={styles["heroSection__header--left__logocontainer"]}>
            <img
              className={styles["heroSection__header--left__logo"]}
              src="/commentify_logo.svg"
              alt="Commentify Figma Plugin Logo - Comment Management Tool"
              loading="eager"
            />
            <div className={styles["heroSection__header--left__logo__text"]}>
              <img
                className={styles["heroSection__header--left__title"]}
                src="/commentify_text.svg"
                alt="Commentify - Ultimate Figma Comments and Layer Annotations Plugin"
                loading="eager"
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
            animationType="appearing-animation"
            direction="from-bottom"
            delay="delay-second"
            className={styles["heroSection__header--left__text"]}
            as={"h1"}
            wallEffect={true}
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
            direction="from-bottom"
            delay="delay-first"
            className={styles["heroSection__header__cardContainer__cardColumn"]}
            wallEffect={false}
          >
            <ColoredCard color="orange" />
            <ColoredCard color="green" />
          </AnimateOnScroll>

          <AnimateOnScroll
            direction="from-bottom"
            delay="delay-first"
            className={`${styles["heroSection__header__cardContainer__cardColumn"]} ${styles["heroSection__header__cardContainer__cardColumn--right"]}`}
            wallEffect={true}
          >
            <ColoredCard color="blue" />
            <ColoredCard color="pink" />
          </AnimateOnScroll>
        </div>
      </div>

      {/* Bottom section with sliding animation from bottom */}
      <AnimateOnScroll
        animationType="appearing-animation"
        direction="from-bottom"
        delay={bottomSectionDelay}
        className={styles["heroSection__bottomInfo"]}
        threshold={0.2}
        wallEffect={true}
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
          {
            <Image
              src={"/icon_link-external.svg"}
              alt={"Download Commentify Figma Plugin - External link icon"}
              height={18}
              width={18}
            />
          }
        </a>
      </AnimateOnScroll>
    </section>
  );
}

export default HeroSection;
