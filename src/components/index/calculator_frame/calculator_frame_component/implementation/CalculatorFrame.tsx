import Styles from "../styles/Styles";
import Keyboard from "../../keyboard/implementation/Keyboard";
import Viewfinder from "../../viewfinder/implementation/Viewfinder";

function CalculatorFrame(): JSX.Element {
  return (
    <Styles>
      <div className="calculator-frame__container">
        <div className="calculator-frame__content">
          <Viewfinder />
          <Keyboard />
        </div>
      </div>
    </Styles>
  );
}

export default CalculatorFrame;
