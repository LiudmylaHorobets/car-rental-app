import styled from "styled-components";

export const HomeStyled = styled.div`
  .home-content {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 24px;
  }
`;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
`;
export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
export const HomeBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-white);
  background-color: var(--primary-blue);
  border-radius: 12px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--secondary-blue);
  }
`;