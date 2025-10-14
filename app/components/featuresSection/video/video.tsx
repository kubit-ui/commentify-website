"use client";

import React, { useRef, useEffect, useState } from "react";

import styles from "./video.module.css";

/**
 * Props interface for Video component
 */
interface VideoProps {
  /** Video source URL */
  src: string;
  /** Additional video element attributes */
  videoOptions?: React.VideoHTMLAttributes<HTMLVideoElement>;
  /** Whether to autoplay when in viewport */
  autoplayOnIntersection?: boolean;
  /** Custom poster image URL */
  poster?: string;
  /** Accessibility description */
  description?: string;
  /** Custom CSS class names */
  className?: string;
  /** Callback fired when video starts loading */
  onLoadStart?: () => void;
  /** Callback fired when video can start playing */
  onCanPlay?: () => void;
  /** Callback fired when video encounters an error */
  onError?: (error: Error) => void;
}

/**
 * Video Component
 * 
 * Enhanced video player component with intersection observer support,
 * accessibility features, and optimized loading behavior.
 * 
 * Features:
 * - Intersection observer for autoplay optimization
 * - Accessibility support with proper ARIA attributes
 * - Responsive design
 * - Error handling and fallback states
 * - Performance optimizations
 * 
 * @param src - Video source URL
 * @param videoOptions - Additional HTML video attributes
 * @param autoplayOnIntersection - Enable autoplay when video enters viewport
 * @param poster - Poster image URL for video thumbnail
 * @param description - Accessibility description for screen readers
 * @param className - Additional CSS classes
 * @returns Video player component
 */
function Video({
  src,
  videoOptions = {},
  autoplayOnIntersection = false,
  poster,
  description,
  className,
  onLoadStart,
  onCanPlay,
  onError,
}: VideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [_isIntersecting, setIsIntersecting] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !autoplayOnIntersection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay failed, which is expected in some browsers
            console.warn('Autoplay was prevented');
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [autoplayOnIntersection]);

  const handleError = (_event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setHasError(true);
    if (onError) {
      onError(new Error('Video failed to load'));
    }
  };

  const handleLoadStart = () => {
    setHasError(false);
    if (onLoadStart) {
      onLoadStart();
    }
  };

  const handleCanPlay = () => {
    if (onCanPlay) {
      onCanPlay();
    }
  };

  if (hasError) {
    return (
      <div className={`${styles.videoContainer} ${styles.videoError} ${className || ""}`}>
        <div className={styles.errorMessage}>
          <p>Video could not be loaded</p>
          <button 
            className={styles.retryButton}
            onClick={() => {
              setHasError(false);
              videoRef.current?.load();
            }}
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.videoContainer} ${className || ""}`}>
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        aria-label={description}
        className={styles.video}
        poster={poster}
        src={src}
        onCanPlay={handleCanPlay}
        onError={handleError}
        onLoadStart={handleLoadStart}
        {...videoOptions}
      />
    </div>
  );
}

export default Video;
