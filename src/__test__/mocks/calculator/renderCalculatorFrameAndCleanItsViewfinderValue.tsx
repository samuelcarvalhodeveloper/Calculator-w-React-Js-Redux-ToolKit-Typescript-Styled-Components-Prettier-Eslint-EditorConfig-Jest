import { fireEvent } from "@testing-library/react";
import renderChildrenWithStoreProviders from "./renderChildrenWithStoreProviders";
import { CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT } from "../../constants/pages/index/pageElementsInnerTextConstants";
import CalculatorFrame from "../../../components/index/calculator_frame/calculator_frame_component/implementation/CalculatorFrame";

function renderCalculatorFrameScreenAndCleanItsCalculatorViewfinderValue(): void {
  const { getByText } = renderChildrenWithStoreProviders(<CalculatorFrame />);

  fireEvent.click(getByText(CALCULATOR_KEYPAD_CLEAN_BUTTON_TEXT));
}

export default renderCalculatorFrameScreenAndCleanItsCalculatorViewfinderValue;
