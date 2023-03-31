/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import fpt from "../public/fpt.jpg";
import css from "../public/css-3.png";
import html from "../public/html.png";
import js from "../public/java-script.png";
import ts from "../public/typescript.png";
import saga from "../public/redux.png";
import devExtreme from '../public/devExtreme.png'
import ant from '../public/ant-design.jpg'

type Props = {};

export default function ExperienceCardNew({}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-fill "
        src={fpt.src}
        alt="experience card"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">FPT Infomation System</h4>
        <p className="font-bold text-2xl mt-1">Front-end developer</p>
        <div className="flex space-x-2 my-2">
          <img
            src={html.src}
            alt="img tech"
            className="h-10 w-10 rounded-full"
          />
          <img
            src={css.src}
            alt="img tech"
            className="h-10 w-10 rounded-full"
          />
          <img src={js.src} alt="img tech" className="h-10 w-10 rounded-full" />
          <img src={ts.src} alt="img tech" className="h-10 w-10 rounded-full" />
          <img
            src={saga.src}
            alt="img tech"
            className="h-10 w-10 rounded-full"
          />
          <img
            src={devExtreme.src}
            alt="img tech"
            className="h-10 w-10 rounded-full"
          />
          <img
            src={ant.src}
            alt="img tech"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-500">
          start work : 03/2022 - 09/2022
        </p>
        <p className="uppercase py-5 text-gray-500">Participated projects :</p>
        <ul className="list-dist space-y-4 ml-5 text-lg">
          <li>iHrp V4</li>
          <li>iHotel</li>
        </ul>
      </div>
    </article>
  );
}
