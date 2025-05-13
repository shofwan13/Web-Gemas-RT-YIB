import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainHeader = ({ title }) => {
  return (
    <div className="flex items-center justify-center content-center bg-[#03330a] h-full py-[8px] px-[16px] sticky top-0 z-10">
      {/* Logo and website title */}
      <div className="flex items-center justify-between w-[1440px] bg-amber-900 ">
        <div className="flex content-center items-center">
          <img
            src="./src/assets/img/gemas rt logo final-05.png"
            alt="Logo"
            className="w-[50px] h-[50px] rounded-full"
          />
          <h4 className="">Gemas RT</h4>
          <h1 className="text-white text-[16px] font-bold ml-2">{title}</h1>
        </div>
        <div className="flex gap-x-12">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <div>Beranda</div>
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <div>Mengenai Kami</div>
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <div>Teknik Pengelolaan</div>
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <div>Galeri Kegiatan</div>
          </Link>
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            <div>Pertanyaan dan Jawaban</div>
          </Link>
        </div>
      </div>
      {/* Navigation links */}
      <nav className="ml-auto"></nav>
    </div>
  );
};

export default MainHeader;
