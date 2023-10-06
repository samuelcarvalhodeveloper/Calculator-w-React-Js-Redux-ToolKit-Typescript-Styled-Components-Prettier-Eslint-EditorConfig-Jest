import styled, { StyledComponent } from "styled-components";

const Styles: StyledComponent<"div", any, {}, never> = styled.div`
  .viewfinder__logo {
    font-size: 2rem;
    font-weight: 600;
    width: 100%;
    padding: 0.8rem 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #003b75;
  }

  .viewfinder__label {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #003b75;
    padding: 0.8rem 1rem;
    font-weight: 600;
  }

  .viewfinder__viewfinder {
    width: 100%;
    position: relative;
    overflow: hidden;

    .viewfinder__input {
      width: 100%;
      height: 6rem;
      text-align: right;
      font-size: 4rem;
      border-radius: 1rem;
      border: 1px solid #c0e0ff;
      background: #e1f0ff;
      display: flex;
      justify-content: flex-end;
      color: #002952;
      font-weight: 600;
      padding: 0 1rem;
    }
  }
`;

export default Styles;
