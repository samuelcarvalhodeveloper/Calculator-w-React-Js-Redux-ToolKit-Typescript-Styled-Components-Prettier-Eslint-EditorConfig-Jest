import { describe, test, expect } from "@jest/globals";
import renderWithStoreProviders from "../../../../../../mocks/calculator/renderChildrenWithStoreProviders";
import { CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT } from "../../../../../../constants/pages/index/pageElementsInnerTextConstants";
import KeyBoard from "../../../../../../../components/index/calculator_frame/keyboard/implementation/Keyboard";

describe('Test "Keyboard" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = renderWithStoreProviders(<KeyBoard />);

    expect(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT)).toBeTruthy();
  });
});
