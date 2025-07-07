"use client";

import React from "react";
import Image from "next/image";
import styles from "./backToTopButton.module.css";

interface BackToTopButtonProps {
  bottomPosition?: number;
  visibilityScrollOffset?: number;
  stopElement?: React.RefObject<HTMLElement | null>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const BackToTopButton = React.forwardRef(
  (
    {
      bottomPosition,
      visibilityScrollOffset = 1,
      stopElement,
      ...props
    }: BackToTopButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement | null>
  ) => {
    const innerRef = React.useRef<HTMLButtonElement | null>(null);
    const [visible, setVisible] = React.useState(false);

    React.useImperativeHandle(
      ref,
      () => {
        return innerRef?.current as HTMLButtonElement;
      },
      []
    );

    const handleScrollListener = React.useCallback(() => {
      const stop = stopElement?.current;
      const backToTop = innerRef.current;
      if (!backToTop) return;

      backToTop.style.bottom = "0px";
      // if bottomPosition is present, it will use it to add the pixels indicated
      let newBottomPosition = bottomPosition ?? 0;

      // update button bottom position when stop is present adding the distance
      // between the button's bottom and the stop element's top
      if (stop) {
        const buttonBottom = backToTop.getBoundingClientRect().bottom;
        const stopTop = stop.getBoundingClientRect().top;
        const distance = buttonBottom - stopTop;

        if (distance > 0) {
          newBottomPosition += distance;
        }
      }
      // update the position of the button (basically move it on top of stop element)
      backToTop.style.bottom = `${newBottomPosition}px`;

      const currentScrollY = window.scrollY;
      // the button will be shown after scrolling down the visibilityScrollOffset pixels
      const isInHideZone = currentScrollY < visibilityScrollOffset;

      setVisible(!isInHideZone);
    }, [stopElement, visibilityScrollOffset, bottomPosition]);

    React.useEffect(() => {
      handleScrollListener();
      window.addEventListener("scroll", handleScrollListener);
      return () => {
        window.removeEventListener("scroll", handleScrollListener);
      };
    }, [handleScrollListener]);

    const handleOnClick = (
      offset: number | React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // call the onClick function if it is passed
      props.onClick?.(
        offset as React.MouseEvent<HTMLButtonElement, MouseEvent>
      );
    };

    return (
      <button
        ref={innerRef}
        className={`${styles["backToTop"]} ${
          visible ? styles["visible"] : styles["hidden"]
        }`}
        onClick={() => handleOnClick(visibilityScrollOffset)}
      >
        <Image
          src="/icon_up-arrow-alt.svg"
          alt="Go back to top"
          width={50}
          height={50}
          priority
        />
      </button>
    );
  }
);

BackToTopButton.displayName = "BackToTopButton";

export default BackToTopButton;
