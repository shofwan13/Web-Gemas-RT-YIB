import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faBars,
  faArrowDown,
  faChevronDown,
  faChevronRight,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import ExpandableButtonCard from "./ExpandableButtonCard";
import NavbarItems from "../components/NavbarItems";

const MainHeader = ({ title }) => {
  return (
    <div
      className="flex items-center justify-center w-full bg-[#fcfcfc] py-[8px] sticky top-0 z-10 drop-shadow-lg

"
    >
      <div className="flex px-[8px] justify-between items-center w-full lg:w-[1440px]  ">
        <div className="flex content-center items-center bg-transparent">
          <img
            src="./src/assets/img/gemas rt logo final-05.png"
            alt="Logo"
            className="w-[50px] h-[50px] rounded-full"
          />
          <h4 className="">Gemas RT</h4>
          <h1 className="text-white text-[16px] font-bold ml-2">{title}</h1>
        </div>
        <div className="hidden lg:flex 2xl:gap-x-0 lg:gap-x-12 xl:flex xl:gap-x-12">
          <Link to="/" className="">
            <NavbarItems
              text="Home"
              icon={faLeaf}
              bgColor="transparent"
              textColor="text-[#1a6218]"
              onClick={() => {
                const element = document.getElementById("herosection");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </Link>
          <Link to="/" className="">
            <NavbarItems
              text="Latar Belakang"
              icon={faLeaf}
              bgColor="transparent"
              textColor="text-[#1a6218]"
              onClick={() => {
                const element = document.getElementById(
                  "pengelolaansampahberkelanjutan"
                );
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </Link>
          <Link to="/" className="">
            <NavbarItems
              text="Kegiatan Utama"
              icon={faLeaf}
              bgColor="transparent"
              textColor="text-[#1a6218]"
              onClick={() => {
                const element = document.getElementById(
                  "pengelolaansampahberkelanjutan"
                );
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </Link>
          <Link to="/" className="">
            <NavbarItems
              text="Galeri Kegitan"
              icon={faLeaf}
              bgColor="transparent"
              textColor="text-[#1a6218]"
              onClick={() => {
                const element = document.getElementById(
                  "pengelolaansampahberkelanjutan"
                );
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </Link>
          <Link to="/" className="">
            <NavbarItems
              text="FAQ"
              icon={faLeaf}
              bgColor="transparent"
              textColor="text-[#1a6218]"
              onClick={() => {
                const element = document.getElementById(
                  "pengelolaansampahberkelanjutan"
                );
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </Link>
          <Link to="/" className="">
            <NavbarItems
              text="Kontak Kami"
              icon={faLeaf}
              bgColor="transparent"
              textColor="text-[#1a6218]"
              onClick={() => {
                const element = document.getElementById(
                  "pengelolaansampahberkelanjutan"
                );
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </Link>
        </div>

        <Link className="lg:hidden flex">
          <FontAwesomeIcon size="xl" icon={faBars} />
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;
