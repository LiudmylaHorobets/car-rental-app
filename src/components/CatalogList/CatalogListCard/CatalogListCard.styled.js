import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 274px;
  height: 426px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 274px;
    height: 426px;
  }

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
    color: var(--primary-black);
  }

  .card-blue-text {
    color: var(--primary-blue);
  }

  .card-black-text {
    color: var(--primary-black);
  }

  .card-details {
    display: flex;
    flex-direction: column;
    gap: 4px;

    /* margin-bottom: 24px; */

    font-size: 12px;
    font-weight: 400;
    color: var(--primary-black);
  }
  .card-details-first,
  .card-details-second {
    opacity: var(--opacity-text);
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
    font-weight: 600;
    color: var(--primary-white);
    background-color: var(--primary-blue);
    border-radius: 12px;
  }

  .card-button:hover,
  .card-button:focus {
    background-color: var(--secondary-blue);
  }
`;
