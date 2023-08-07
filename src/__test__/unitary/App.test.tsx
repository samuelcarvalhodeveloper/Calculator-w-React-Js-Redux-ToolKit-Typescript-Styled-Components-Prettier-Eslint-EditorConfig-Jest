import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import { CALCULATOR_FRAME_TITLE_TEXT } from "../constants/pages/index/pageElementsInnerTextConstants";

describe("Test App Component Behavior", () => {
  test("Test If Index Router Was Configured Correctly", () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter });

    expect(getByText(CALCULATOR_FRAME_TITLE_TEXT)).toBeTruthy();
  });
});
