/* eslint-disable no-unused-vars */
import { StateValue } from "../../../../../../../../types/calculator/redux/StateValue";

interface CommandInterfaceWithAction {
  execute(state: StateValue, action: string): void;
}

export default CommandInterfaceWithAction;
