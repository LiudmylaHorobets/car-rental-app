import styled from "styled-components";

export const CatalogModalStyled = styled.div`
  .modal-img {
    display: block;
    margin-bottom: 14px;
    object-fit: cover;
    width: 100%;
    height: 314px;
    border-radius: 14px;
  }
  .modal-title-wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 8px;
  }

  .modal-title,
  .modal-price {
    display: flex;
    gap: 4px;

    font-size: 18px;
    font-weight: 500;
    color: var(--primary-black);
  }

  .modal-blue-text {
    color: var(--primary-blue);
  }

  .modal-black-text {
    color: var(--primary-black);
  }
`;
export const ModalDiscription = styled.div`
  .modal-list {
    display: flex;
    flex-wrap: wrap;
  }
  .modal-list-first {
    margin-bottom: 12px;
  }
  .modal-list-item {
    font-size: 12px;
    color: rgba(18, 20, 23, 0.5);
    display: flex;
    align-items: center;
  }

  .text-desc {
    line-height: 1.43;
    margin-top: 14px;
    font-weight: 400;
    width: 100%;

    margin-bottom: 24px;
  }

  .desc-sub-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    color: var(--primary-black);
    margin-bottom: 8px;
  }

  .modal-list-second,
  .condition-block {
    margin-bottom: 24px;
  }
 
  .condition-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    font-size: 12px;
    letter-spacing: -0.24px;

    @media screen and (min-width: 768px) {
      width: 461px;
    }
  }

  .condition-item {
    padding: 7px 14px;

    border-radius: 35px;
    color: #363535;
    background-color: #f9f9f9;
  }
`;
export const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 12px;
  padding-bottom: 12px;
  width: 168px;
  height: 44px;

  font-size: 14px;
  font-weight: 600;
  color: var(--primary-white);
  background-color: var(--primary-blue);
  border-radius: 12px;

  &:hover,
  &:focus {
    background-color: var(--secondary-blue);
  }
`;
