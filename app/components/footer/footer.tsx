import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = React.forwardRef(
  (props, ref: React.ForwardedRef<HTMLDivElement | null>) => {
    return (
      <footer ref={ref} className={styles["footer"]}>
        <div className={styles["footer__content"]}>
          <div className={styles["footer__content--top"]}>
            {/* Logo */}
            <Image
              src={"./kubit_logo.svg"}
              alt={"Kubit logo"}
              height={30}
              width={70}
            />
            {/* Support Link */}
            <div className={styles["footer__content--top__support"]}>
              <a
                href="mailto:kubit.lab.dev@gmail.com?subject=Kubit%20Support%20Request&body=Hello%20Kubit%20team,%0A%0AI%20need%20assistance%20with..."
                rel="noopener noreferrer"
              >
                Support
              </a>
              {/* Logo */}
              <Image
                src={"./icon_contact.svg"}
                alt={"Contact icon"}
                height={20}
                width={20}
              />
            </div>
          </div>
          <div className={styles["footer__content--bottom"]}>
            {/* ODS Copy */}
            <span>© 2025 Open Digital Services S.L.</span>
            {/* Social Media Links */}
            <div className={styles["footer__content--bottom__social"]}>
              <a
                href="https://x.com/kubit_ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                X | Twitter
              </a>
              <a
                href="https://discord.gg/QPtZktE9sV"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </a>
              <a
                href="https://github.com/kubit-ui"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";

export default Footer;
