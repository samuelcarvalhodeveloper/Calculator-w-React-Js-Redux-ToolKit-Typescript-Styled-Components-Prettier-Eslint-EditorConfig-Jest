import { NumbersEnumerated } from "../../../../types/calculator/enumerateds/NumbersEnumerated";
import CharactersEntityInterface from "../interfaces/CharactersEntityInterface";

class NumberEntity implements CharactersEntityInterface<NumbersEnumerated> {
  private value: NumbersEnumerated;

  public constructor(value: NumbersEnumerated) {
    this.value = value;
  }

  public getValue(): NumbersEnumerated {
    return this.value;
  }
}

export default NumberEntity;
