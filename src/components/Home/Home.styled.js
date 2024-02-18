import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from "../../images/background.jpg";

export const HomeStyled = styled.div`
  max-width: 1441px;
  height: calc(100vh - 40px);
  margin-left: auto;
  margin-right: auto;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

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

export const HomeBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--primary-white);
  background-color: var(--primary-blue);
  border-radius: 12px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--secondary-blue);
  }
`;
