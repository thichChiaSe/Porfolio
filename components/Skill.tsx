import React from "react";
import { motion } from "framer-motion";
import js from "../public/java-script.png";
import react from "../public/React-icon.svg";
import nextjs from "../public/nextjs.png";
import html from "../public/html.png";
import css from "../public/css-3.png";
import sass from "../public/sass.png";
import typescript from "../public/typescript.png";
import vercel from "../public/vercel.svg";
type Props = { directionLeft?: boolean };

export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={html.src}
        alt="icon-tech"
        className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-[#F7AB0B] opacity-100">HTML</p>
        </div>
      </div>
    </div>
  );
}
