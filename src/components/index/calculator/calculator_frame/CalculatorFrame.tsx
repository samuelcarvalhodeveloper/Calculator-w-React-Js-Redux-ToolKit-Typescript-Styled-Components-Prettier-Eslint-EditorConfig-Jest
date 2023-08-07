import CalculatorStyled from "./Styled";
import Viewfinder from "../viewfinder/Viewfinder";
import Keypad from "../keypad/Keypad";

function CalculatorFrame(): JSX.Element {
  return (
    <CalculatorStyled>
      <div className="main__container">
        <div className="main__content">
          <Viewfinder />
          <Keypad />
        </div>
      </div>
    </CalculatorStyled>
  );
}

export default CalculatorFrame;
