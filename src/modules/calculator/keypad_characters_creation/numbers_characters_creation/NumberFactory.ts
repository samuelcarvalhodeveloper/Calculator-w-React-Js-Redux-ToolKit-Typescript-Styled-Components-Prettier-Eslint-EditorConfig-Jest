import {
  NUMBER_ZERO,
  NUMBER_ONE,
  NUMBER_TWO,
  NUMBER_THREE,
  NUMBER_FOUR,
  NUMBER_FIVE,
  NUMBER_SIX,
  NUMBER_SEVEN,
  NUMBER_EIGHT,
  NUMBER_NINE,
} from "../../../../constants/calculator/keypad_characters/numbersConstants";
import { NumbersEnumerated } from "../../../../types/calculator/enumerateds/NumbersEnumerated";
import CharactersFactoryInterface from "../interfaces/CharactersFactoryInterface";
import NumberEntity from "./NumberEntity";

class NumberFactory
  implements CharactersFactoryInterface<NumbersEnumerated, NumberEntity>
{
  public constructor() {}

  public getCharacter(wantedCharacter: NumbersEnumerated): NumberEntity {
    let selectedNumber: NumberEntity | null = null;

    switch (wantedCharacter) {
      case NUMBER_ZERO:
        selectedNumber = new NumberEntity(NUMBER_ZERO);
        break;
      case NUMBER_ONE:
        selectedNumber = new NumberEntity(NUMBER_ONE);
        break;
      case NUMBER_TWO:
        selectedNumber = new NumberEntity(NUMBER_TWO);
        break;
      case NUMBER_THREE:
        selectedNumber = new NumberEntity(NUMBER_THREE);
        break;
      case NUMBER_FOUR:
        selectedNumber = new NumberEntity(NUMBER_FOUR);
        break;
      case NUMBER_FIVE:
        selectedNumber = new NumberEntity(NUMBER_FIVE);
        break;
      case NUMBER_SIX:
        selectedNumber = new NumberEntity(NUMBER_SIX);
        break;
      case NUMBER_SEVEN:
        selectedNumber = new NumberEntity(NUMBER_SEVEN);
        break;
      case NUMBER_EIGHT:
        selectedNumber = new NumberEntity(NUMBER_EIGHT);
        break;
      case NUMBER_NINE:
        selectedNumber = new NumberEntity(NUMBER_NINE);
        break;
      default:
        selectedNumber = new NumberEntity(NUMBER_ZERO);
    }

    return selectedNumber;
  }
}

export default new NumberFactory();
