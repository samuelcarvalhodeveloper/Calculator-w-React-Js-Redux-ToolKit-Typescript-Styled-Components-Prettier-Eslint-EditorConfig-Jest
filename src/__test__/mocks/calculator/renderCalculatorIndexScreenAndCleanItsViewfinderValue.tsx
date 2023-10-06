import { fireEvent } from "@testing-library/react";
import Index from "../../../pages";
import renderChildrenWithStoreProviders from "./renderChildrenWithStoreProviders";
import { CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT } from "../../constants/pages/index/pageElementsInnerTextConstants";

function renderIndexScreenAndCleanItsCalculatorViewfinderValue(): void {
  const { getByText } = renderChildrenWithStoreProviders(<Index />);

  fireEvent.click(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT));
}

export default renderIndexScreenAndCleanItsCalculatorViewfinderValue;
