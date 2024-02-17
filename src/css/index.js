import { createGlobalStyle } from "styled-components";
import ManropeMedium from "../assets/fonts/Manrope-Medium.ttf";
import ManropeSemiBold from "../assets/fonts/Manrope-SemiBold.ttf";
import ManropeBold from "../assets/fonts/Manrope-Bold.ttf";

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-white: #ffffff;
    --primary-blue: #3470ff;
    --primary-black: #121417;

    --input-bg: #8a8a89;
    --secondary-blue: #0b44cd;
    --secondary-black: #26282b;

    --opacity-input: 0.2;
    --opacity-text: 0.5;
  }

  @font-face {
    font-family: 'Manrope-Bold';
    src: url(${ManropeBold}) format('truetype');
  }
  
  @font-face {
    font-family: 'Manrope-SemiBold';
    src: url(${ManropeSemiBold}) format('truetype');
  }
  
  @font-face {
    font-family: 'Manrope-Medium';
    src: url(${ManropeMedium}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Manrope-Medium', sans-serif;
  }

  /* RESET */

  * {
    padding: 0;
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  input:hover,
  input:focus {
    outline: none;
  }

  button {
    border: none;
    outline: none;
  }
`;
