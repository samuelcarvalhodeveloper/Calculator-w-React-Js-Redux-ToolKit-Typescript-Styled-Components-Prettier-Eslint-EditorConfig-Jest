import { OperatorsEnumerated } from "../../../../../../../types/calculator/enumerateds/OperatiorsEnumerated";
import CharactersEntityInterface from "../../../../interfaces/entity/CharactersEntityInterface";

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
