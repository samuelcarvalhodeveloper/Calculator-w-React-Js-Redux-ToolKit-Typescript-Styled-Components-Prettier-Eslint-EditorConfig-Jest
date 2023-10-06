import { describe, test, expect } from "@jest/globals";
import renderWithStoreProviders from "../../../../../../mocks/calculator/renderChildrenWithStoreProviders";
import { CALCULATOR_FRAME_TITLE_TEXT } from "../../../../../../constants/pages/index/pageElementsInnerTextConstants";
import { INITIAL_STATE_VALUE } from "../../../../../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";
import Viewfinder from "../../../../../../../components/index/calculator_frame/viewfinder/implementation/Viewfinder";

describe('Test "Viewfinder" Component Behavior', () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = renderWithStoreProviders(<Viewfinder />);

    expect(getByText(CALCULATOR_FRAME_TITLE_TEXT)).toBeTruthy();
  });

  test("Test If Viewfinder Value Was Set With Redux Calculator Slice Initial State Correctly", () => {
    const { getByDisplayValue } = renderWithStoreProviders(<Viewfinder />);

    expect(getByDisplayValue(INITIAL_STATE_VALUE)).toBeTruthy();
  });
});
