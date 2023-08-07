import { fireEvent } from "@testing-library/react";
import renderChildrenWithStoreProviders from "./renderChildrenWithStoreProviders";
import CalculatorFrame from "../../../components/index/calculator/calculator_frame/CalculatorFrame";
import { CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT } from "../../constants/pages/index/pageElementsInnerTextConstants";

function renderCalculatorFrameScreenAndCleanItsViewfinderValue(): void {
  const { getByText } = renderChildrenWithStoreProviders(<CalculatorFrame />);

  fireEvent.click(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT));
}

export default renderCalculatorFrameScreenAndCleanItsViewfinderValue;
