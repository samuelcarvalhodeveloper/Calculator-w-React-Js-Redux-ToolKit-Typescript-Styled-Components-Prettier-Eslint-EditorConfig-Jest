import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "@jest/globals";
import {
  NUMBER_ONE,
  NUMBER_TWO,
} from "../../../../../../../../../../constants/calculator/keyboard_characters/numbersConstants";
import { EQUAL_OPERATION_BUTTON_TEXT } from "../../../../../../../../../constants/pages/index/pageElementsInnerTextConstants";
import renderCalculatorIndexScreenAndCleanItsViewfinderValue from "../../../../../../../../../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";
import { ADDICTION_OPERATOR } from "../../../../../../../../../../constants/calculator/keyboard_characters/operatorsConstants";

describe("Test Class GetCalculateResultCommand Behavior", () => {
  beforeEach(() => {
    renderCalculatorIndexScreenAndCleanItsViewfinderValue();
  });

  test("Test If Command Executes Action Of Get Calculate Result Correctly", () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(ADDICTION_OPERATOR));
    fireEvent.click(getByText(NUMBER_ONE));
    fireEvent.click(getByText(EQUAL_OPERATION_BUTTON_TEXT));
    expect(getByDisplayValue(NUMBER_TWO)).toBeTruthy();
  });
});
