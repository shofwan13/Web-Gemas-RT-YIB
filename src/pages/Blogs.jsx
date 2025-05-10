import React from "react";
import MainHeader from "../components/mainheader";
import MainFooter from "../components/mainfooter";

const Blogs = () => {
  return (
    <>
      <MainHeader />
      <div className="bg-green-500 h-screen flex items-center justify-center">
        <p style={{ color: "black" }}>Ini Blogs</p>
      </div>
      <MainFooter />
    </>
  );
};

export default Blogs;
