import styled, { StyledComponent } from "styled-components";

const Styles: StyledComponent<"div", any, {}, never> = styled.div`
  .keyboard__group {
    padding: 2.6rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;

    .keyboard__button {
      width: 7rem;
      height: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4rem;
      font-weight: 600;
      border-radius: 1rem;
      background: #75bbff;
      border: 0.1rem solid #1e90ff;
      color: #00101f;
    }

    .keyboard__button:hover {
      background: #47a4ff;
    }

    .keyboard__button:active {
      background: #1e80e0;
    }

    .keyboard__button:nth-child(1) {
      background: #ffd700;
      border: 0.1rem solid #dfbc00;
    }

    .keyboard__button:nth-child(1):hover {
      background: #dfbc00;
    }

    .keyboard__button:nth-child(1):active {
      background: #bd9f00;
    }

    .keyboard__button:nth-child(2) {
      background: #003b75;
      color: #e1f0ff;
      border: 0.1rem solid #002952;
    }

    .keyboard__button:nth-child(2):hover {
      background: #002952;
    }

    .keyboard__button:nth-child(2):active {
      background: #001c38;
    }

    .keyboard__button:nth-child(3) {
      background: #003b75;
      color: #e1f0ff;
      border: 0.1rem solid #002952;
    }

    .keyboard__button:nth-child(3):hover {
      background: #002952;
    }

    .keyboard__button:nth-child(3):active {
      background: #001c38;
    }

    .keyboard__button:nth-child(4) {
      background: #ffd700;
      border: 0.1rem solid #dfbc00;
    }

    .keyboard__button:nth-child(4):hover {
      background: #dfbc00;
    }

    .keyboard__button:nth-child(4):active {
      background: #bd9f00;
    }
    .keyboard__button:nth-child(8) {
      background: #003b75;
      color: #e1f0ff;
      border: 0.1rem solid #002952;
    }

    .keyboard__button:nth-child(8):hover {
      background: #002952;
    }

    .keyboard__button:nth-child(8):active {
      background: #001c38;
    }

    .keyboard__button:nth-child(12) {
      background: #003b75;
      color: #e1f0ff;
      border: 0.1rem solid #002952;
    }

    .keyboard__button:nth-child(12):hover {
      background: #002952;
    }

    .keyboard__button:nth-child(12):active {
      background: #001c38;
    }

    .keyboard__button:nth-child(16) {
      background: #ffd700;
      border: 0.1rem solid #dfbc00;
      grid-column-start: 4;
      grid-column-end: 5;
      grid-row-start: 4;
      grid-row-end: 6;
      height: 100%;
    }

    .keyboard__button:nth-child(16):hover {
      background: #dfbc00;
    }

    .keyboard__button:nth-child(16):active {
      background: #bd9f00;
    }

    .keyboard__button:nth-child(17) {
      grid-column-start: 1;
      grid-column-end: 3;
      width: 100%;
    }

    .keyboard__button:nth-child(18) {
      background: #003b75;
      color: #e1f0ff;
      border: 0.1rem solid #002952;
    }

    .keyboard__button:nth-child(18):hover {
      background: #002952;
    }

    .keyboard__button:nth-child(18):active {
      background: #001c38;
    }
  }
`;

export default Styles;
