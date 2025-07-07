import { render } from "@testing-library/react";
import RootLayout from "../layout";
import { describe, expect, it } from "vitest";

describe("RootLayout", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <RootLayout>
        <div>Test Child</div>
      </RootLayout>
    );
    expect(getByText("Test Child")).not.toBeNull();
  });
});
