import { describe, expect, test } from "@jest/globals";
import SymbolsEntity from "../../../../../../../../../domains/calculator/keyboard_characters/implementation/symbols_characters/entity/implementation/SymbolsEntity";
import { DOT_NOTATION } from "../../../../../../../../../constants/calculator/keyboard_characters/symbolsConstants";

describe("Test Class Symbol Entity Behavior", () => {
  test("Test If Symbol Entity Describes How Symbol Should Be Instanced By Calculator Button Click", () => {
    const symbolEntityInstance: SymbolsEntity = new SymbolsEntity(DOT_NOTATION);

    expect(symbolEntityInstance.getValue()).toEqual(DOT_NOTATION);
  });
});
