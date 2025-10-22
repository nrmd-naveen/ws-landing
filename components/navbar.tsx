"use client";

import Image from "next/image";
import logo from "@/public/Logo.png";

const NavBar = () => {
  return (
    <div className="nav w-full z-50 fixed top-[4%] md:top-[3%] lg:top-[4%] xl:top-[4%] 2xl:top-[5%] flex items-center justify-center">
      <div
        className="min-w-80 w-[95%] h-15 sm:w-[70%] md:h-[68px] xl:w-[50%] 
        bg-black/10 backdrop-blur-3xl px-4 py-3 
        flex md:gap-20 items-center justify-between 
        rounded-4xl border-[1px] sm:border-[0.5px] border-white/50 sm:border-white/50"
      >
        <div className="flex items-center ">
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer h-10 w-15 sm:h-12 md:h-14 scale-[3.5] sm:scale-[3] origin-left"
            style={{ transformOrigin: "25% center" }}
          />
        </div>

        <div className="w-80  flex justify-center sm:justify-around md:text-lg font-bold">
          <button className="cursor-pointer hidden sm:block text-[#dfee07]  hover:text-white">
            Our Services
          </button>
          <div></div>
          <button className="cursor-pointer sm:text-lg  flex justify-center text-[#dfee07]  hover:text-white">
            Contact us
          </button>
        </div>
        <div className="bg-[#dfee07]  hover:bg-white w-25 sm:h-10 h-8 rounded-3xl flex justify-center items-center">
          <button className="cursor-pointer   text-black tracking-wide ">
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


