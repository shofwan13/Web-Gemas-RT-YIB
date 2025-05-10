import React from "react";
import MainHeader from "../components/mainheader";
import MainFooter from "../components/mainfooter";

const Home = () => {
  return (
    <>
      <MainHeader />
      <div
        id="slider-section"
        className="bg-[#d9dadb] h-[468px] flex items-center justify-center"
      >
        <h1 className="text-[32292f]">Ini Home</h1>
      </div>
      <div className="h-screen bg-[#f2f2f]"></div>
      <MainFooter />
    </>
  );
};

export default Home;
