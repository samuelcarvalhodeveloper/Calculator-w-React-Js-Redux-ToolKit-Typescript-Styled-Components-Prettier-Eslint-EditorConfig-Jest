import { describe, test, expect } from "@jest/globals";
import { NUMBER_ONE } from "../../../../../../../../../constants/calculator/keyboard_characters/numbersConstants";
import NumberFactory from "../../../../../../../../../domains/calculator/keyboard_characters/implementation/numbers_characters/factory/implementation/NumberFactory";

describe("Test Class NumberFactory Behavior", () => {
  test('Test If method: "getCharacter"; Returns The Chosen Number From Factory Correctly', () => {
    expect(NumberFactory.getCharacter(NUMBER_ONE).getValue()).toEqual(
      NUMBER_ONE,
    );
  });
});
