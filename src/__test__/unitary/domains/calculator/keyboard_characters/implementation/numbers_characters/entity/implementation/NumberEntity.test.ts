import { describe, expect, test } from "@jest/globals";
import NumberEntity from "../../../../../../../../../domains/calculator/keyboard_characters/implementation/numbers_characters/entity/implementation/NumberEntity";
import { NUMBER_NINE } from "../../../../../../../../../constants/calculator/keyboard_characters/numbersConstants";

describe("Test Class Number Entity Behavior", () => {
  test("Test If Number Entity Describes How Number Should Be Instanced By Calculator Button Click", () => {
    const numberEntityInstance: NumberEntity = new NumberEntity(NUMBER_NINE);

    expect(numberEntityInstance.getValue()).toEqual(NUMBER_NINE);
  });
});
