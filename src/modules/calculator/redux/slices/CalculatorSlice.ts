import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { INITIAL_STATE_VALUE } from "../../../../constants/calculator/viewfinder/calculatorViewfinderValuesConstants";
import { CALCULATOR_SLICE_NAME } from "../../../../constants/calculator/redux/reduxSliceNameConstants";
import { StateValue } from "../../../../types/calculator/redux/StateValue";
import CalculatorSliceReceiver from "../actions/operations/command/receiver/CalculatorSliceReceiver";
import AddCharactersToViewfinderCommand from "../actions/operations/command/commands/AddCharactersToViewfinderCommand";
import CalculatorSliceInvoker from "../actions/operations/command/invoker/CalculatorSliceInvoker";
import GetCalculateResultCommand from "../actions/operations/command/commands/GetCalculateResultCommand";
import CleanViewfinderValueCommand from "../actions/operations/command/commands/CleanViewfinderValueCommand";
import BackspaceViewfinderValueCommand from "../actions/operations/command/commands/BackspaceViewfinderValueCommand";
import CalculatorSliceInvokerWithActions from "../actions/operations/command/invoker/CalculatorSliceInvokerWithAction";

class CalculatorSlice {
  private initialState = {
    value: INITIAL_STATE_VALUE,
  };

  public calculatorSliceConfiguration = createSlice({
    name: CALCULATOR_SLICE_NAME,
    initialState: this.initialState,
    reducers: {
      addCharactersToViewfinder: (
        state: StateValue,
        action: PayloadAction<string>,
      ): void => {
        const calculatorSliceReceiver: CalculatorSliceReceiver =
          new CalculatorSliceReceiver();
        const addCharactersToViewfinderCommand: AddCharactersToViewfinderCommand =
          new AddCharactersToViewfinderCommand(calculatorSliceReceiver);
        const calculatorSliceInvokerWithActions: CalculatorSliceInvokerWithActions =
          new CalculatorSliceInvokerWithActions(
            addCharactersToViewfinderCommand,
          );
        calculatorSliceInvokerWithActions.execute(state, action.payload);
      },
      getCalculateResult: (state: StateValue): void => {
        const calculatorSliceReceiver: CalculatorSliceReceiver =
          new CalculatorSliceReceiver();
        const getCalculateResultCommand: GetCalculateResultCommand =
          new GetCalculateResultCommand(calculatorSliceReceiver);
        const calculatorSliceInvoker: CalculatorSliceInvoker =
          new CalculatorSliceInvoker(getCalculateResultCommand);
        calculatorSliceInvoker.execute(state);
      },
      cleanViewfinderValue: (state: StateValue): void => {
        const calculatorSliceReceiver: CalculatorSliceReceiver =
          new CalculatorSliceReceiver();
        const cleanViewfinderCommand: CleanViewfinderValueCommand =
          new CleanViewfinderValueCommand(calculatorSliceReceiver);
        const calculatorSliceInvoker: CalculatorSliceInvoker =
          new CalculatorSliceInvoker(cleanViewfinderCommand);
        calculatorSliceInvoker.execute(state);
      },
      backspaceViewfinderValue: (state: StateValue): void => {
        const calculatorSliceReceiver: CalculatorSliceReceiver =
          new CalculatorSliceReceiver();
        const backspaceViewfinderValueCommand: BackspaceViewfinderValueCommand =
          new BackspaceViewfinderValueCommand(calculatorSliceReceiver);
        const calculatorSliceInvoker: CalculatorSliceInvoker =
          new CalculatorSliceInvoker(backspaceViewfinderValueCommand);
        calculatorSliceInvoker.execute(state);
      },
    },
  });
}

const calculatorSlice: CalculatorSlice = new CalculatorSlice();

export const {
  getCalculateResult,
  addCharactersToViewfinder,
  cleanViewfinderValue,
  backspaceViewfinderValue,
} = calculatorSlice.calculatorSliceConfiguration.actions;

export default calculatorSlice.calculatorSliceConfiguration.reducer;
