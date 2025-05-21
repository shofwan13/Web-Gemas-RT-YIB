import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { Link } from "react-router-dom";
import gemasLogo from "../assets/img/gemas rt logo final-05.png";
import NavbarItems from "./NavbarItems";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="bg-[#F4F4F4] py-[64px] sm:px-[8px] px-[8px] text-[#03330a] flex align-top justify-center min-h-[300px] lg:h-[640px]">
        <div className="flex flex-col lg:flex-row justify-center align-top w-full max-w-[1440px] bg-transparent gap-8">
          {/* Div pertama */}
          <div className="w-full lg:w-[34%] flex items-start gap-[20px] flex-col flex-wrap mx-auto">
            <div className="flex flex-col gap-y-[12px]">
              <img
                src={gemasLogo}
                className="w-[80px] h-[80px] outline-1 rounded-lg bg-[#f8f8f8] outline-[#cbcbcb] "
                alt="gemas-rt"
              />
              <h4 className="text-[20px] md:text-[24px] font-bold">
                Gerakan Mengelola Sampah Rumah Tangga
              </h4>
              <p>
                Gerakan kami memberikan solusi nyata untuk masyarakat dan
                lingkungan sekitar dengan menerapkan sistem pengelolaan sampah
                yang lebih baik dan berkelanjutan
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-bold">ikuti kami di media sosial:</p>
              <div className="flex flex-col gap-[16px]">
                <Link>
                  <button className="flex items-center  hover:bg-gray-200 p-[8px] rounded-[8px] outline-[1px] outline-[#cbcbcb] bg-white ">
                    <FontAwesomeIcon
                      icon="fa-brands fa-youtube"
                      className="text-[20px] mr-2 text-[#1a6117]"
                    />
                    <p>@GEMASRT</p>
                  </button>
                </Link>
                <Link>
                  <button className="flex items-center hover:bg-gray-200 p-[8px] rounded-[8px] outline-[1px] outline-[#cbcbcb] bg-white ">
                    <FontAwesomeIcon
                      icon="fa-brands fa-instagram"
                      className="text-[20px] mr-2 text-[#1a6117]"
                    />
                    <p>gemas.rt</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Div kedua */}
          <div className="w-full lg:w-[33%] flex gap-y-[12px] flex-col flex-wrap mx-auto">
            <h4 className="text-[20px] md:text-[24px] font-bold mb-2">
              Navigasi
            </h4>
            <p className="text-sm md:text-base">
              Tetap terhubung dengan kami di media sosial untuk mendapatkan
              update dan informasi kegiatan terbaru.
              <div>
                <Link to="/" className="flex items-center">
                  <NavbarItems
                    text="Home"
                    icon="fa-solid fa-leaf"
                    bgColor="bg-transparent"
                    textColor="text-[#1a6218]"
                    horizontalPadding="px-0"
                    onClick={() => {
                      const element = document.getElementById("herosection");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  />
                </Link>
                <Link to="/" className="flex items-center">
                  <NavbarItems
                    text="Latar Belakang"
                    icon="fa-solid fa-leaf"
                    bgColor="bg-transparent"
                    textColor="text-[#1a6218]"
                    horizontalPadding="px-0"
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
                <Link to="/" className="flex items-center">
                  <NavbarItems
                    text="Kegiatan Utama"
                    icon="fa-solid fa-leaf"
                    bgColor="bg-transparent"
                    textColor="text-[#1a6218]"
                    horizontalPadding="px-0"
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
                <Link to="/" className="flex items-center">
                  <NavbarItems
                    text="Galeri Kegiatan"
                    icon="fa-solid fa-leaf"
                    bgColor="bg-transparent"
                    textColor="text-[#1a6218]"
                    horizontalPadding="px-0"
                    onClick={() => {
                      const element = document.getElementById("galerikegiatan");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  />
                </Link>
                <Link to="/" className="flex items-center">
                  <NavbarItems
                    text="Kontak Kami"
                    icon="fa-solid fa-leaf"
                    bgColor="bg-transparent"
                    textColor="text-[#1a6218]"
                    horizontalPadding="px-0"
                    onClick={() => {
                      const element = document.getElementById("kontak");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  />
                </Link>
                <Link to="/" className="flex items-center">
                  <NavbarItems
                    text="FAQ"
                    icon="fa-solid fa-leaf"
                    bgColor="bg-transparent"
                    textColor="text-[#1a6218]"
                    horizontalPadding="px-0"
                    onClick={() => {
                      const element = document.getElementById("faq");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  />
                </Link>
              </div>
            </p>
          </div>
          {/* Div ketiga */}
          <div className="w-full lg:w-[33%] flex items-start gap-[20px] flex-col flex-wrap mx-auto">
            <div className="flex flex-col gap-y-[12px]">
              <h4 className="text-[20px] md:text-[24px] font-bold">
                Ekosistem Berbagi
              </h4>
              <p>
                Gemas RT Merupakan bagian dari Ekosistem Berbagi, oleh Yayasan
                Indah Berbagi. Ekosistem Berbagi merupakan sebuah solusi
                pemberdayaan masyarakat dan lingkungan yang berkelanjutan.
              </p>
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="font-bold">Gugus Ekosistem Berbagi:</p>
              <div className="flex flex-col gap-[16px]">
                <Link>
                  <button className="flex items-center hover:bg-gray-200 p-[8px] rounded-[8px] outline-[1px] outline-[#cbcbcb] bg-white ">
                    <FontAwesomeIcon
                      icon="fa-globe"
                      className="text-[#1a6117] text-[20px] mr-2"
                    />
                    <p>Yayasan Indah Berbagi</p>
                  </button>
                </Link>
                <Link>
                  <button className="flex items-center hover:bg-gray-200 p-[8px] rounded-[8px] outline-[1px] outline-[#cbcbcb] bg-white ">
                    <FontAwesomeIcon
                      icon="fa-globe"
                      className="text-[#1a6117] text-[20px] mr-2"
                    />
                    <p>Berbagi Untuk Negeri</p>
                  </button>
                </Link>
                <Link>
                  <button className="flex items-center hover:bg-gray-200 p-[8px] rounded-[8px] outline-[1px] outline-[#cbcbcb] bg-white ">
                    <FontAwesomeIcon
                      icon="fa-globe"
                      className="text-[#1a6117] text-[20px] mr-2"
                    />
                    <p>LKSA Indah Berbagi</p>
                  </button>
                </Link>
                <Link>
                  <button className="flex items-center hover:bg-gray-200 p-[8px] rounded-[8px] outline-[1px] outline-[#cbcbcb] bg-white ">
                    <FontAwesomeIcon
                      icon="fa-globe"
                      className="text-[#1a6117] text-[20px] mr-2"
                    />
                    <p>Kebun Berbagi</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center py-4 bg-[#EEEEEE] text-gray-700">
        <p>&copy; {currentYear} oleh Yayasan Indah Berbagi</p>
      </div>
    </>
  );
};

export default MainFooter;
