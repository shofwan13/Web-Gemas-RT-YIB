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
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Pengadaan Sarana");
  return (
    <div>
      <MainHeader />
      <section
        id="herosection"
        className="bg-[#a9d222] h-[600px] flex items-center justify-center  flex-col "
      >
        <div className="w-[1440px] bg-violet-400 h-full ">
          <div className="w-[600px] bg-green-500 content-center flex-col h-full space-y-[28px]">
            <div className="space-y-[8px]">
              <h1>Gemas RT</h1>
              <h4>Gerakan Mengelola Sampah Rumah Tangga</h4>
            </div>
            <p>
              Gerakan kami memberikan solusi nyata untuk masyarakat dan
              lingkungan sekitar dengan menerapkan sistem pengelolaan sampah
              yang lebih baik dan berkelanjutan.
            </p>
            <Button
              color={"green"}
              className="flex gap-[10px] cursor-pointer"
              onClick={() => {
                const element = document.getElementById(
                  "pengelolaansampahberkelanjutan"
                );
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Selengkapnya <FontAwesomeIcon icon={"arrow-down"} />
            </Button>
          </div>
        </div>
      </section>
      <section
        id="pengelolaansampahberkelanjutan"
        className="bg-[#e15ee1] h-[100%] sm:px-10 flex gap-4 items-center justify-center flex-row my-10"
      >
        <div className="w-[1440px] h bg-violet-600 flex flex-col justify-center content-center items-center gap-y-4">
          <div className="flex bg-green-200 w-[540px] h-[100%] justify-center items-center flex-col space-y-[28px]">
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
            <div className="flex flex-wrap bg-amber-200 justify-center items-center gap-4 h-[100%]">
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
                <Button color="green" className="h-[44px] gap-2 cursor-pointer">
                  Lebih lanjut
                  <FontAwesomeIcon icon={faEye} />
                </Button>
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
                <Button color="green" className="h-[44px] gap-2 cursor-pointer">
                  Lebih lanjut
                  <FontAwesomeIcon icon={faEye} />
                </Button>
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
                <Button color="green" className="h-[44px] gap-2 cursor-pointer">
                  Lebih lanjut
                  <FontAwesomeIcon icon={faEye} />
                </Button>
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
                <Button color="green" className="h-[44px] gap-2 cursor-pointer">
                  Lebih lanjut
                  <FontAwesomeIcon icon={faEye} />
                </Button>
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
                <Button color="green" className="h-[44px] gap-2 cursor-pointer">
                  Lebih lanjut
                  <FontAwesomeIcon icon={faEye} />
                </Button>
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
                <Button color="green" className="h-[44px] gap-2 cursor-pointer">
                  Lebih lanjut
                  <FontAwesomeIcon icon={faEye} />
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section
        id="galerikegiatan"
        className="bg-[#e15ee1] h-[100%] sm:px-10 flex gap-4 items-center justify-center flex-row my-10"
      >
        <div className="w-[1440px] h bg-violet-600 flex flex-col justify-center content-center items-center gap-y-4">
          <div className="flex bg-green-200 w-[540px] h-[100%] justify-center items-center flex-col space-y-[28px]">
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
            <div className="flex flex-wrap bg-amber-200 justify-center items-center gap-4 h-[100%]">
              <Tabs
                aria-label="Default tabs"
                variant="pills"
                className="btntabs items-center"
              >
                <TabItem
                  color="green"
                  active={activeTab === "Pengadaan Sarana"}
                  title="Pengadaan Sarana"
                  onClick={() => setActiveTab("Pengadaan Sarana")}
                  className={`${
                    activeTab === "Pengadaan Sarana"
                      ? "bg-green-500 text-white"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap gap-4 items-center justify-center">
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    {/* Add other images here */}
                  </div>
                </TabItem>
                <TabItem
                  title="Sosialisasi dan Edukasi"
                  active={activeTab === "Sosialisasi dan Edukasi"}
                  onClick={() => setActiveTab("Sosialisasi dan Edukasi")}
                  className={`${
                    activeTab === "Sosialisasi dan Edukasi"
                      ? "bg-green-500 text-white"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap gap-4 items-center justify-center">
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    {/* Add other images here */}
                  </div>
                </TabItem>
                <TabItem
                  title="Event Kegiatan"
                  active={activeTab === "Event Kegiatan"}
                  onClick={() => setActiveTab("Event Kegiatan")}
                  className={`${
                    activeTab === "Event Kegiatan"
                      ? "bg-green-500 text-white"
                      : ""
                  }`}
                >
                  <div className="flex flex-wrap gap-4 items-center justify-center">
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    {/* Add other images here */}
                  </div>
                </TabItem>
                <TabItem
                  title="Daur Ulang"
                  active={activeTab === "Daur Ulang"}
                  onClick={() => setActiveTab("Daur Ulang")}
                  className={`${
                    activeTab === "Daur Ulang" ? "bg-green-500 text-white" : ""
                  }`}
                >
                  <div className="flex flex-wrap gap-4 items-center justify-center">
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    <img
                      src="https://placehold.co/300x220"
                      alt="Image 1"
                      className="object-cover border-0 rounded-[12px]"
                    />
                    {/* Add other images here */}
                  </div>
                </TabItem>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faqpertanyaan"
        className="bg-[#e15ee1] h-[100%] sm:px-10 flex gap-4 items-center justify-center my-10"
      >
        <div className="w-[1440px] h bg-violet-600 flex  flex-row justify-center content-center items-center gap-4">
          <div className="bg-green-200 w-[50%] h-[100%] flex-col space-y-[28px]">
            <div className="space-y-[8px] w-[540px] items-left text-left">
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
          <div className="flex flex-wrap justify-center items-center gap-4 h-[100%] w-[50%]">
            <Accordion className="items-center flex-col w-[100%]">
              <AccordionPanel className="outerheaderaccordion">
                <AccordionTitle className="headtitleaccordion focus:ring-[0px!important]">
                  <h4>What is Flowbite?</h4>
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
                <AccordionTitle className="headtitleaccordion focus:ring-[0px!important]">
                  <h4>What is Flowbite?</h4>
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
                <AccordionTitle className="headtitleaccordion focus:ring-[0px!important]">
                  <h4>What is Flowbite?</h4>
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
