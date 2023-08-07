import { DOT_NOTATION } from "../../../../constants/calculator/keypad_characters/symbolsConstants";
import { SymbolsEnumerated } from "../../../../types/calculator/enumerateds/SymbolsEnumerated";
import CharactersFactoryInterface from "../interfaces/CharactersFactoryInterface";
import SymbolsEntity from "./SymbolsEntity";

class SymbolsFactory
  implements CharactersFactoryInterface<SymbolsEnumerated, SymbolsEntity>
{
  public constructor() {}

  public getCharacter(wantedCharacter: SymbolsEnumerated): SymbolsEntity {
    let selectedCharacter: SymbolsEntity | null = null;

    switch (wantedCharacter) {
      case DOT_NOTATION:
        selectedCharacter = new SymbolsEntity(DOT_NOTATION);
        break;

      default:
        selectedCharacter = new SymbolsEntity(DOT_NOTATION);
    }

    return selectedCharacter;
  }
}

export default new SymbolsFactory();
