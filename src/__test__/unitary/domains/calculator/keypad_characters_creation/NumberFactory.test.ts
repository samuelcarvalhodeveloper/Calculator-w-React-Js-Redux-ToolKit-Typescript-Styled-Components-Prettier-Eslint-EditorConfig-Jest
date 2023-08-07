import { describe, test, expect } from "@jest/globals";
import NumberFactory from "../../../../../domains/calculator/keypad_characters_creation/numbers_characters_creation/NumberFactory";
import { NUMBER_ONE } from "../../../../../constants/calculator/keypad_characters/numbersConstants";

describe("Test Class NumberFactory Behavior", () => {
  test('Test If method: "getCharacter"; Returns The Chosen Number From Factory Correctly', () => {
    expect(NumberFactory.getCharacter(NUMBER_ONE).getValue()).toEqual(
      NUMBER_ONE,
    );
  });
});
