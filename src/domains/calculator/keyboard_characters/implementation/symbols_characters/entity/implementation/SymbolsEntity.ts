import { SymbolsEnumerated } from "../../../../../../../types/calculator/enumerateds/SymbolsEnumerated";
import CharactersEntityInterface from "../../../../interfaces/entity/CharactersEntityInterface";

class SymbolsEntity implements CharactersEntityInterface<SymbolsEnumerated> {
  private value: SymbolsEnumerated;

  public constructor(value: SymbolsEnumerated) {
    this.value = value;
  }

  public getValue(): SymbolsEnumerated {
    return this.value;
  }
}

export default SymbolsEntity;
