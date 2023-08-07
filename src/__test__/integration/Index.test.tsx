import { describe, test, expect } from "@jest/globals";
import { fireEvent, screen } from "@testing-library/react";
import renderCalculatorIndexScreenAndCleanItsViewfinderValue from "../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";
import { HEADER_SITE_LOGO_ALT_TEXT } from "../constants/pages/index/pageElementsAltTextConstants";
import {
  CALCULATOR_FRAME_SUBTITLE_TEXT,
  CALCULATOR_FRAME_TITLE_TEXT,
  CALCULATOR_KEYPAD_BACKSPACE_BUTTON_TEXT,
  CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT,
  EQUAL_OPERATION_BUTTON_TEXT,
} from "../constants/pages/index/pageElementsInnerTextConstants";
import {
  NUMBER_FOUR,
  NUMBER_ONE,
  NUMBER_TWO,
} from "../../constants/calculator/keypad_characters/numbersConstants";
import {
  ADDICTION_OPERATOR,
  DIVISION_OPERATOR,
  MULTIPLICATION_OPERATOR,
  SUBTRACTION_OPERATOR,
} from "../../constants/calculator/keypad_characters/operatorsConstants";
import { INITIAL_STATE_VALUE } from "../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";

describe("Test Index Domain Behavior", () => {
  beforeEach(() => {
    renderCalculatorIndexScreenAndCleanItsViewfinderValue();
  });
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText, getByAltText } = screen;

    expect(getByAltText(HEADER_SITE_LOGO_ALT_TEXT)).toBeTruthy();
    expect(getByText(CALCULATOR_FRAME_TITLE_TEXT)).toBeTruthy();
    expect(getByText(CALCULATOR_FRAME_SUBTITLE_TEXT)).toBeTruthy();
    expect(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT)).toBeTruthy();
  });

  test("Test If Simple Addiction Operation Was Done Correctly", () => {
    const { getByText, getByDisplayValue } = screen;

    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));

    expect(getByDisplayValue(NUMBER_TWO)).toBeTruthy();
  });

  test("Test If Simple Multiplication Operation Was Done Correctly", () => {
    const { getByText, getByDisplayValue } = screen;

    fireEvent.click(getByText(NUMBER_TWO));
    fireEvent.click(getByText(MULTIPLICATION_OPERATOR));
    fireEvent.click(getByText(NUMBER_TWO));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));

    expect(getByDisplayValue(NUMBER_FOUR)).toBeTruthy();
  });

  test("Test If Simple Subtraction Operation Was Done Correctly", () => {
    const { getByText, getByDisplayValue } = screen;

    fireEvent.click(getByText(NUMBER_TWO));
    fireEvent.click(getByText(SUBTRACTION_OPERATOR));
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));

    expect(getByDisplayValue(NUMBER_ONE)).toBeTruthy();
  });

  test("Test If Simple Division Operation Was Done Correctly", () => {
    const { getByText, getByDisplayValue } = screen;

    fireEvent.click(getByText(NUMBER_TWO));
    fireEvent.click(getByText(DIVISION_OPERATOR));
    fireEvent.click(getByText(NUMBER_TWO));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));

    expect(getByDisplayValue(NUMBER_ONE)).toBeTruthy();
  });

  test("Test If Viewfinder Value Is Cleaned Correctly", () => {
    const { getByText, getByDisplayValue } = screen;

    fireEvent.click(getByText(NUMBER_TWO));
    fireEvent.click(getByText(NUMBER_TWO));
    fireEvent.click(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT));

    expect(getByDisplayValue(INITIAL_STATE_VALUE)).toBeTruthy();
  });

  test("Test If Backspace Removes The Last Viewfinder Character Correctly", () => {
    const { getByText, getByDisplayValue } = screen;

    fireEvent.click(getByText(NUMBER_TWO));
    fireEvent.click(getByText(NUMBER_TWO));
    fireEvent.click(getByText(CALCULATOR_KEYPAD_BACKSPACE_BUTTON_TEXT));

    expect(getByDisplayValue(NUMBER_TWO)).toBeTruthy();
  });
});
