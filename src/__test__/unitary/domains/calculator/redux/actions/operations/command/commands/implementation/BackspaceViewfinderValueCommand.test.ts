import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "@jest/globals";
import { NUMBER_FIVE } from "../../../../../../../../../../constants/calculator/keyboard_characters/numbersConstants";
import { CALCULATOR_KEYPAD_BACKSPACE_BUTTON_TEXT } from "../../../../../../../../../constants/pages/index/pageElementsInnerTextConstants";
import renderCalculatorIndexScreenAndCleanItsViewfinderValue from "../../../../../../../../../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";

describe("Test Class BackspaceViewfinderValueCommand Behavior", () => {
  beforeEach(() => {
    renderCalculatorIndexScreenAndCleanItsViewfinderValue();
  });

  test("Test If Command Executes Action Of Remove Last Viewfinder Value Character Correctly", () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_FIVE));
    fireEvent.click(getByText(NUMBER_FIVE));
    fireEvent.click(getByText(CALCULATOR_KEYPAD_BACKSPACE_BUTTON_TEXT));
    expect(getByDisplayValue(NUMBER_FIVE)).toBeTruthy();
  });
});
