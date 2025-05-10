import React from "react";
import ButtonSocial from "./buttonsocial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const MainFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div
        className="bg-[#E7E5DF] text-[#03330a] py-4 flex flex-col md:flex-row"
        md:height="h-[100px]"
      >
        {/* Div pertama */}
        <div className="w-full md:w-1/2 flex items-center justify-center mb-4 md:mb-0">
          <h3 className="text-[20px] md:text-[24px] font-bold">
            Mengenai Saya
          </h3>
        </div>

        {/* Div kedua */}
        <div className="w-full md:w-1/2 container mx-auto text-center md:text-left">
          <h3 className="text-[20px] md:text-[24px] font-bold mb-2">
            Connect with Me
          </h3>
          <p className="text-sm md:text-base">
            Connect and s with me on social media:
          </p>
          <div className="flex justify-center md:justify-start space-x-4 py-2">
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
      <div className=" mx-auto text-center py-4 bg-[#32292f] text-white">
        <p>
          &copy; {currentYear} oleh Shofwan. Dibuat dengan{" "}
          <FontAwesomeIcon icon={"mug-hot"} />
        </p>
      </div>
    </>
  );
};

export default MainFooter;
