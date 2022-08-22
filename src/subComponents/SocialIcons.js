import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Facebook, Github, Twitter, YouTube, SoundCloud } from "../components/AllSvgs";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";
import { keyframes } from "styled-components";
const rotate = keyframes`
   from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0%;
  left: 2rem;
  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;
const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          target="_blank"
          to={{ pathname: "https://www.github.com/dvhuzg" }}
        >
          <Github
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          target="_blank"
          to={{ pathname: "https://www.soundcloud.com/dohungsc" }}
        >
          <SoundCloud
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          target="_blank"
          to={{ pathname: "https://www.facebook.com/dohung.v" }}
        >
          <Facebook
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          target="_blank"
          to={{ pathname: "https://www.youtube.com/dvhuzg" }}
        >
          <YouTube
            width={30}
            height={30}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </NavLink>
      </motion.div>
      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{
          height: "8rem",
        }}
        transition={{ type: "spring", duration: 1, delay: 1.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
