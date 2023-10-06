import { describe, test, expect, beforeEach } from "@jest/globals";
import { fireEvent, screen } from "@testing-library/react";
import renderCalculatorIndexScreenAndCleanItsViewfinderValue from "../../../../../../../../../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";
import { NUMBER_FIVE } from "../../../../../../../../../../constants/calculator/keyboard_characters/numbersConstants";

describe("Test Class Calculator Slice Invoker With Action Behavior", () => {
  beforeEach(() => {
    renderCalculatorIndexScreenAndCleanItsViewfinderValue();
  });

  test("Test If CalculatorSliceInvoker Invokes Calculator Slice Operation And Add Number To Viewfinder Value Correctly", () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_FIVE));
    expect(getByDisplayValue(NUMBER_FIVE)).toBeTruthy();
  });
});
