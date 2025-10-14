import Image from "next/image";
import React from "react";

import styles from "./ghostButton.module.css";

/**
 * Button size variants
 */
type ButtonSize = "small" | "medium" | "large";

/**
 * Button style variants
 */
type ButtonVariant = "primary" | "secondary" | "outline";

/**
 * Props interface for GhostButton component
 */
interface GhostButtonProps {
  /** Button content (text or elements) */
  children?: React.ReactNode;
  /** Button style variant */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Button label text */
  label?: string;
  /** Optional icon path */
  icon?: string;
  /** Click event handler */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Button type for form interactions */
  type?: "button" | "submit" | "reset";
  /** Additional CSS class names */
  className?: string;
  /** Accessibility label for screen readers */
  ariaLabel?: string;
  /** Accessibility label (alternative prop name) */
  "aria-label"?: string;
}

/**
 * GhostButton Component
 * 
 * A lightweight button component with optional icon support.
 * Designed with a minimal "ghost" appearance that emphasizes content over chrome.
 * 
 * @param label - The text content of the button
 * @param icon - Optional icon path to display alongside text
 * @param onClick - Handler function for click events
 * @param disabled - Whether the button is disabled
 * @param type - Button type for form interactions (default: "button")
 * @param className - Additional CSS classes
 * @param aria-label - Accessibility label for screen readers
 * @returns A styled button element
 */
function GhostButton({
  children,
  variant = "primary",
  size = "medium",
  label,
  icon,
  disabled = false,
  type = "button",
  className,
  ariaLabel,
  "aria-label": ariaLabelProp,
  onClick,
  ...props
}: GhostButtonProps) {
  return (
    <button
      aria-label={ariaLabel || ariaLabelProp || label}
      className={`${styles.ghostButton} ${styles[`ghostButton--${variant}`]} ${styles[`ghostButton--${size}`]} ${className || ""}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      <span className={styles.ghostButton__label}>
        {children || label}
      </span>
      {icon && (
        <Image
          alt=""
          aria-hidden="true"
          className={styles.ghostButton__icon}
          height={18}
          src={icon}
          width={18}
        />
      )}
    </button>
  );
}

export default GhostButton;
