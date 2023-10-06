import { describe, test, expect, beforeEach } from "@jest/globals";
import { fireEvent, screen } from "@testing-library/react";
import renderCalculatorIndexScreenAndCleanItsViewfinderValue from "../../../../../../../../../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";
import { NUMBER_FIVE } from "../../../../../../../../../../constants/calculator/keyboard_characters/numbersConstants";
import { CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT } from "../../../../../../../../../constants/pages/index/pageElementsInnerTextConstants";
import { INITIAL_STATE_VALUE } from "../../../../../../../../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";

describe("Test Class Calculator Slice Invoker Behavior", () => {
  beforeEach(() => {
    renderCalculatorIndexScreenAndCleanItsViewfinderValue();
  });

  test("Test If CalculatorSliceInvoker Invokes Calculator Slice Operation And Add Number To Viewfinder Value And Cleans It Correctly", () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_FIVE));
    fireEvent.click(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT));
    expect(getByDisplayValue(INITIAL_STATE_VALUE)).toBeTruthy();
  });
});
