"use client";
import styles from "./page.module.css";
import HeroSection from "./components/heroSection/heroSection";
import FeaturesSection from "./components/featuresSection/featuresSection";
import ContentSection from "./components/contentSection/contentSection";
import CarouselSection from "./components/carouselSection/carouselSection";
import Footer from "./components/footer/footer";
import BackToTopButton from "./components/ui/backToTopButton/backToTopButton";
import { useRef } from "react";

export default function Home() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const backToTopButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero section */}
        <HeroSection />
        {/* Features section */}
        <FeaturesSection />
        {/* Content section */}
        <ContentSection />
        {/* Carousel section */}
        <CarouselSection />
      </main>
      {/* Back to top button */}
      <BackToTopButton
        ref={backToTopButtonRef}
        bottomPosition={32}
        visibilityScrollOffset={800}
        stopElement={footerRef}
      />
      <Footer ref={footerRef} />
    </div>
  );
}
