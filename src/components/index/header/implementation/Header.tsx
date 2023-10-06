import Styles from "../styles/Styles";
import logo from "../../../../assets/imgs/icon.svg";

function Header(): JSX.Element {
  return (
    <Styles>
      <div className="header__center">
        <img
          src={logo}
          alt="Samuel Carvalho logo"
          className="header__logo"
        />
      </div>
    </Styles>
  );
}

export default Header;
