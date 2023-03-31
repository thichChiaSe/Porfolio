import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import js from "../public/js.png";
import react from "../public/React-icon.svg";
import nextjs from "../public/nextjs.png";
import html from "../public/html1.png";
import css from "../public/css2.png";
import sass from "../public/sass.png";
import typescript from "../public/typescript.png";
import redux from "../public/redux.png";
import figma from "../public/figma.png";
import tailwind from "../public/Tailwind_CSS_Logo.png";
import saga from "../public/redux-saga.png";
import tsc from "../public/styledcomponent.png";
import pts from "../public/pts.png";
import mui from "../public/mui.png";
import ant from "../public/ant-design.jpg";
import git from "../public/git.png";
import dev from "../public/devextreme.png";
type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm mb-10">
        Hover over a skill for currency profieciency
      </h3>
      <div className="grid grid-cols-8 gap-5">
        <Skill
          skill={"HTML"}
          src={html.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"CSS"}
          src={css.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"SASS"}
          src={sass.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Javascript"}
          src={js.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"ReactJS"}
          src={react.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Typescript"}
          src={typescript.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Nextjs"}
          src={nextjs.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Redux"}
          src={redux.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Redux saga"}
          src={saga.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Git"}
          src={git.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Tailwind"}
          src={tailwind.src}
          style={
            ""
          }
        />
        <Skill
          skill={"Styled-component"}
          src={tsc.src}
          style={"text-1xl font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "}
        />
        <Skill
          skill={"Photoshop"}
          src={pts.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Material UI"}
          src={mui.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Ant design"}
          src={ant.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Devextreme"}
          src={dev.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
        <Skill
          skill={"Figma"}
          src={figma.src}
          style={
            "font-bold text-[#F7AB0B] opacity-100 object-contain flex justify-center "
          }
        />
      </div>
    </motion.div>
  );
}
