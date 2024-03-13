import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};
import { motion } from "framer-motion";
function Header({}: Props) {
  const handleDownload = () => {
    fetch("/DoTuanHuy_FrontEndDev.pdf")
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "DoTuanHuy_FrontEndDev.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error("Error downloading PDF:", error));
  };

  return (
    <header className="sticky top-0 p-5 flex  items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <SocialIcon
          url="https://www.linkedin.com/in/huy-%C4%91%E1%BB%97-aa2100226/"
          bgColor="transparent"
          fgColor="gray"
        />
        <SocialIcon
          url="https://github.com/thichChiaSe"
          bgColor="transparent"
          fgColor="gray"
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
        <a
          href="#contact"
          className="uppercase hidden md:inline-flex text-sm text-grey-400 cursor-pointer"
        >
          Touch
        </a>
        <span className="ml-4">|</span>
        <button
          onClick={handleDownload}
          className="uppercase hidden md:inline-flex text-sm text-grey-400 cursor-pointer ml-4"
        >
          Download CV
        </button>
      </motion.div>
    </header>
  );
}

export default Header;
