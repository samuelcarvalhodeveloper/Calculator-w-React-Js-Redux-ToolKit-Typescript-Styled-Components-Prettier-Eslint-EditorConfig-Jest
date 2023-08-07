import { useSelector } from "react-redux";
import ViewfinderStyled from "./Styled";
import type { RootState } from "../../../../frameworks/redux/stores/store";

function Viewfinder(): JSX.Element {
  const viewfinderValue = useSelector(
    (state: RootState) => state.calculatorValue.value,
  );

  return (
    <ViewfinderStyled>
      <div className="main__logo">
        <h1>Calculator</h1>
      </div>
      <div className="main__label">
        <p>Result:</p>
      </div>
      <div className="main__viewfinder">
        <input
          type="text"
          className="main__input"
          disabled
          value={viewfinderValue}
        />
      </div>
    </ViewfinderStyled>
  );
}

export default Viewfinder;
