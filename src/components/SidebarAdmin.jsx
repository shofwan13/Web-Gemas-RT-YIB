import React from "react";
import gemasLogo from "../assets/img/gemas rt logo final-05.png";
import { Link } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <div>
      <div className="flex flex-col bg-[#ebebeb] w-[20vw]  h-full border-r-[1px] border-r-[#9c9c9cee]">
        <div className="flex flex-col w-[100px] h-[100px] p-[10px] overflow-hidden">
          <img
            className="w-full h-full justify-start items-start "
            src={gemasLogo}
            alt="logo"
          />
        </div>

        <div className="menubar pl-[16px] pr-[px8] py-[8px] overflow-y-scroll self-stretch inline-flex flex-col justify-start items-start gap-3 m-0">
          <div className="self-stretch p-3 bg-neutral-100 rounded-2xl flex flex-col justify-start items-start gap-3">
            <div className="text-center justify-center text-zinc-600 text-base font-medium">
              Menu Cepat
            </div>
            <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-neutral-300"></div>
            <div
              data-property-1="Default"
              className="self-stretch h-12 px-2.5 py-3 rounded-xl outline-1 outline-white/0 inline-flex justify-start items-center gap-2.5"
            >
              <div
                data-property-1="Rupiah"
                className="w-4 h-4 relative overflow-hidden"
              >
                <div className="w-4 h-3.5 left-[1px] top-[1px] absolute bg-zinc-600"></div>
              </div>
              <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
                Dashboard
              </div>
            </div>
            <div
              data-property-1="Default"
              className="self-stretch px-2.5 py-3 rounded-lg outline-1 outline-white/0 inline-flex justify-start items-center gap-2.5"
            >
              <div
                data-property-1="Pengguna Pengguna"
                className="w-4 h-4 relative overflow-hidden"
              >
                <div className="w-5 h-4 left-[-1px] top-0 absolute bg-zinc-600"></div>
              </div>
              <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
                Buat Postingan
              </div>
            </div>
            <div
              data-property-1="Default"
              className="self-stretch h-12 px-2.5 py-3 rounded-xl outline-1 outline-white/0 inline-flex justify-start items-center gap-2.5"
            >
              <div
                data-property-1="Pengguna Pengguna"
                className="w-4 h-4 relative overflow-hidden"
              >
                <div className="w-5 h-4 left-[-1px] top-0 absolute bg-zinc-600"></div>
              </div>
              <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
                Daftar Galeri
              </div>
            </div>
          </div>

          <div className="self-stretch p-3 bg-neutral-100 rounded-2xl flex flex-col justify-start items-start gap-3">
            <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
              Postingan
            </div>
            <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-neutral-300"></div>
            <div
              data-property-1="Default"
              className="self-stretch h-12 px-2.5 py-3 rounded-xl outline-1 outline-white/0 inline-flex justify-start items-center gap-2.5"
            >
              <div
                data-property-1="Rupiah"
                className="w-4 h-4 relative overflow-hidden"
              >
                <div className="w-4 h-3.5 left-[1px] top-[1px] absolute bg-zinc-600"></div>
              </div>
              <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
                Tambah Postingan
              </div>
            </div>
            <div
              data-property-1="Default"
              className="self-stretch px-2.5 py-3 rounded-lg outline-1 outline-white/0 inline-flex justify-start items-center gap-2.5"
            >
              <div
                data-property-1="Pengguna Pengguna"
                className="w-4 h-4 relative overflow-hidden"
              >
                <div className="w-5 h-4 left-[-1px] top-0 absolute bg-zinc-600"></div>
              </div>
              <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
                Daftar Postingan
              </div>
            </div>
          </div>

          <div className="self-stretch p-3 bg-neutral-100 rounded-2xl flex flex-col justify-start items-start gap-3">
            <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
              Link Medsos
            </div>
            <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-neutral-300"></div>
            <div
              data-property-1="Default"
              className="self-stretch h-12 px-2.5 py-3 rounded-xl outline-1 outline-white/0 inline-flex justify-start items-center gap-2.5"
            >
              <div
                data-property-1="Rupiah"
                className="w-4 h-4 relative overflow-hidden"
              >
                <div className="w-4 h-3.5 left-[1px] top-[1px] absolute bg-zinc-600"></div>
              </div>
              <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
                Edit Akun Medsos
              </div>
            </div>
          </div>

          <div className="self-stretch p-3 bg-neutral-100 rounded-2xl flex flex-col justify-start items-start gap-3">
            <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
              Panel
            </div>
            <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-neutral-300"></div>
            <div
              data-property-1="Default"
              className="self-stretch px-2.5 py-3 rounded-lg outline-1 outline-white/0 inline-flex justify-start items-center gap-2.5"
            >
              <div data-property-1="Gerigi" className="w-4 h-4 relative">
                <div className="w-4 h-4 left-0 top-0 absolute bg-zinc-600"></div>
              </div>
              <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
                Pengaturan Panel
              </div>
            </div>
            <div
              data-property-1="Default"
              className="self-stretch px-2.5 py-3 rounded-lg outline-1 outline-white/0 inline-flex justify-start items-center gap-2.5"
            >
              <div
                data-property-1="Tanda Tanya"
                className="w-4 h-4 relative overflow-hidden"
              >
                <div className="w-4 h-4 left-[1px] top-0 absolute bg-zinc-600"></div>
              </div>
              <div className="text-center justify-center text-zinc-600 text-base font-medium font-['Roboto'] leading-normal">
                Dokumentasi
              </div>
            </div>
          </div>
          <div className="px-3.5 inline-flex justify-center items-center gap-2.5"></div>
        </div>
      </div>
    </div>
  );
};

export default SidebarAdmin;
