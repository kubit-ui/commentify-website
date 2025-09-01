import React from "react";
import styles from "./contentSection.module.css";

function ContentSection() {
  return (
    <section className={styles["contentSection"]}>
      <div className={styles["contentSection__text"]}>
        <p>
          <strong>Commentify</strong> is the tool you&apos;ve been searching for
          to elevate <strong>communication and collaboration</strong> in your
          Figma design projects.
        </p>
        <p>Contribute or make request in the GitHub project.</p>
        <h2 className={styles["contentSection__text--header"]}>
          Welcome to the Commentify community!
        </h2>
      </div>
    </section>
  );
}

export default ContentSection;
