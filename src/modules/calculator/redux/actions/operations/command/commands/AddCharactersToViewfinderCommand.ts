import { StateValue } from "../../../../../../../types/calculator/redux/StateValue";
import CalculatorSliceReceiver from "../receiver/CalculatorSliceReceiver";
import CommandInterfaceWithAction from "./interface/CommandInterfaceWithAction";

class AddCharactersToViewfinderCommand implements CommandInterfaceWithAction {
  private receiver: CalculatorSliceReceiver;

  public constructor(receiver: CalculatorSliceReceiver) {
    this.receiver = receiver;
  }

  public execute(state: StateValue, action: string): void {
    this.receiver.addCharactersToViewfinder(state, action);
  }
}

export default AddCharactersToViewfinderCommand;
