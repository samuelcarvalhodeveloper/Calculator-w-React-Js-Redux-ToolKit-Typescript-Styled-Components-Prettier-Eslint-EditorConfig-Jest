import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "@jest/globals";
import { NUMBER_FIVE } from "../../../../../../../../../../constants/calculator/keyboard_characters/numbersConstants";
import { CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT } from "../../../../../../../../../constants/pages/index/pageElementsInnerTextConstants";
import renderCalculatorIndexScreenAndCleanItsViewfinderValue from "../../../../../../../../../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";
import { INITIAL_STATE_VALUE } from "../../../../../../../../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";

describe("Test Class CleanViewfinderValueCommand Behavior", () => {
  beforeEach(() => {
    renderCalculatorIndexScreenAndCleanItsViewfinderValue();
  });

  test("Test If Command Executes Action Of Clear Viewfinder Value Correctly", () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_FIVE));
    fireEvent.click(getByText(NUMBER_FIVE));
    fireEvent.click(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT));
    expect(getByDisplayValue(INITIAL_STATE_VALUE)).toBeTruthy();
  });
});
