import React from "react";
import NavbarAdmin from "../components/navbarAdmin";
import gemasLogo from "../assets/img/gemas rt logo final-05.png";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row w-[100vw] h-[100vh] ">
        <NavbarAdmin />

        <div className="flex flex-col bg-amber-500 w-[80vw] h-auto">
          <div className="bg-[#dddddd] p-[28px] items-center justify-center flex flex-col w-full h-[40px] border-b-[#9c9c9cee] border-b-[1px]">
            <p>Navbar</p>
          </div>
          <div className="flex bg-white p-[20px] h-full w-full">
            ini Halaman Dashboard
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
