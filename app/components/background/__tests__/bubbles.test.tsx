import { render } from "@testing-library/react";
import FloatingBubbles from "../bubbles";
import styles from "../bubbles.module.css";
import { describe, expect, it } from "vitest";

describe("FloatingBubbles", () => {
  it("renders correctly", () => {
    const { container } = render(<FloatingBubbles />);
    expect(container).toMatchSnapshot();
  });
  it("renders without crashing", () => {
    const { container } = render(<FloatingBubbles />);
    expect(container).not.toBeNull();
  });

  it("renders the container div with the correct class", () => {
    const { container } = render(<FloatingBubbles />);
    const div = container.querySelector(`.${styles.container}`);
    expect(div).not.toBeNull();
  });

  it("renders two oval divs with the correct classes", () => {
    const { container } = render(<FloatingBubbles />);
    const oval1 = container.querySelector(`.${styles.oval}.${styles.oval1}`);
    const oval2 = container.querySelector(`.${styles.oval}.${styles.oval2}`);
    expect(oval1).not.toBeNull();
    expect(oval2).not.toBeNull();
  });
});
