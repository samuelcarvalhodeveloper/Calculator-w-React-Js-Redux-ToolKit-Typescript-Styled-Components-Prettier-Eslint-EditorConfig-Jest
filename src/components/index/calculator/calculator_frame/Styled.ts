import styled, { StyledComponent } from "styled-components";

const CalculatorFrameStyled: StyledComponent<
  "main",
  any,
  {},
  never
> = styled.main`
  display: flex;
  justify-content: center;
  margin: 11.1rem 3rem;

  .main__container {
    width: 100%;
    max-width: 35rem;
    height: 62.8rem;
    overflow: auto;

    .main__content {
      width: 35rem;
      height: 62.8rem;
      border: 0.1rem solid #1e90ff;
      background: #d2e9ff;
      border-radius: 2rem;
      padding: 2rem;
    }
  }
`;

export default CalculatorFrameStyled;
