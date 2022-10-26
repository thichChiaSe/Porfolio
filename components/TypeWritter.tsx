import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
import BackgroundCircle from "./BackgroundCircle";
type Props = {};

export default function TypeWritter({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Asus", "Rog", "const life = () => breath && pursueYourDreams()"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://images.unsplash.com/photo-1666618170086-369bd5041bd0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        alt="avatar"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
          Front-end Developer
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="btn">About</button>
          </Link>
          <Link href={""}>
            <button className="btn">Experience</button>
          </Link>
          <Link href={""}>
            <button className="btn">Skills</button>
          </Link>
          <Link href={""}>
            <button className="btn">Project</button>
          </Link>
          <Link href={""}>
            <button className="btn">Certificate</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
