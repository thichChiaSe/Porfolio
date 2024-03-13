import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Project from "../components/Project";
import { ProjectPage } from "../components/ProjectPage";
import Skills from "../components/Skills";
import TypeWritter from "../components/TypeWritter";
import pj1 from "../public/pj1.png";

const Home: NextPage = () => {
  return (
    // color full screen + text white
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap snap-mandatory overflow-scroll z-0 scrollbar  scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/70">
      <Head>
        <title>HuyDT</title>
      </Head>
      {/* Header*/}
      <Header />
      {/* Typewriter  */}
    
      <section id="text-auto" className="snap-start">
        <TypeWritter />
      </section>
      {/* About  */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Exper   */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Skill  */}
      <section id="skill" className="snap-start">
        <Skills />
      </section>
      {/* Project  */}
      <section id="project" className="snap-start">
        <Project />
      </section>
      {/* Certificate */}
      {/* <section id="certificate" className="snap-start">
        <Certificate />
      </section> */}
      {/* Contact  */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
   
    </div>
  );
};

export default Home;
