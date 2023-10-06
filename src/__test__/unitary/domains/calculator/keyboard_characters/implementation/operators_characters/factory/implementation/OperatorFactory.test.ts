import { describe, test, expect } from "@jest/globals";
import { MULTIPLICATION_OPERATOR } from "../../../../../../../../../constants/calculator/keyboard_characters/operatorsConstants";
import OperatorFactory from "../../../../../../../../../domains/calculator/keyboard_characters/implementation/operators_characters/factory/implementation/OperatorFactory";

describe("Test Class OperatorFactory Behavior", () => {
  test('Test If method: "getCharacter"; Returns The Chosen Operator From Factory Correctly', () => {
    expect(
      OperatorFactory.getCharacter(MULTIPLICATION_OPERATOR).getValue(),
    ).toEqual(MULTIPLICATION_OPERATOR);
  });
});
