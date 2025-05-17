import React from "react";
import { useEffect, useState } from "react";
import MainHeader from "../components/mainheader";
import MainFooter from "../components/mainfooter";
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
import ExpandableButton from "../components/ExpandableButton";
import ExpandableButtonCard from "../components/ExpandableButtonCard";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

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
          <div className="flex item bg-green-200 flex-wrap w-auto lg:w-[540px] h-[100%] justify-center items-center flex-col space-y-[28px]">
            <div className="space-y-[8px] items-center text-center">
              <div className="flex justify-center items-center">
                <img
                  className=""
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
          <div className="bg-green-200 w-full flex flex-col space-y-[28px] items-center justify-center h-[100%]">
            <div className="flex flex-wrap w-full bg-amber-200 justify-center items-center gap-4 h-[100%]">
              <Card className="bg-[#f0efef!important] h-[100%] w-[400px] border-0 ">
                <img
                  className="w-[100px] h-[100px]"
                  src=".src/assets/img/gemas rt logo final-05.png"
                ></img>
                <h5 className="text-2xl  font-bold tracking-tight">
                  Pemisahan sampah berdasarkan jenisnya
                </h5>
                <p className="font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
              <Card className="bg-[#f0efef!important] h-[100%] w-[400px] border-0 ">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://placehold.co/100x100"
                ></img>
                <h5 className="text-2xl  font-bold tracking-tight">
                  Pemisahan sampah berdasarkan jenisnya
                </h5>
                <p className="font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
              <Card className="bg-[#f0efef!important] h-[100%] w-[400px] border-0 ">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://placehold.co/100x100"
                ></img>
                <h5 className="text-2xl  font-bold tracking-tight">
                  Pemisahan sampah berdasarkan jenisnya
                </h5>
                <p className="font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
              <Card className="bg-[#f0efef!important] h-[100%] w-[400px] border-0 ">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://placehold.co/100x100"
                ></img>
                <h5 className="text-2xl  font-bold tracking-tight">
                  Pemisahan sampah berdasarkan jenisnya
                </h5>
                <p className="font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
              <Card className="bg-[#f0efef!important] h-[100%] w-[400px] border-0 ">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://placehold.co/100x100"
                ></img>
                <h5 className="text-2xl  font-bold tracking-tight">
                  Pemisahan sampah berdasarkan jenisnya
                </h5>
                <p className="font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
              <Card className="bg-[#f0efef!important] h-[100%] w-[400px] border-0 ">
                <img
                  className="w-[100px] h-[100px]"
                  src="https://placehold.co/100x100"
                ></img>
                <h5 className="text-2xl  font-bold tracking-tight">
                  Pemisahan sampah berdasarkan jenisnya
                </h5>
                <p className="font-normal text-gray-700">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
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
            </div>
          </div>
        </div>
      </section>
      <section
        id="galerikegiatan"
        className="bg-[#f8f8f8] py-[64px] h-[100%] sm:px-[8px] flex gap-4 items-center justify-center flex-row  "
      >
        <div className="flex-wrap lg:flex lg:w-[1440px] px-2  justify-center content-center items-center gap-y-4">
          <div className="flex bg-green-200 flex-wrap w-full lg:w-[540px] h-[100%] justify-center items-center flex-col space-y-[28px]">
            <div className="space-y-[8px] items-center text-center">
              <div className="flex justify-center items-center">
                <img
                  className=""
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
          <div className="bg-green-200 w-full space-y-[28px] items-center justify-center h-[100%]">
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
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-100 delay-0 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0   delay-200 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0  delay-400 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0  delay-600 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0  delay-800 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0  delay-1000 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                  </TabPanel>
                  <TabPanel className="flex w-full cumancontoh flex-col md:flex-row lg:flex-row items-center md:flex-wrap py-8 gap-4 justify-center bg-amber-500">
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-100 delay-0 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0   delay-200 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0  delay-400 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0  delay-600 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0  delay-800 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                    <img
                      className="rounded-lg w-max h-max sm:w-[304px] sm:h-[224px] lg:w-max lg:h-max motion-opacity-in-0  delay-1000 motion-duration-800"
                      src="https://placehold.co/380x280"
                      alt="Placeholder"
                    ></img>
                  </TabPanel>
                  <TabPanel>Content 3</TabPanel>
                </TabPanels>
              </TabGroup>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faqpertanyaan"
        className="bg-[#ececec] py-[64px] h-[100%] sm:px-[8px] flex gap-4 items-center justify-center  "
      >
        <div className="flex-wrap w-auto lg:w-[1440px] px-2  flex  flex-row justify-center content-center items-center lg:gap-4">
          <div className="bg-green-200 w-full space-y-[28px] items-center justify-center h-[100%]">
            <div className="space-y-[8px] content-center items-center justify-center   w-auto lg:w-[540px] items-left text-left">
              <div className="">
                <img
                  className=""
                  src="https://placehold.co/100x100"
                  alt="Placeholder"
                />
              </div>
              <h1>Pertanyaan dan Jawaban</h1>
              <p>
                lihat lebih dekat kegiatan kami dalam upaya untuk memberdayakan
                masyarakat dan lingkungan dalam pengelolaan sampah rumah tangga
                dengan pedekatan yang berkelanjutan.
              </p>
            </div>
          </div>
          <div className=" lg:flex-1/2 flex-wrap justify-center items-center lg  :gap-4 h-[100%] w-auto lg:w-[50%]">
            <Accordion className="items-center flex-col w-[100%]">
              <AccordionPanel className="outerheaderaccordion">
                <AccordionTitle
                  as="h4"
                  className="headtitleaccordion w-full focus:ring-0"
                >
                  What is Flowbite?
                </AccordionTitle>
                <AccordionContent className="bodyaccordioncontent">
                  <div className="p-8">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel className="outerheaderaccordion">
                <AccordionTitle
                  as="h4"
                  className="headtitleaccordion w-full focus:ring-[0px!important]"
                >
                  What is Flowbite?
                </AccordionTitle>
                <AccordionContent className="bodyaccordioncontent">
                  <div className="p-8">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionPanel>
              <AccordionPanel className="outerheaderaccordion">
                <AccordionTitle
                  as="h4"
                  className="headtitleaccordion  w-full focus:ring-[0px!important]"
                >
                  What is Flowbite?
                </AccordionTitle>
                <AccordionContent className="bodyaccordioncontent">
                  <div className="p-8">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                      Flowbite is an open-source library of interactive
                      components built on top of Tailwind CSS including buttons,
                      dropdowns, modals, navbars, and more.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionPanel>
            </Accordion>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
};

export default Home;
