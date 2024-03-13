/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Freshnesecom from "../public/project/pj1.png";
import ihrp from "../public/project/iHRPv2.png";
import kymco from "../public/project/kymco.png";
import furnitown from "../public/project/furnitown.png";
import tcxn from "../public/project/tcxn.png";
import chis from "../public/project/chis.png";
import nhanai from "../public/project/nhanai.png";
import hatien from "../public/project/hatien.png";
import privateZ from "../public/project/private.jpg";
type Props = {};

export default function Project({}: Props) {
  const pj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const pjNew = [
    {
      id: 1,
      src: "http://192.168.60.121:31028/login",
      name: "TimeKeeping + Asset management (NHAN AI HOSPITAL)",
      img: nhanai,
    },
    {
      id: 2,
      src: "https://tcxc.hcdc.vn/",
      name: "Immuzation record",
      img: tcxn,
    },
    {
      id: 3,
      src: "https://datalake-beta.hcdc.vn/",
      name: "Datahub - CHIS",
      img: chis,
    },
   
    {
      id: 4,
      src: "https://i.pinimg.com/originals/6b/cb/4e/6bcb4e3b58fb70dd96eda001d9daee7b.png",
      name: "iHrpV4.0",
      img: ihrp,
    },
    {
      id: 5,
      src: "https://project-212ojvdrm-thichchiase.vercel.app/",
      name: "Kymco (Personal project)",
      img: kymco,
    },
    {
      id: 6,
      src: "",
      name: "Task management",
      img: privateZ,
    },
    {
      id: 7,
      src: "",
      name: "Data reconciliation",
      img: privateZ,
    },
    {
      id: 8,
      src: "https://smarthatien.bakco.vn/",
      name: "HaTien Gov",
      img: hatien,
    },
    {
      id: 9,
      src: "https://my-project-02.vercel.app/",
      name: "Furnitown (Personal project)",
      img: furnitown,
    },
    {
      id: 10,
      src: "",
      name: "Risk assessment",
      img: privateZ,
    },
    {
      id: 11,
      src: "https://react-shop-inky.vercel.app/",
      name: "Freshnesecom (Personal project)",
      img: Freshnesecom,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-3 uppercase tracking-[20px] text-gray-500 text-2xl">
        project
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70">
        {pjNew.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.img.src}
              alt="project-1"
              className="w-[23%] "
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case {i + 1} of {pj.length} :
                </span>{" "}
                {project.name}
              </h4>
              <p className="text-lg text-center md:text-center">
                <a className="bg-[#F7AB0A] p-2 rounded-md" href={project.src}>
                  Visit website
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
