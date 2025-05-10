import React from "react";
import MainHeader from "../components/mainheader";
import MainFooter from "../components/mainfooter";
import { Button } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <MainHeader />
      <section
        id="herosection"
        className="bg-[#d9dadb] h-[600px] flex items-center justify-center flex-col "
      >
        <div className="w-[1440px] bg-violet-400 h-full content-center">
          <div className="w-[600px] bg-green-500 content-center flex-col h-full space-y-[28px]">
            <div className="space-y-[8px]">
              <h1>Shofwan.Space</h1>
              <h4>Small step, to leap foward</h4>
            </div>
            <p>
              Temukan ragam konten menarik, kreasi, dan berbagai artikel yang
              menarik untuk dieksplore setiap hari.
            </p>
            <Button
              className="flex gap-[10px] cursor-pointer"
              onClick={() => {
                const element = document.getElementById("sectionartikel");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Selengkapnya <FontAwesomeIcon icon={"arrow-right"} />
            </Button>
          </div>
        </div>
      </section>
      <section
        id="herosection"
        className="bg-[#d9dadb] h-[600px] flex items-center justify-center flex-col "
      >
        <div className="w-[1440px] bg-violet-600 h-full content-center">
          <div className="flex bg-green-500 content-center flex-col space-y-[28px]">
            <div className="space-y-[8px]">
              <h1>Artikel Terbaru</h1>
              <h4>Jelajahi Artikelmya mulai dari sini</h4>
            </div>
            <p>
              Temukan ragam konten menarik, kreasi, dan berbagai artikel yang
              menarik untuk dieksplore setiap hari.
            </p>
            <Button
              className="flex gap-[10px] cursor-pointer"
              onClick={() => {
                const element = document.getElementById("sectionartikel");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Selengkapnya <FontAwesomeIcon icon={"arrow-right"} />
            </Button>
          </div>
          <div className="flex bg-green-500 content-center flex-col space-y-[28px]">
            <div className="space-y-[8px]">
              <h1>Artikel Terbaru</h1>
              <h4>Jelajahi Artikelmya mulai dari sini</h4>
            </div>
            <p>
              Temukan ragam konten menarik, kreasi, dan berbagai artikel yang
              menarik untuk dieksplore setiap hari.
            </p>
            <Button
              className="flex gap-[10px] cursor-pointer"
              onClick={() => {
                const element = document.getElementById("sectionartikel");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Selengkapnya <FontAwesomeIcon icon={"arrow-right"} />
            </Button>
          </div>
        </div>
      </section>
      <div className="flex grid-cols-2 z-10 h-[200px]">
        <div id="kucing" className="flex bg-red-600 h-auto w-[50vw]"></div>
        <div>
          <div>
            <h2></h2>
          </div>
        </div>
        <div className="flex bg-green-600 h-auto w-[50vw]"></div>
      </div>
      <MainFooter />
    </div>
  );
};

export default Home;
