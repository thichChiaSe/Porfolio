/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import React from "react";
import bakco from "../public/bakco.png";
import fpt from "../public/fpt.jpg";
import css from "../public/css-3.png";
import html from "../public/html.png";
import js from "../public/java-script.png";

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
        <h4 className="text-4xl font-light">CEO</h4>
        <p className="font-bold text-2xl mt-1">title</p>
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
        </div>
        <p className="uppercase py-5 text-gray-500">start work... - ended...</p>
        <ul className="list-dist space-y-4 ml-5 text-lg">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </article>
  );
}
