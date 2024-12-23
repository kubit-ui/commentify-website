import styles from './css/page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={`${styles.oval} ${styles.oval1}`} id="oval1"></div>
        <div className={`${styles.oval} ${styles.oval2}`} id="oval2"></div>
        <h1 className={`${styles.title}`}>Commentify.</h1>
        <p>We are working on the website.</p>
      </div>
    </main>
  );
}
