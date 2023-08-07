import MainStyled from "./Styled";
import logo from "../../../assets/imgs/icon.svg";

function Header(): JSX.Element {
  return (
    <MainStyled>
      <div className="header__center">
        <img
          src={logo}
          alt="Samuel Carvalho logo"
          className="header__logo"
        />
      </div>
    </MainStyled>
  );
}

export default Header;
