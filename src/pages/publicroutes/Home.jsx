import React from "react";
import { useEffect, useState } from "react";
import MainHeader from "../../components/mainheader";
import MainFooter from "../../components/mainfooter";
import {
  Button,
  Card,
  TabItem,
  Tabs,
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Carousel,
} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import ExpandableButton from "../../components/ExpandableButton";
import ExpandableButtonCard from "../../components/ExpandableButtonCard";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const cardData = [
  {
    title: "Pemisahan sampah berdasarkan jenisnya",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    img: "https://placehold.co/100x100",
  },
  // Tambahkan data lain jika perlu
];

const Home = () => {
  return (
    <div>
      <MainHeader />
      <section
        id="herosection"
        className="bg-[#e15ee1] h-[100%] sm:px-[8px] flex gap-4 items-center justify-center flex-row"
      >
        <div className="flex lg:w-[1440px] px-2 lg:px-auto bg-violet-400 lg:h-full ">
          <div className="w-auto lg:w-[600px] bg-green-500 content-center flex-col h-[600px] space-y-[28px]">
            <div className="space-y-[8px]">
              <h1>Gemas RT</h1>
              <h4>Gerakan Mengelola Sampah Rumah Tangga</h4>
            </div>
            <p>
              Gerakan kami memberikan solusi nyata untuk masyarakat dan
              lingkungan sekitar dengan menerapkan sistem pengelolaan sampah
              yang lebih baik dan berkelanjutan.
            </p>
            <ExpandableButton
              text="Selengkapnya"
              onClick={() => {
                const element = document.getElementById(
                  "pengelolaansampahberkelanjutan"
                );
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>
        </div>
      </section>
      <section
        id="pengelolaansampahberkelanjutan"
        className="bg-[#f8f8f8] h-[100%] py-[64px] sm:px-[8px] flex gap-4 items-center justify-center flex-row"
      >
        <div className="flex-wrap lg:flex lg:w-[1440px] px-2 justify-center content-center items-center gap-y-4">
          <div className="flex item flex-wrap w-auto lg:w-[540px] h-[100%] justify-center items-center flex-col space-y-[28px]">
            <div className="space-y-[8px] items-center text-center">
              <div className="flex justify-center items-center">
                <img
                  className="bg-[#f8f8f8] outline-[#cbcbcb] outline-1 rounded-lg"
                  src="https://placehold.co/100x100"
                  alt="Placeholder"
                />
              </div>
              <h1>Pengelolaan Sampah Berkelanjutan</h1>
              <p>
                Pelajari bagaimana kami mengelola dan mengontrol jumlah sampah
                rumah tangga dengan pendekatan yang berkelanjutan
              </p>
            </div>
          </div>
          <div className=" w-full flex flex-col space-y-[28px] items-center justify-center h-[100%]">
            <div className="flex flex-wrap w-full justify-center items-center gap-4 h-[100%]">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Card
                  key={idx}
                  className="bg-[#f0efef!important] h-[100%] w-[100%] lg:w-[32.5%] border-1 border-[#cbcbcb] "
                >
                  <img
                    className="w-[100px] h-[100px]"
                    src={cardData[0].img}
                    alt={cardData[0].title}
                  />
                  <h5 className="text-2xl font-bold tracking-tight">
                    {cardData[0].title}
                  </h5>
                  <p className="font-normal text-gray-700">
                    {cardData[0].desc}
                  </p>
                  <ExpandableButtonCard
                    text="Selengkapnya"
                    onClick={() => {
                      const element = document.getElementById(
                        "pengelolaansampahberkelanjutan"
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="galerikegiatan"
        className="bg-[#f8f8f8] py-[64px] h-[100%] sm:px-[8px] flex gap-4 items-center justify-center flex-row  "
      >
        <div className="flex-wrap lg:flex lg:w-[1440px] px-2  justify-center content-center items-center gap-y-4">
          <div className="flex flex-wrap w-full lg:w-[540px] h-[100%] justify-center items-center flex-col space-y-[28px]">
            <div className="space-y-[8px] items-center text-center">
              <div className="flex justify-center items-center">
                <img
                  className="bg-[#f8f8f8] outline-[#cbcbcb] outline-1 rounded-lg"
                  src="https://placehold.co/100x100"
                  alt="Placeholder"
                />
              </div>
              <h1>Galeri Kegiatan</h1>
              <p>
                lihat lebih dekat kegiatan kami dalam upaya untuk memberdayakan
                masyarakat dan lingkungan dalam pengelolaan sampah rumah tangga
                dengan pedekatan yang berkelanjutan.
              </p>
            </div>
          </div>
          <div className="w-full space-y-[28px] items-center justify-center h-[100%]">
            <div className="flex flex-wrap w-full bg-amber-200 justify-center items-center gap-4 h-[100%]">
              <TabGroup className="w-full ">
                <TabList className="gap-4 flex flex-row justify-center items-center">
                  <Tab className="p-3 w-36 rounded-lg ring-0 outline-0 bg-[#1a6218] hover:bg-[#294728] active:bg-black focus:bg-black text-white">
                    Tab 1
                  </Tab>
                  <Tab className="p-3 w-36 rounded-lg ring-0 outline-0 bg-[#1a6218] hover:bg-[#294728]  active:bg-black focus:bg-black text-white">
                    Tab 2
                  </Tab>
                  <Tab className="p-3 w-36 rounded-lg ring-0 outline-0 bg-[#1a6218] hover:bg-[#294728] active:bg-black  focus:bg-black text-white">
                    Tab 3
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel className="flex w-full cumancontoh flex-col md:flex-row lg:flex-row items-center md:flex-wrap py-8 gap-4 justify-center bg-amber-500">
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-100 motion-duration-200"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-200 motion-duration-300"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-300 motion-duration-400"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-400 motion-duration-500"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-500 motion-duration-600"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-600 motion-duration-700"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                  </TabPanel>
                  <TabPanel className="flex w-full cumancontoh flex-col md:flex-row lg:flex-row items-center md:flex-wrap py-8 gap-4 justify-center bg-amber-500">
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-100 motion-duration-200"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-200 motion-duration-300"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-300 motion-duration-400"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-400 motion-duration-500"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-500 motion-duration-600"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-600 motion-duration-700"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                  </TabPanel>
                  <TabPanel className="flex w-full cumancontoh flex-col md:flex-row lg:flex-row items-center md:flex-wrap py-8 gap-4 justify-center bg-amber-500">
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-100 motion-duration-200"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-200 motion-duration-300"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-300 motion-duration-400"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-400 motion-duration-500"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-500 motion-duration-600"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-[32.5%] lg:h-max motion-preset-slide-up delay-600 motion-duration-700"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
      </section>
      <section
        id="pertanyaan dan kontak"
        className="bg-[#075A13] py-[64px] h-[100%] sm:px-[8px] flex flex-row items-center justify-center  "
      >
        <div className="flex-row lg:flex lg:w-[1440px] px-2 gap-4">
          <div className="flex bg-amber-500 flex-wrap w-full lg:w-[50%] h-[100%] justify-center items-start flex-col space-y-[28px]">
            <div className="space-y-[8px] ">
              <img
                className="bg-[#f8f8f8] outline-[#cbcbcb] outline-1 rounded-lg"
                src="https://placehold.co/100x100"
                alt="Placeholder"
              />

              <h1>Hubungi Kami</h1>
              <p>
                Jika Anda memiliki pertanyaan mengenai kerjasama, kolaborasi,
                atau ingin tahu lebih lanjut tentang program kami, jangan ragu
                untuk menghubungi kami. Kami siap membantu Anda.
              </p>
            </div>
          </div>
          <div className="flex bg-amber-500 flex-wrap w-full lg:w-[50%]  items-start h-[100%] flex-col space-y-[28px]">
            <div className="space-y-[8px] ">
              <img
                className="bg-[#f8f8f8] outline-[#cbcbcb] outline-1 rounded-lg"
                src="https://placehold.co/100x100"
                alt="Placeholder"
              />

              <h1>FAQ</h1>
              <p>Pertanyaan yang sering diajukan.</p>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
};

export default Home;
