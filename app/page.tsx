"use client";

import { useRef } from "react";

import CarouselSection from "./components/carouselSection/carouselSection";
import ContentSection from "./components/contentSection/contentSection";
import FeaturesSection from "./components/featuresSection/featuresSection";
import Footer from "./components/footer/footer";
import HeroSection from "./components/heroSection/heroSection";
import BackToTopButton from "./components/ui/backToTopButton/backToTopButton";
import styles from "./page.module.css";

/**
 * Home page component - Main landing page for Commentify
 * 
 * This component renders the complete landing page structure including:
 * - Hero section with main value proposition
 * - Features showcase section
 * - Content demonstration section  
 * - Carousel with testimonials/examples
 * - Footer with additional information
 * - Back to top navigation button
 * 
 * @returns The complete home page layout
 */
export default function Home() {
  // References for scroll behavior and positioning
  const footerRef = useRef<HTMLDivElement | null>(null);
  const backToTopButtonRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={styles.page}>
      <main className={styles.main} role="main">
        <HeroSection />
        <FeaturesSection />
        <ContentSection />
        <CarouselSection />
      </main>

      <BackToTopButton
        ref={backToTopButtonRef}
        bottomPosition={32}
        stopElement={footerRef}
        visibilityScrollOffset={800}
      />
      
      <Footer ref={footerRef} />
    </div>
  );
}
