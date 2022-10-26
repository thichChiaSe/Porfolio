import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";
type Props = {};

export default function TypeWritter({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi leu leu", "ZXCZXCXZCZ", "ABCCCCC"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      {/* <BackgroundCircle /> */}
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
}
