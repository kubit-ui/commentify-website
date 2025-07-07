"use client";
import React from "react";
import styles from "./video.module.css";

interface VideoProps {
  src: string;
  videoOptions?: React.VideoHTMLAttributes<HTMLVideoElement>;
}

/**
 * Video - Component to display video
 */
function Video({ src, videoOptions }: VideoProps) {
  return (
    <div className={`${styles["videoContainer"]}`}>
      <video
        className={`${styles["video"]}`}
        playsInline
        muted
        loop
        src={src}
        {...videoOptions}
      />
    </div>
  );
}

export default Video;
