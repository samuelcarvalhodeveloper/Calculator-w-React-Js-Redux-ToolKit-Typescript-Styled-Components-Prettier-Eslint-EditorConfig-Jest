import styled, { StyledComponent } from "styled-components";

const HeaderStyled: StyledComponent<"header", any, {}, never> = styled.header`
  background: #e2f0ff;
  border-bottom: 0.1rem solid #1e90ff;
  width: 100%;

  .header__center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 132rem;
    margin: 0 auto;
    padding: 1rem 3rem;

    .header__logo {
      height: 4rem;
    }
  }
`;

export default HeaderStyled;
