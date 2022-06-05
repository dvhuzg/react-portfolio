import React from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./Themes";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { useRef, useEffect } from "react";
import { YinYang } from "./AllSvgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  /* width: 100vw; */
  height: 400vh;
  position: relative;
  overflow: hidden;
`;
const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;
const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;
const WorkPage = () => {
  const ref = useRef(null);
  const yinYang = useRef(null);
  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      yinYang.current.style.transform =
        `rotate(` + -window.pageYOffset + "deg)";
    };
    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton />
        <Main ref={ref}>
          {Work.map((d) => {
            return <Card key={d.id} data={d} />;
          })}
        </Main>
        <Rotate ref={yinYang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
