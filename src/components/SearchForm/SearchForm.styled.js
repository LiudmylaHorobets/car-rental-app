import styled from "styled-components";

export const SearchFormStyled = styled.div`
  margin-bottom: 50px;

  .search-form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;

    gap: 18px;
  }
`;

export const LabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;

  .search-input {
    display: flex;
    padding: 14px 14px 14px 18px;
    border: none;
    font-size: 18px;
    background-color: #f7f7fb;
    border-radius: 14px;
    color: var(--primary-black);
    cursor: pointer;
  }
  .wrap {
    display: flex;
    flex-wrap: nowrap;
  }
`;
export const LabelTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const InputContainer = styled.div`
  position: relative;

  .search-input-km {
    display: block;
    width: 85px;
    height: 48px;
    border: none;
    background-color: rgba(247, 247, 251, 1);
    color: rgba(18, 20, 23, 1);
    font-size: 18px;
    cursor: pointer;
  }
  .left {
    padding-left: 75px;
    border-radius: 14px 0 0 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }
  .right {
    padding-left: 75px;
    border-radius: 0 14px 14px 0;
    border-left: 1px solid rgba(138, 138, 137, 0.2);
  }
  .search-input-km {
    display: block;
    color: rgba(18, 20, 23, 1);
    font-size: 18px;
  }
  .span-left,
  .span-right {
    position: absolute;
    left: 24px;
    top: 12px;

    font-size: 18px;
  }
`;
export const SearchFormBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 136px;
  height: 48px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  color: var(--primary-white);
  background-color: var(--primary-blue);
  border-radius: 12px;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--secondary-blue);
  }
`;
