import { describe, test, expect } from "@jest/globals";
import OperatorFactory from "../../../../../modules/calculator/keypad_characters_creation/operators_characters_creation/OperatorFactory";
import { MULTIPLICATION_OPERATOR } from "../../../../../constants/calculator/keypad_characters/operatorsConstants";

describe("Test Class OperatorFactory Behavior", () => {
  test('Test If method: "getCharacter"; Returns The Chosen Operator From Factory Correctly', () => {
    expect(
      OperatorFactory.getCharacter(MULTIPLICATION_OPERATOR).getValue(),
    ).toEqual(MULTIPLICATION_OPERATOR);
  });
});
