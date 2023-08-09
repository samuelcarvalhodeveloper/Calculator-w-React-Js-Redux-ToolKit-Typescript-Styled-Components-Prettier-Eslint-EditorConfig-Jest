import {
  ADDICTION_OPERATOR,
  DIVISION_OPERATOR,
  MULTIPLICATION_OPERATOR,
  SUBTRACTION_OPERATOR,
} from "../../../../constants/calculator/keypad_characters/operatorsConstants";
import { OperatorsEnumerated } from "../../../../types/calculator/enumerateds/OperatiorsEnumerated";
import CharactersFactoryInterface from "../interfaces/CharactersFactoryInterface";
import OperatorEntity from "./OperatorEntity";

class OperatorFactory
  implements CharactersFactoryInterface<OperatorsEnumerated, OperatorEntity>
{
  public constructor() {}

  public getCharacter(wantedCharacter: OperatorsEnumerated): OperatorEntity {
    let selectedNumber: OperatorEntity | null = null;

    switch (wantedCharacter) {
      case ADDICTION_OPERATOR:
        selectedNumber = new OperatorEntity(ADDICTION_OPERATOR);
        break;
      case SUBTRACTION_OPERATOR:
        selectedNumber = new OperatorEntity(SUBTRACTION_OPERATOR);
        break;
      case MULTIPLICATION_OPERATOR:
        selectedNumber = new OperatorEntity(MULTIPLICATION_OPERATOR);
        break;
      case DIVISION_OPERATOR:
        selectedNumber = new OperatorEntity(DIVISION_OPERATOR);
        break;
      default:
        selectedNumber = new OperatorEntity(ADDICTION_OPERATOR);
    }

    return selectedNumber;
  }
}

export default new OperatorFactory();
