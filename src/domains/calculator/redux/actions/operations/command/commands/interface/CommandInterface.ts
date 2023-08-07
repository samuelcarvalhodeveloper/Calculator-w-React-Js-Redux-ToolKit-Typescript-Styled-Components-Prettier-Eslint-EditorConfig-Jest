/* eslint-disable no-unused-vars */
import { StateValue } from "../../../../../../../../types/calculator/redux/StateValue";

interface CommandInterface {
  execute(state: StateValue): void;
}

export default CommandInterface;
