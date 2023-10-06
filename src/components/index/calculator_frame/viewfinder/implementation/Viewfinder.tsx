import { useSelector } from "react-redux";
import Styles from "../styles/Styles";
import type { RootState } from "../../../../../domains/ui/redux/stores/implementation/store";

function Viewfinder(): JSX.Element {
  const viewfinderValue = useSelector(
    (state: RootState) => state.calculatorValue.value,
  );

  return (
    <Styles>
      <div className="viewfinder__logo">
        <h1>Calculator</h1>
      </div>
      <div className="viewfinder__label">
        <p>Result:</p>
      </div>
      <div className="viewfinder__viewfinder">
        <input
          type="text"
          className="viewfinder__input"
          disabled
          value={viewfinderValue}
        />
      </div>
    </Styles>
  );
}

export default Viewfinder;
