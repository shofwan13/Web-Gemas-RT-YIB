import React from "react";
import ButtonSocial from "./buttonsocial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div
        className="bg-[#F4F4F4] text-[#03330a] py-4 flex flex-col items-center"
        md:height="h-[100px]"
      >
        <div className="w-[1440px] bg-pink-400">
          {/* Div pertama */}
          <div className="w-full container mx-auto text-center">
            <h3 className="text-[20px] md:text-[24px] font-bold">
              Gerakan Mengelola Sampah Rumah Tangga
            </h3>
            <p>
              Gerakan kami memberikan solusi nyata untuk masyarakat dan
              lingkungan sekitar dengan menerapkan sistem pengelolaan sampah
              yang lebih baik dan berkelanjutan
            </p>
          </div>

          {/* Div kedua */}
          <div className="w-full container mx-auto text-center">
            <h3 className="text-[20px] md:text-[24px] font-bold mb-2">
              Terhubung dengan kami
            </h3>
            <p className="text-sm md:text-base">
              Tetap terhubung dengan kami di media sosial untuk mendapatkan
              update dan informasi kegiatan terbaru.
            </p>
            <div className="flex justify-center space-x-4 py-2">
              <ButtonSocial
                icon={"fa-brands fa-facebook"}
                label="Facebook"
                bgColor="bg-[#3b5998] hover:bg-[#2d4373]"
                textColor="text-white"
                url="https://www.facebook.com/"
                isnewtab={true}
              />
              <ButtonSocial
                icon={"fa-brands fa-x-twitter"}
                label="X.com"
                bgColor="bg-[#1c1c1c] hover:bg-[#080808]"
                textColor="text-white"
                url="https://twitter.com/"
                isnewtab={true}
              />
              <ButtonSocial
                icon={"fa-brands fa-instagram"}
                label="Instagram"
                bgColor="bg-[#C13584] hover:bg-[#bc2a8d]"
                textColor="text-white"
                url="https://www.instagram.com/"
                isnewtab={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" mx-auto text-center py-4 bg-[#EEEEEE] text-gray-700">
        <p>&copy; {currentYear} oleh Yayasan Indah Berbagi</p>
      </div>
    </>
  );
};

export default MainFooter;
