import React from "react";

const Admin404 = () => {
  return;
  <>
    <div className="flex flex-row w-[100vw] h-[100vh] ">
      <SidebarAdmin />
      <div className="flex flex-col bg-amber-500 w-[80vw] h-auto">
        <DashboardNavbar />
        <div className="flex flex-col gap-4 bg-white p-[20px] h-full w-full overflow-y-scroll">
          <div className="flex flex-row gap-4 h-full bg-amber-300 rounded-[12px] overflow-hidden p-[12px] outline-[1px] outline-[#9c9c9cee]">
            <div
              id="draftcepat"
              className="flex h-full flex-col bg-[#ebebeb] p-[20px] gap-[12px] w-[600px] rounded-[12px] content-center items-center justify-s"
            >
              <h4 className="self-start">Draft Cepat</h4>
            </div>
            <div
              id="catatan"
              className="flex h-full flex-col bg-[#ebebeb] p-[20px] gap-[12px] w-[300px] rounded-[12px] content-center items-center justify-s"
            >
              <h4 className="self-start">Notes</h4>
            </div>
          </div>
          <div className="flex flex-row gap-4 bg-amber-300 rounded-[12px] overflow-hidden p-[12px] outline-[1px] outline-[#9c9c9cee]">
            <img className="" src="https://placehold.co/380x280" />
          </div>
          <div className="flex flex-row gap-4 bg-amber-300 rounded-[12px] overflow-hidden p-[12px] outline-[1px] outline-[#9c9c9cee]">
            <img className="" src="https://placehold.co/380x280" />
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Admin404;
