import React from "react";
import { NavLinkStyled, NavStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavStyled>
      <NavLinkStyled to="/">Home</NavLinkStyled>
      <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
      <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
    </NavStyled>
  );
};

export default Navigation;
