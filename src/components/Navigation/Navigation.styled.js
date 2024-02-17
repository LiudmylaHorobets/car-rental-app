import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
  gap: 5px;
`;
export const NavLinkStyled = styled(NavLink)`
  display: flex;
  padding: 5px;
  font-size: 20px;
  font-weight: 500;

  color: var(--secondary-black);

  &:hover,
  &:focus,
  &.active {
    color: var(--secondary-blue);
  }
`;
