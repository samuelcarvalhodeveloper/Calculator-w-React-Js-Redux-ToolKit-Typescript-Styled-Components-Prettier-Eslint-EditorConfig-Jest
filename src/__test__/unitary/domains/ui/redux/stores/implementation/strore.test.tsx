import { describe, test, expect } from "@jest/globals";
import { screen } from "@testing-library/react";
import renderIndexScreenAndCleanItsCalculatorViewfinderValue from "../../../../../../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";
import { INITIAL_STATE_VALUE } from "../../../../../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";

describe("Test Redux Store Behavior", () => {
  beforeEach(() => {
    renderIndexScreenAndCleanItsCalculatorViewfinderValue();
  });

  test("Test If Store Was Configured Correctly", () => {
    const { getByDisplayValue } = screen;
    expect(getByDisplayValue(INITIAL_STATE_VALUE)).toBeTruthy();
  });
});
