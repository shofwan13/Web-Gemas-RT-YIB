import React from "react";
import MainHeader from "../../components/mainheader";
import MainFooter from "../../components/mainfooter";

const About = () => {
  return (
    <>
      <MainHeader />
      <div className="bg-blue-500 h-screen flex items-center justify-center">
        <p style={{ color: "black" }}>Ini About</p>
      </div>
      <MainFooter />
    </>
  );
};

export default About;
