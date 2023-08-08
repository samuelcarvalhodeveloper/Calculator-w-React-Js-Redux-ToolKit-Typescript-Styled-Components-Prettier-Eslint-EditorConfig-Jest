import {
  ERROR_STATE_TEXT,
  INFINITY_STATE_TEXT,
  NAN_STATE_TEXT,
} from "../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";

function isStateEqualsToError(state: string): boolean {
  return state === ERROR_STATE_TEXT;
}

function isStateEqualsToInfinity(state: string): boolean {
  return state === INFINITY_STATE_TEXT;
}

function isStateEqualsToNaN(state: string): boolean {
  return state === NAN_STATE_TEXT;
}

function isViewfinderInputValueEqualToANoTValidMathematicalExpression(
  state: string,
): boolean {
  return (
    isStateEqualsToError(state) ||
    isStateEqualsToInfinity(state) ||
    isStateEqualsToNaN(state)
  );
}

export { isStateEqualsToError, isStateEqualsToInfinity, isStateEqualsToNaN };

export default isViewfinderInputValueEqualToANoTValidMathematicalExpression;
