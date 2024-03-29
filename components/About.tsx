import React from "react";
import { motion } from "framer-motion";
import itsme from "../public/me.jpg";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24  uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src={itsme.src}
        alt="img"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[680px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Hello, my name is {""}
          <span className="underline decoration-[#F7AB0A]/50">Huy</span>{" "}
        </h4>{" "}
        <p className="text-base">
          I am a front-end developer with more than two years of experience. I
          have a passion for creating user-friendly and responsive websites
          using ReactJS, Typescript. I have worked on several projects for
          different clients, such as HCDC,Nhan Ai hospital,EPIC,... . I am
          always eager to learn new skills and technologies to improve my work
          quality and efficiency. I am looking forward to working with you and
          contributing to your team’s success. Thank you for your time and
          attention.
        </p>
      </div>
    </div>
  );
}
