import React, { useState, Suspense } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import CenterImg from '../assets/Images/android-chrome-512x512.png';
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { motion } from "framer-motion";
const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
const Blog = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`;
const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 1;
`;
const SKILLS = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const rotate = keyframes`
    from{
        transform: rotate(0);
    }
    to{
        transform: rotate(360deg);
    }
`;
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  & > :first-child {
    animation: ${rotate} infinite 3s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;
const Main = () => {
  const [click, setclick] = useState(false);
  const [path, setpath] = useState("");
  const handleClick = () => {
    return setclick(!click);
  };
  const moveY = {
    y: "-100%",
  };
  const moveX = {
    x: `${path === "work" ? "100%" : "-100%"}`,
  };
  const mq = window.matchMedia("(max-width: 50em)").matches;
  return (
    
      <MainContainer
        key="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={path === "about" || path === "skills" ? moveY : moveX}
        transition={{ duration: 0.5 }}
      >
        <DarkDiv click={click}></DarkDiv>
        <Container>
          <PowerButton />
          <LogoComponent theme={click ? "dark" : "light"} />
          <SocialIcons theme={click ? "dark" : "light"} />
          <Center click={click}>
            {/* <YinYang
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            /> */}
            <img src={CenterImg} onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200} alt="" />
            <span>~Tap here~</span>
          </Center>
          <Contact
            target="_blank"
            to={{ pathname: "https://dvhuzg.rf.gd" }}
          >
            <motion.h2
              initial={{
                y: -200,
                transition: {
                  type: "spring",
                  duration: 1.5,
                  delay: 1,
                },
              }}
              animate={{
                y: 0,
                transition: {
                  type: "spring",
                  duration: 1.5,
                  delay: 1,
                },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi...
            </motion.h2>
          </Contact>
          <Blog to="/blog">
            <motion.h2
              onClick={() => setpath("blog")}
              initial={{
                y: -200,
                transition: {
                  type: "spring",
                  duration: 1.5,
                  delay: 1,
                },
              }}
              animate={{
                y: 0,
                transition: {
                  type: "spring",
                  duration: 1.5,
                  delay: 1,
                },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Blog
            </motion.h2>
          </Blog>

          <Work onClick={() => setpath("work")} to="/work" click={click}>
            <motion.h2
              initial={{
                y: -200,
                transition: {
                  type: "spring",
                  duration: 1.5,
                  delay: 1,
                },
              }}
              animate={{
                y: 0,
                transition: {
                  type: "spring",
                  duration: 1.5,
                  delay: 1,
                },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Work
            </motion.h2>
          </Work>
          <BottomBar>
            <ABOUT onClick={() => setpath("about")} to="/about" click={click}>
              <motion.h2
                initial={{
                  y: 200,
                  transition: {
                    type: "spring",
                    duration: 1.5,
                    delay: 1,
                  },
                }}
                animate={{
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 1.5,
                    delay: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                About
              </motion.h2>
            </ABOUT>
            <SKILLS onClick={() => setpath("skills")} to="/skills">
              <motion.h2
                initial={{
                  y: 200,
                  transition: {
                    type: "spring",
                    duration: 1.5,
                    delay: 1,
                  },
                }}
                animate={{
                  y: 0,
                  transition: {
                    type: "spring",
                    duration: 1.5,
                    delay: 1,
                  },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                My Skills
              </motion.h2>
            </SKILLS>
          </BottomBar>
        </Container>
        {click ? <Intro click={click} /> : null}
      </MainContainer>
  );
};

export default Main;
