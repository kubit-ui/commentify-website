import React from "react";

import styles from "./contentSection.module.css";

/**
 * ContentSection Component
 * 
 * Displays the main content text section with project description and community welcome message.
 * Features responsive typography and semantic HTML structure for accessibility.
 * 
 * Features:
 * - Responsive typography scaling across device sizes
 * - Semantic HTML structure with proper heading hierarchy
 * - Centered text layout with consistent spacing
 * - Accessibility-optimized content structure
 * 
 * @returns The content section component
 */
function ContentSection() {
  return (
    <section 
      aria-labelledby="content-heading"
      className={styles.contentSection}
      role="main"
    >
      <div className={styles.contentSection__text}>
        <p>
          <strong>Commentify</strong> is the tool you&apos;ve been searching for
          to elevate <strong>communication and collaboration</strong> in your
          Figma design projects.
        </p>
        <p>Contribute or make request in the GitHub project.</p>
        <h2 
          className={styles["contentSection__text--header"]}
          id="content-heading"
        >
          Welcome to the Commentify community!
        </h2>
      </div>
    </section>
  );
}

export default ContentSection;
