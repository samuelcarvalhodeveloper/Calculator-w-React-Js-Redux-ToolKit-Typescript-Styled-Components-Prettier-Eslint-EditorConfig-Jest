import { describe, expect, test } from "@jest/globals";
import OperatorEntity from "../../../../../../../../../domains/calculator/keyboard_characters/implementation/operators_characters/entity/implementation/OperatorEntity";
import { MULTIPLICATION_OPERATOR } from "../../../../../../../../../constants/calculator/keyboard_characters/operatorsConstants";

describe("Test Class Operator Entity Behavior", () => {
  test("Test If Operator Entity Describes How Operator Should Be Instanced By Calculator Button Click", () => {
    const operatorEntityInstance: OperatorEntity = new OperatorEntity(
      MULTIPLICATION_OPERATOR,
    );

    expect(operatorEntityInstance.getValue()).toEqual(MULTIPLICATION_OPERATOR);
  });
});
