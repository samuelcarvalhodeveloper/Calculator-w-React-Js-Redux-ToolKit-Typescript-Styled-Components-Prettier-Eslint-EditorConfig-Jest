import { useDispatch } from "react-redux";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import KeypadStyled from "./Styled";
import OperatorFactory from "../../../../modules/calculator/keypad_characters_creation/operators_characters_creation/OperatorFactory";
import {
  ADDICTION_OPERATOR,
  DIVISION_OPERATOR,
  MULTIPLICATION_OPERATOR,
  SUBTRACTION_OPERATOR,
} from "../../../../constants/calculator/keypad_characters/operatorsConstants";
import NumberFactory from "../../../../modules/calculator/keypad_characters_creation/numbers_characters_creation/NumberFactory";
import {
  NUMBER_EIGHT,
  NUMBER_FIVE,
  NUMBER_FOUR,
  NUMBER_NINE,
  NUMBER_SEVEN,
  NUMBER_SIX,
  NUMBER_ONE,
  NUMBER_THREE,
  NUMBER_TWO,
  NUMBER_ZERO,
} from "../../../../constants/calculator/keypad_characters/numbersConstants";
import SymbolsFactory from "../../../../modules/calculator/keypad_characters_creation/symbols_characters_creation/SymbolsFactory";
import { DOT_NOTATION } from "../../../../constants/calculator/keypad_characters/symbolsConstants";
import {
  addCharactersToViewfinder,
  backspaceViewfinderValue,
  cleanViewfinderValue,
  getCalculateResult,
} from "../../../../modules/calculator/redux/slices/CalculatorSlice";

function Keypad(): JSX.Element {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  return (
    <KeypadStyled>
      <div className="main__group">
        <button
          type="button"
          className="main__button"
          onClick={() => {
            dispatch(cleanViewfinderValue());
          }}>
          C
        </button>
        <button
          type="button"
          className="main__button"
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
          className="main__button"
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
          className="main__button"
          onClick={() => {
            dispatch(backspaceViewfinderValue());
          }}>
          {"<"}
        </button>
        <button
          type="button"
          className="main__button"
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
          className="main__button"
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
          className="main__button"
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
          className="main__button"
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
          className="main__button"
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
          className="main__button"
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
          className="main__button"
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
          className="main__button"
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
          className="main__button"
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
          className="main__button"
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
          className="main__button"
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
          className="main__button"
          onClick={() => {
            dispatch(getCalculateResult());
          }}>
          =
        </button>
        <button
          type="button"
          className="main__button"
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
          className="main__button"
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
    </KeypadStyled>
  );
}

export default Keypad;
