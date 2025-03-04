import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          src="/commentify_logo.svg"
          alt="Commentify logo"
          width={180}
          height={180}
          priority
        />
        <h1>Work in progress</h1>
        {/* Hero section */}
        {/* Features section */}
        {/* Content section */}
        {/* Carousel section */}
      </main>
      <footer className={styles.footer}>Made by Kubit</footer>
    </div>
  );
}
