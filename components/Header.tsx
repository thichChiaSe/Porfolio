import React from "react";
import { SocialIcon } from "react-social-icons";
type Props = {};
import { motion } from "framer-motion";
function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex  items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="http://twitter.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="http://twitter.com/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="http://twitter.com/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-500 "
      >
        <SocialIcon
          network="email"
          fgColor="gray"
          bgColor="transparent"
          className="cursor-pointer"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-grey-400 cursor-pointer">
          Touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
