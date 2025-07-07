import React from "react";
import ColoredCard from "../ui/coloredCard/coloredCard";
import Image from "next/image";
import styles from "./heroSection.module.css";

function HeroSection() {
  return (
    <section className={styles["heroSection"]}>
      <div className={styles["heroSection__header"]}>
        <div className={styles["heroSection__header--left"]}>
          <div className={styles["heroSection__header--left__logocontainer"]}>
            <img
              className={styles["heroSection__header--left__logo"]}
              src="/commentify_logo.svg"
              alt="Commentify Made by Kubit"
            />
            <div className={styles["heroSection__header--left__logo__text"]}>
              <img
                className={styles["heroSection__header--left__title"]}
                src="/commentify_text.svg"
                alt="Commentify Made by Kubit"
              />
              <p
                className={
                  styles["heroSection__header--left__logo__text--subtitle"]
                }
              >
                Made by Kubit
              </p>
            </div>
          </div>
          <div>
            <p className={styles["heroSection__header--left__text"]}>
              Maximize the <strong>utility of comments</strong> in Figma.{" "}
              <strong>Manage layer annotations</strong> seamlessly with your
              team. Transform chaotic comment threads into{" "}
              <strong>organized hubs</strong> of productivity.
            </p>
          </div>
        </div>

        <div className={styles["heroSection__header__cardContainer"]}>
          <div
            className={styles["heroSection__header__cardContainer__cardColumn"]}
          >
            <ColoredCard color="orange" />
            <ColoredCard color="green" />
          </div>
          <div
            className={`${styles["heroSection__header__cardContainer__cardColumn"]} ${styles["heroSection__header__cardContainer__cardColumn--right"]}`}
          >
            <ColoredCard color="blue" />
            <ColoredCard color="pink" />
          </div>
        </div>
      </div>
      <div className={`${styles["heroSection__bottomInfo"]}`}>
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
              alt={"Discover"}
              height={18}
              width={18}
            />
          }
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
