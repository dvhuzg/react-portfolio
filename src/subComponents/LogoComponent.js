import React from "react";
import styled from "styled-components";
import { DarkTheme ,mediaQueries} from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  font-family: "Facifico", cursive;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};

  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 3;
  user-select: none;
  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;
const LogoComponent = (props) => {
  return <Logo color={props.theme}>DVH</Logo>;
};

export default LogoComponent;
