import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import { CALCULATOR_FRAME_TITLE_TEXT } from "../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Main Module Behavior", () => {
  test("Test If React Dom with React-Router-Dom BrowserRouter Component was Configured Correctly", () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter });

    expect(getByText(CALCULATOR_FRAME_TITLE_TEXT)).toBeTruthy();
  });
});
