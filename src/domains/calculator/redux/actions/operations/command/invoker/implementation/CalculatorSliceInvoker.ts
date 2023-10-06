import { StateValue } from "../../../../../../../../types/calculator/redux/StateValue";
import CommandInterface from "../../commands/interface/CommandInterface";

class CalculatorSliceInvoker implements CommandInterface {
  private command: CommandInterface;

  public constructor(command: CommandInterface) {
    this.command = command;
  }

  public execute(state: StateValue): void {
    this.command.execute(state);
  }
}

export default CalculatorSliceInvoker;
