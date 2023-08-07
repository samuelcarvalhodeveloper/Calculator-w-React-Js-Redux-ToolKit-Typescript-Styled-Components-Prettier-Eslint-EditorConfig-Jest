import { StateValue } from "../../../../../../../types/calculator/redux/StateValue";
import CalculatorSliceReceiver from "../receiver/CalculatorSliceReceiver";
import CommandInterface from "./interface/CommandInterface";

class BackspaceViewfinderValueCommand implements CommandInterface {
  private receiver: CalculatorSliceReceiver;

  public constructor(receiver: CalculatorSliceReceiver) {
    this.receiver = receiver;
  }

  public execute(state: StateValue): void {
    this.receiver.backspaceViewfinderValue(state);
  }
}

export default BackspaceViewfinderValueCommand;
