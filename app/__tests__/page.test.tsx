import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Home from "../page";

test("Home", () => {
  render(<Home />);
  expect(true).toBe(true);
});
