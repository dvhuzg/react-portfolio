import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  font-family: "Facifico", cursive;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};

  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
`;
const LogoComponents = (props) => {
  return <Logo color={props.theme}>DVH</Logo>;
};

export default LogoComponents;
