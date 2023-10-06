import { fireEvent, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "@jest/globals";
import { NUMBER_FIVE } from "../../../../../../../../../../constants/calculator/keyboard_characters/numbersConstants";
import renderCalculatorIndexScreenAndCleanItsViewfinderValue from "../../../../../../../../../mocks/calculator/renderCalculatorIndexScreenAndCleanItsViewfinderValue";

describe("Test Class AddCharactersToViewfinderCommand Behavior", () => {
  beforeEach(() => {
    renderCalculatorIndexScreenAndCleanItsViewfinderValue();
  });

  test("Test If Command Executes Action Of Add Character To Viewfinder Value Correctly", () => {
    const { getByDisplayValue, getByText } = screen;
    fireEvent.click(getByText(NUMBER_FIVE));
    expect(getByDisplayValue(NUMBER_FIVE)).toBeTruthy();
  });
});
