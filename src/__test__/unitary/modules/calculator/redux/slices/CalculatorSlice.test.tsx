import { describe, test, expect } from "@jest/globals";
import { fireEvent, screen } from "@testing-library/react";
import renderCalculatorIndexScreenAndCleanItsViewfinderValue from "../../../../../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";
import {
  CALCULATOR_KEYPAD_BACKSPACE_BUTTON_TEXT,
  CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT,
  EQUAL_OPERATION_BUTTON_TEXT,
} from "../../../../../constants/pages/index/pageElementsInnerTextConstants";
import { INITIAL_STATE_VALUE } from "../../../../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";
import {
  NUMBER_FIVE,
  NUMBER_ONE,
  NUMBER_TWO,
} from "../../../../../../constants/calculator/keypad_characters/numbersConstants";
import { ADDICTION_OPERATOR } from "../../../../../../constants/calculator/keypad_characters/operatorsConstants";

describe("Test Calculator Slice Behavior", () => {
  beforeEach(() => {
    renderCalculatorIndexScreenAndCleanItsViewfinderValue();
  });

  test("Test If Calculator Slice Initial State Is Placed To Calculator Viewfinder Value Correctly", () => {
    const { getByDisplayValue } = screen;
    expect(getByDisplayValue(INITIAL_STATE_VALUE)).toBeTruthy();
  });

  test('Test If Method: "addCharactersToViewfinder()"; Adds Characters To Viewfinder Value Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_FIVE));
    expect(getByDisplayValue(NUMBER_FIVE)).toBeTruthy();
  });

  test('Test If Method: "getCalculateResult()"; Generates The Calculate Result And Place It Into Viewfinder Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));
    expect(getByDisplayValue(NUMBER_TWO)).toBeTruthy();
  });

  test('Test If Method: "cleanViewfinderValue()"; Cleans Viewfinder Value Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT));
    expect(getByDisplayValue(INITIAL_STATE_VALUE)).toBeTruthy();
  });

  test('Test If Method: "backspaceViewfinderValue()"; Backspaces Viewfinder Value Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(CALCULATOR_KEYPAD_BACKSPACE_BUTTON_TEXT));
    expect(getByDisplayValue(NUMBER_ONE)).toBeTruthy();
  });
});
