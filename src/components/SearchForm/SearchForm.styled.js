import styled from "styled-components";

export const SearchFormStyled = styled.div`
  .search-form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
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
  }
  .search-input::placeholder {
    color: var(--primary-black);
  }
`;
export const LabelTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const InputWrraper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 14px;
  border: none;
  font-size: 18px;
  background-color: #f7f7fb;
  border-radius: 14px;
  color: var(--primary-black);

`;
export const SearchFormBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  color: rgb(255, 255, 255);
  background-color: var(--primary-blue);

  
`;