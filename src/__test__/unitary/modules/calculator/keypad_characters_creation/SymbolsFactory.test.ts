import { describe, test, expect } from "@jest/globals";
import SymbolsFactory from "../../../../../modules/calculator/keypad_characters_creation/symbols_characters_creation/SymbolsFactory";
import { DOT_NOTATION } from "../../../../../constants/calculator/keypad_characters/symbolsConstants";

describe("Test Class SymbolsFactory Behavior", () => {
  test('Test If method: "getCharacter"; Returns The Chosen Symbol From Factory Correctly', () => {
    expect(SymbolsFactory.getCharacter(DOT_NOTATION).getValue()).toEqual(
      DOT_NOTATION,
    );
  });
});
