/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import bakco from "../public/bakco.png";
import fpt from "../public/fpt.jpg";
import css from "../public/css-3.png";
import html from "../public/html.png";
import js from "../public/java-script.png";
import ts from "../public/typescript.png";
import saga from "../public/redux.png";
import mui from "../public/mui.png";
type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-contain "
        src={bakco.src}
        alt="experience card"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">BAKCO SOLUTIONS</h4>
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
            src={mui.src}
            alt="img tech"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-500">
          start work : 09/2022 - present
        </p>
        <p className="uppercase py-5 text-gray-500">Participated projects :</p>
        <ul className="list-dist space-y-4 ml-5 text-lg">
          <li>HaTien Gov</li>
          <li>Task management</li>
          <li>Data reconciliation (HCDC)</li>
          <li>Datahub (EPIC)</li>
          <li>Immuzation record (HCDC)</li>
          <li>Risk assessment (HCDC)</li>
          <li>TimeKeeping + Asset management (NHAN AI HOSPITAL)</li>
        </ul>
      </div>
    </article>
  );
}
