import React from "react";

import styles from "./bubbles.module.css";

function FloatingBubbles() {
  return (
    <div className={styles.container}>
      <div className={`${styles.oval} ${styles.oval1}`}></div>
      <div className={`${styles.oval} ${styles.oval2}`}></div>
    </div>
  );
}

export default FloatingBubbles;
