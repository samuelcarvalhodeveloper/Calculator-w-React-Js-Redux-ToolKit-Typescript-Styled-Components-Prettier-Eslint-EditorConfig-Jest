import { describe, test, expect } from "@jest/globals";
import Keypad from "../../../../components/index/calculator/keypad/Keypad";
import renderWithStoreProviders from "../../../mocks/calculator/renderChildrenWithStoreProviders";
import { CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT } from "../../../constants/pages/index/pageElementsInnerTextConstants";

describe('Test "Keypad" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = renderWithStoreProviders(<Keypad />);

    expect(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT)).toBeTruthy();
  });
});
