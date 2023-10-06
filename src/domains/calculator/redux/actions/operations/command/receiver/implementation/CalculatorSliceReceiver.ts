import {
  ERROR_STATE_TEXT,
  INITIAL_STATE_VALUE,
} from "../../../../../../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";
import {
  BACKSPACE_INITIAL_CHARACTER_INDEX,
  BACKSPACE_LAST_CHARACTER_INDEX,
} from "../../../../../../../../constants/calculator/operations/backspaceConstants";
import { StateValue } from "../../../../../../../../types/calculator/redux/StateValue";
import isViewfinderInputValueEqualToANoTValidMathematicalExpression from "../../../infrastructure/specifications/isViewfinderInputValueEqualToANoTValidMathematicalExpression";

class CalculatorSliceReceiver {
  public addCharactersToViewfinder(state: StateValue, action: string): void {
    isViewfinderInputValueEqualToANoTValidMathematicalExpression(state.value)
      ? this.turnViewfinderValueEmpty(state)
      : this.addActionPayloadToViewfinderValue(state, action);
  }

  private addActionPayloadToViewfinderValue(
    state: StateValue,
    action: string,
  ): void {
    state.value += action;
  }

  private turnViewfinderValueEmpty(state: StateValue): void {
    state.value = INITIAL_STATE_VALUE;
  }

  public getCalculateResult(state: StateValue): void {
    try {
      const evaluatedViewFinderValue: number = eval(state.value) as number;
      this.turnEvaluatedValueCurrentState(
        state,
        evaluatedViewFinderValue.toString(),
      );
    } catch (e) {
      state.value = ERROR_STATE_TEXT;
    }
  }

  private turnEvaluatedValueCurrentState(
    state: StateValue,
    evaluatedViewFinderValue: string,
  ): void {
    state.value = evaluatedViewFinderValue;
  }

  public cleanViewfinderValue(state: StateValue): void {
    this.turnViewfinderValueEmpty(state);
  }

  public backspaceViewfinderValue(state: StateValue): void {
    isViewfinderInputValueEqualToANoTValidMathematicalExpression(state.value)
      ? this.turnViewfinderValueEmpty(state)
      : this.removeLastCharacterFromViewfinder(state);
  }

  private removeLastCharacterFromViewfinder(state: StateValue): void {
    state.value = state.value.slice(
      BACKSPACE_INITIAL_CHARACTER_INDEX,
      BACKSPACE_LAST_CHARACTER_INDEX,
    );
  }
}

export default CalculatorSliceReceiver;
