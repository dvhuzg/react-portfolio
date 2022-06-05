import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  left: ${(props) => props.left};
  /* bottom: ${(props) => props.bottom}; */
  color: ${props=>`rgba(${props.theme.textRgba},0.1)`};
  font-size: calc(5rem + 5vw);
  user-select: none;
  z-index: 0;
`;
const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle;
