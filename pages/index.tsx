import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Certificate from "../components/Certificate";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Project from "../components/Project";
import Skill from "../components/Skill";
import TypeWritter from "../components/TypeWritter";

const Home: NextPage = () => {
  return (
    // color full screen + text white
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap snap-mandatory overflow-scroll z-0">
      <Head>
        <title>HuyDT</title>
      </Head>
      {/* Header*/}
      <Header />
      {/* Typewriter  */}
      <section id="text-auto" className="snap-center">
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
      <section id="skill" className="snap-center">
        <Skill />
      </section>
      {/* Project  */}
      <section id="project" className="snap-center">
        <Project />
      </section>
      {/* Certificate */}
      <section id="certificate" className="snap-center">
        <Certificate />
      </section>
      {/* Contact  */}
      <section id="contact" className="snap-center">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
