import Image from "next/image";
import React from "react";

import styles from "./footer.module.css";

/**
 * Footer Props Interface
 */
interface FooterProps {
  className?: string;
}

/**
 * Social media link interface
 */
interface SocialLink {
  href: string;
  label: string;
  name: string;
}

/**
 * Footer Component
 * 
 * Main website footer with company branding, support contact, and social media links.
 * Uses forwardRef pattern for proper element referencing and scroll behavior.
 * 
 * Features:
 * - Company logo and branding
 * - Support email contact with pre-filled subject and body
 * - Social media links (Twitter/X, Discord, GitHub)
 * - Copyright information
 * - Responsive design with mobile-friendly layout
 * - Accessible navigation with proper ARIA labels
 * 
 * @param props - Component props
 * @param ref - Forwarded ref to the footer element
 * @returns The footer component
 */
const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (props, ref) => {
    /**
     * Support email configuration
     */
    const supportEmail = "kubit.lab.dev@gmail.com";
    const emailSubject = "Kubit%20Support%20Request";
    const emailBody = "Hello%20Kubit%20team,%0A%0AI%20need%20assistance%20with...";

    /**
     * Social media links configuration
     */
    const socialLinks: SocialLink[] = [
      {
        href: "https://x.com/kubit_ui",
        label: "Follow Kubit on Twitter/X",
        name: "X | Twitter"
      },
      {
        href: "https://discord.gg/QPtZktE9sV",
        label: "Join Kubit Discord community",
        name: "Discord"
      },
      {
        href: "https://github.com/kubit-ui",
        label: "Kubit GitHub repositories",
        name: "GitHub"
      }
    ];

    return (
      <footer 
        ref={ref} 
        aria-label="Site footer with contact and social links"
        className={`${styles.footer} ${props.className || ''}`}
        role="contentinfo"
      >
        <div className={styles.footer__content}>
          <div className={styles["footer__content--top"]}>
            {/* Company Logo */}
            <Image
              alt="Kubit - Digital Design System and Figma Plugin Development"
              height={30}
              priority={false}
              src="./kubit_logo.svg"
              width={70}
            />
            
            {/* Support Contact */}
            <div className={styles["footer__content--top__support"]}>
              <a
                aria-label="Contact Kubit support team via email"
                href={`mailto:${supportEmail}?subject=${emailSubject}&body=${emailBody}`}
                rel="noopener noreferrer"
              >
                Support
              </a>
              <Image
                alt=""
                aria-hidden="true"
                height={20}
                src="./icon_contact.svg"
                width={20}
              />
            </div>
          </div>
          <div className={styles["footer__content--bottom"]}>
            {/* Company Copyright */}
            <span>© 2025 Open Digital Services S.L.</span>
            
            {/* Social Media Links */}
            <nav 
              aria-label="Social media links"
              className={styles["footer__content--bottom__social"]}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  aria-label={link.label}
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export default Footer;
