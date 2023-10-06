import { describe, test, expect } from "@jest/globals";
import {
  ERROR_STATE_TEXT,
  INFINITY_STATE_TEXT,
  NAN_STATE_TEXT,
} from "../../../../../../../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";
import isViewfinderInputValueEqualToANoTValidMathematicalExpression from "../../../../../../../../../domains/calculator/redux/actions/operations/infrastructure/specifications/isViewfinderInputValueEqualToANoTValidMathematicalExpression";

describe("Test Module isViewfinderInputValueEqualToANoTValidMathematicalExpression Behavior", () => {
  test("Test If Method: isViewfinderInputValueEqualToANoTValidMathematicalExpression(); Verify And Returns True If Value Of Viewfinder Passed By Parameter Is Equal To NoN Valid Mathematical Expression Correctly", () => {
    expect(
      isViewfinderInputValueEqualToANoTValidMathematicalExpression(
        ERROR_STATE_TEXT,
      ),
    ).toBeTruthy();
    expect(
      isViewfinderInputValueEqualToANoTValidMathematicalExpression(
        INFINITY_STATE_TEXT,
      ),
    ).toBeTruthy();
    expect(
      isViewfinderInputValueEqualToANoTValidMathematicalExpression(
        NAN_STATE_TEXT,
      ),
    ).toBeTruthy();
  });
});
