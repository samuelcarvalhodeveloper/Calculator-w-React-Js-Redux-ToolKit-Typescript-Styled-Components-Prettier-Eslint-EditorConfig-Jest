import { StateValue } from "../../../../../../../types/calculator/redux/StateValue";
import CommandInterfaceWithAction from "../commands/interface/CommandInterfaceWithAction";

class CalculatorSliceInvokerWithActions implements CommandInterfaceWithAction {
  private command: CommandInterfaceWithAction;

  public constructor(command: CommandInterfaceWithAction) {
    this.command = command;
  }

  public execute(state: StateValue, action: string): void {
    this.command.execute(state, action);
  }
}

export default CalculatorSliceInvokerWithActions;
