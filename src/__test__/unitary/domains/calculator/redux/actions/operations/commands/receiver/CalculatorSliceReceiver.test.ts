import { describe, test, expect, beforeEach } from "@jest/globals";
import { fireEvent, screen } from "@testing-library/react";
import renderCalculatorIndexScreenAndCleanItsViewfinderValue from "../../../../../../../../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";
import {
  CALCULATOR_KEYPAD_BACKSPACE_BUTTON_TEXT,
  CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT,
  EQUAL_OPERATION_BUTTON_TEXT,
} from "../../../../../../../../constants/pages/index/pageElementsInnerTextConstants";
import {
  NUMBER_FIVE,
  NUMBER_ONE,
  NUMBER_TWO,
} from "../../../../../../../../../constants/calculator/keypad_characters/numbersConstants";
import { ADDICTION_OPERATOR } from "../../../../../../../../../constants/calculator/keypad_characters/operatorsConstants";
import {
  ERROR_STATE_TEXT,
  INITIAL_STATE_VALUE,
} from "../../../../../../../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";

describe("Test Class Calculator Slice Receiver Behavior", () => {
  beforeEach(() => {
    renderCalculatorIndexScreenAndCleanItsViewfinderValue();
  });

  test('Test If Method: "addCharactersToViewfinder()"; Adds Characters To Viewfinder Value Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_FIVE));
    expect(getByDisplayValue(NUMBER_FIVE)).toBeTruthy();
  });

  test('Test If Method: "addCharactersToViewfinder()"; Turn Viewfinder Value To An Empty String Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));
    expect(getByDisplayValue(ERROR_STATE_TEXT)).toBeTruthy();
  });

  test('Test If Method: "isViewfinderInputValueEqualToError()"; Turn Viewfinder Value To An Empty String If Viewfinder Value is Equal To ERROR Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));
    expect(getByDisplayValue(ERROR_STATE_TEXT)).toBeTruthy();
  });

  test('Test If Method: "addActionPayloadToViewfinderValue()"; Add ActionPayload Value To Viewfinder Value Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));
    expect(getByDisplayValue(NUMBER_TWO)).toBeTruthy();
  });

  test('Test If Method: "turnViewfinderValueEmpty()"; Turns Viewfinder Value To An Empty String If Viewfinder Value Is Equals To ERROR Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));
    expect(getByDisplayValue(ERROR_STATE_TEXT)).toBeTruthy();
  });

  test('Test If Method: "getCalculateResult()"; Generates The Calculate Result And Place It Into Viewfinder Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));
    expect(getByDisplayValue(NUMBER_TWO)).toBeTruthy();
  });

  test('Test If Method: "turnEvaluatedValueCurrentState()"; Turns Viewfinder Value To Evaluated value Correctly', () => {
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

  test('Test If Method: "removeLastCharacterFromViewfinder()"; Removes Last Character From Viewfinder Value Correctly', () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(CALCULATOR_KEYPAD_BACKSPACE_BUTTON_TEXT));
    expect(getByDisplayValue(NUMBER_ONE)).toBeTruthy();
  });
});
