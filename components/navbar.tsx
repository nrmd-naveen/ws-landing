"use client";

import Image from "next/image";
import logo from "@/public/Logo.png";
import Link from "next/link";

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
        <Link href={'/'}>
          <Image
            src={logo}
            alt="logo"
            className="cursor-pointer h-10 w-15 sm:h-12 md:h-14 scale-[3.5] sm:scale-[3] origin-left"
            style={{ transformOrigin: "25% center" }}
          />
        </Link>
        </div>

        <div className="w-80  flex justify-center sm:justify-around md:text-lg font-bold">
          <button className=" bg-clip-text text-transparent cursor-pointer hidden sm:block bg-gradient-to-b hover:scale-102 from-yellow-300 to-orange-500 text-xl">
            Our Services
          </button>
          <div></div>
          <button className=" bg-clip-text text-transparent cursor-pointer hidden sm:block bg-gradient-to-b hover:scale-102 from-yellow-300 to-orange-500 text-xl">
              Contact us
          </button>
        </div>
        <div className="bg-gradient-to-br cursor-pointer border border-orange-200 from-yellow-300 to-orange-600 hover:scale-105 transition-transform duration-300 hover:bg-white w-25 sm:h-10 h-8 rounded-3xl flex justify-center items-center">
          <button className="font-bold text-neutral-700/90 tracking-wide cursor-pointer  ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;


