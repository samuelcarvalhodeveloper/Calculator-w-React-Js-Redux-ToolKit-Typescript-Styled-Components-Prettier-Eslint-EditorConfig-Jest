import { OperatorsEnumerated } from "../../../../types/calculator/enumerateds/OperatiorsEnumerated";
import CharactersEntityInterface from "../interfaces/CharactersEntityInterface";

class OperatorEntity implements CharactersEntityInterface<OperatorsEnumerated> {
  private value: OperatorsEnumerated;

  public constructor(value: OperatorsEnumerated) {
    this.value = value;
  }

  public getValue(): OperatorsEnumerated {
    return this.value;
  }
}

export default OperatorEntity;
