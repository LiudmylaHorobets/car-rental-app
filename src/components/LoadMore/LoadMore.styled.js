import styled from "styled-components";

export const LoadMoreBtnStyled = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;
  
  &:hover,
  &:focus {
    color: var(--secondary-blue);
  }
`;
