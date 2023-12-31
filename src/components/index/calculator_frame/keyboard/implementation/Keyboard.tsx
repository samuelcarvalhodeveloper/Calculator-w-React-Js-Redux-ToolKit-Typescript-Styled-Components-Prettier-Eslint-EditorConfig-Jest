import { useDispatch } from "react-redux";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import Styles from "../styles/Styles";
import {
  addCharactersToViewfinder,
  backspaceViewfinderValue,
  cleanViewfinderValue,
  getCalculateResult,
} from "../../../../../domains/calculator/redux/slices/implementation/CalculatorSlice";
import OperatorFactory from "../../../../../domains/calculator/keyboard_characters/implementation/operators_characters/factory/implementation/OperatorFactory";
import {
  ADDICTION_OPERATOR,
  DIVISION_OPERATOR,
  MULTIPLICATION_OPERATOR,
  SUBTRACTION_OPERATOR,
} from "../../../../../constants/calculator/keyboard_characters/operatorsConstants";
import {
  NUMBER_EIGHT,
  NUMBER_FIVE,
  NUMBER_FOUR,
  NUMBER_NINE,
  NUMBER_ONE,
  NUMBER_SEVEN,
  NUMBER_SIX,
  NUMBER_THREE,
  NUMBER_TWO,
  NUMBER_ZERO,
} from "../../../../../constants/calculator/keyboard_characters/numbersConstants";
import NumberFactory from "../../../../../domains/calculator/keyboard_characters/implementation/numbers_characters/factory/implementation/NumberFactory";
import SymbolsFactory from "../../../../../domains/calculator/keyboard_characters/implementation/symbols_characters/factory/implementation/SymbolsFactory";
import { DOT_NOTATION } from "../../../../../constants/calculator/keyboard_characters/symbolsConstants";

function KeyBoard(): JSX.Element {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  return (
    <Styles>
      <div className="keyboard__group">
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(cleanViewfinderValue());
          }}>
          C
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                OperatorFactory.getCharacter(DIVISION_OPERATOR).getValue(),
              ),
            );
          }}>
          /
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                OperatorFactory.getCharacter(
                  MULTIPLICATION_OPERATOR,
                ).getValue(),
              ),
            );
          }}>
          *
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(backspaceViewfinderValue());
          }}>
          {"<"}
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_SEVEN).getValue(),
              ),
            );
          }}>
          7
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_EIGHT).getValue(),
              ),
            );
          }}>
          8
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_NINE).getValue(),
              ),
            );
          }}>
          9
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                OperatorFactory.getCharacter(ADDICTION_OPERATOR).getValue(),
              ),
            );
          }}>
          +
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_FOUR).getValue(),
              ),
            );
          }}>
          4
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_FIVE).getValue(),
              ),
            );
          }}>
          5
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_SIX).getValue(),
              ),
            );
          }}>
          6
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                OperatorFactory.getCharacter(SUBTRACTION_OPERATOR).getValue(),
              ),
            );
          }}>
          -
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_ONE).getValue(),
              ),
            );
          }}>
          1
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_TWO).getValue(),
              ),
            );
          }}>
          2
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_THREE).getValue(),
              ),
            );
          }}>
          3
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(getCalculateResult());
          }}>
          =
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                NumberFactory.getCharacter(NUMBER_ZERO).getValue(),
              ),
            );
          }}>
          0
        </button>
        <button
          type="button"
          className="keyboard__button"
          onClick={() => {
            dispatch(
              addCharactersToViewfinder(
                SymbolsFactory.getCharacter(DOT_NOTATION).getValue(),
              ),
            );
          }}>
          .
        </button>
      </div>
    </Styles>
  );
}

export default KeyBoard;
