import { StateValue } from "../../../../../../../types/calculator/redux/StateValue";
import CalculatorSliceReceiver from "../receiver/CalculatorSliceReceiver";
import CommandInterface from "./interface/CommandInterface";

class CleanViewfinderValueCommand implements CommandInterface {
  private receiver: CalculatorSliceReceiver;

  public constructor(receiver: CalculatorSliceReceiver) {
    this.receiver = receiver;
  }

  public execute(state: StateValue): void {
    this.receiver.cleanViewfinderValue(state);
  }
}

export default CleanViewfinderValueCommand;
