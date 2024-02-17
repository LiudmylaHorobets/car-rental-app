import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 274px;
  height: 426px;

  .card-img {
    margin-bottom: 14px;

    width: 274px;
    height: 268px;
    border-radius: 14px;

    object-fit: cover;
  }

  .card-title-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 8px;
  }

  .card-title,
  .card-price {
    display: flex;
    gap: 2px;

    font-size: 16px;
    font-weight: 500;
    color: #121417;
  }

  .card-blue-text {
    color: #3470ff;
  }

  .card-black-text {
    color: #121417;
  }

  .card-details {
    display: flex;
    flex-direction: column;
    gap: 4px;

    margin-bottom: 24px;

    font-size: 12px;
    font-weight: 400;
    color: #121417;
  }
  .card-details-first,
  .card-details-second {
    opacity: 0.5;
  }

  .card-button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    padding-top: 12px;
    padding-bottom: 12px;

    font-size: 14px;
    line-height: 143%;
    font-weight: var(--bold-font-weight);
    color: #ffffff;
    background-color: #3470ff;
    border-radius: 12px;
  }

  .card-button:hover,
  .card-button:focus {
    background-color: #0b44cd;
  }
`;
