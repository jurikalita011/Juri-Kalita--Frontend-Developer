import React from "react";
import logo from "../assets/top-logo.svg";
import arrowDown from "../assets/arrow-down.svg";
import menuIcon from "../assets/burger-menu.svg";
import { WalletConnectionButton } from "./ConnectWallet";

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
            className="w-[3rem] lg:w-[6.625rem] h-[3rem] lg:h-[7.3rem] mt-4 lg:mt-7 cursor-pointer"
          />
          <p className="text-base lg:text-[2rem] text-white text-center leading-8 zcool-kuaile-regular cursor-pointer">
            Saviour
          </p>
        </div>
      </div>
      {/* navigations */}
      <div className="w-[42%] h-[3.5rem] py-4 px-6 rounded-[20px] hidden lg:flex items-center justify-around gap-[24px] bg-[#191818]">
        <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
          Home
        </p>
        <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
          IDO
        </p>
        <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
          Tokenomics
        </p>
        <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
          Roadmap
        </p>
        <div className="flex gap-2">
          <p className="text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular cursor-pointer">
            Coming Soon
          </p>
          <img src={arrowDown} alt="down arrow" />
        </div>
      </div>
      <WalletConnectionButton />
    </div>
  );
};
