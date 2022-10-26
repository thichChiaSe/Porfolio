import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import TypeWritter from "../components/TypeWritter";

const Home: NextPage = () => {
  return (
    // color full screen + text white
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>HuyDT</title>
      </Head>
      {/* Header*/}
      <Header />
      {/* Typewriter  */}
      <section id="text-auto">
        <TypeWritter />
      </section>
      {/* About  */}
      {/* Exper   */}
      {/* Skill  */}
      {/* Project  */}
      {/* Contact  */}
    </div>
  );
};

export default Home;
