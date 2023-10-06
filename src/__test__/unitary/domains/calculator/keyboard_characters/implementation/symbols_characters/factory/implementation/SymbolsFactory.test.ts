import { describe, test, expect } from "@jest/globals";
import { DOT_NOTATION } from "../../../../../../../../../constants/calculator/keyboard_characters/symbolsConstants";
import SymbolsFactory from "../../../../../../../../../domains/calculator/keyboard_characters/implementation/symbols_characters/factory/implementation/SymbolsFactory";

describe("Test Class SymbolsFactory Behavior", () => {
  test('Test If method: "getCharacter"; Returns The Chosen Symbol From Factory Correctly', () => {
    expect(SymbolsFactory.getCharacter(DOT_NOTATION).getValue()).toEqual(
      DOT_NOTATION,
    );
  });
});
