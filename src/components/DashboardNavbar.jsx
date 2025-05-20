import React from "react";
import { Badge } from "flowbite-react";

const DashboardNavbar = () => {
  return (
    <div className="bg-[#eeeeee] p-[28px] items-center content-center justify-between flex flex-row w-full h-[72px] border-b-[#9c9c9cee] border-b-[1px]">
      <p className="underline">Dashboard/</p>
      <div className="flex rounded-[8px] gap-[12px] flex-row">
        <img
          className="rounded-[100%] border-1 border-[#9c9c9cee]"
          src="https://placehold.co/54x54"
          alt="useravatar"
        />
        <div className="flex flex-col gap-[2px] justify-center items-start content-center">
          <h5 className=" font-bold">Username</h5>
          <Badge color="purple" className="border-1 border-purple ">
            Purple
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
