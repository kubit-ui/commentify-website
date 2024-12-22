import styles from './css/page.module.css';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={`${styles.title}`}>Commentify.</h1>
        <p>We are working on the website.</p>
      </div>
    </main>
  );
}
