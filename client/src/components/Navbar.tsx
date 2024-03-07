import React from "react";
import logo from "../assets/top-logo.svg";
import arrowDown from "../assets/arrow-down.svg";
import menuIcon from "../assets/burger-menu.svg";
export const Navbar = () => {
  return (
    <div className="w-full  flex items-center justify-evenly relative">
      <div className="flex items-center gap-2">
        {/*burger menu */}
        <div className="lg:hidden">
          <img src={menuIcon} alt="menu" />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[3rem] lg:w-[6.625rem] h-[3rem] lg:h-[7.3rem] mt-4 lg:mt-7"
          />
          <p className="text-base lg:text-[2rem] text-white text-center leading-8 zcool-kuaile-regular">
            Saviour
          </p>
        </div>
      </div>
      {/* navigations */}
      <div className="w-[42%] h-[3.5rem] py-4 px-6 rounded-[20px] hidden lg:flex items-center justify-around gap-[24px] bg-[#191818]">
        <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular">
          Home
        </p>
        <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular">
          IDO
        </p>
        <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular">
          Tokenomics
        </p>
        <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular">
          Roadmap
        </p>
        <div className="flex gap-2">
          <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular">
            Coming Soon
          </p>
          <img src={arrowDown} alt="down arrow" />
        </div>
      </div>
      <button className="w-[25%] md:w-[20%] lg:w-[11%] h-[2rem] lg:h-[3rem] py-0 lg:py-[10px] px-0 lg:px-4 rounded-2xl bg-gradient-to-r from-[#ED0137] to-[#F05733]">
        <p className="text-[#FFFFFF] text-center font-semibold poppins text-[0.6rem] lg:text-[0.75rem] leading-[0.8rem] lg:leading-[1.125rem] tracking-normal">
          Connect Wallet
        </p>
      </button>
    </div>
  );
};
