import React, { useState } from "react";
import logo from "../assets/top-logo.svg";
import arrowDown from "../assets/arrow-down.svg";
import menuIcon from "../assets/burger-menu.svg";
import { WalletConnectionButton } from "./ConnectWallet";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full  flex items-center justify-evenly relative">
      {isMenuOpen ? (
        <div className="py-5 flex items-left relative">
          {/*burger menu */}
          <div className="lg:hidden mr-16" onClick={toggleMenu}>
            <img src={menuIcon} alt="menu" />
          </div>
          {isMenuOpen ? (
            <div className="justify-center items-center hidden">
              <img
                src={logo}
                alt="logo"
                className="w-[3rem] lg:w-[6.625rem] h-[3rem] lg:h-[7.3rem] mt-4 lg:mt-7 cursor-pointer"
              />
              <p className="text-base lg:text-[2rem] text-white text-center leading-8 zcool-kuaile-regular cursor-pointer">
                Saviour
              </p>
            </div>
          ) : (
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
          )}
        </div>
      ) : (
        <div className="flex items-center relative">
          {/*burger menu */}
          <div className="lg:hidden" onClick={toggleMenu}>
            <img src={menuIcon} alt="menu" />
          </div>
          {isMenuOpen ? (
            <div className="justify-center items-center hidden">
              <img
                src={logo}
                alt="logo"
                className="w-[3rem] lg:w-[6.625rem] h-[3rem] lg:h-[7.3rem] mt-4 lg:mt-7 cursor-pointer"
              />
              <p className="text-base lg:text-[2rem] text-white text-center leading-8 zcool-kuaile-regular cursor-pointer">
                Saviour
              </p>
            </div>
          ) : (
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
          )}
        </div>
      )}
      {/* navigations */}
      {isMenuOpen ? (
        <div className="w-full rounded-[20px] flex flex-col items-left gap-2 bg-[#191818] bg-transparent absolute top-[70%] left-[25%]">
          <p
            className="text-[0.9rem] md:text-[1.25rem] text-left  text-white leading-[20px] zcool-kuaile-regular cursor-pointer"
            onClick={toggleMenu}
          >
            Home
          </p>
          <p
            className="text-[0.9rem] md:text-[1.25rem] text-left  text-white leading-[20px] zcool-kuaile-regular cursor-pointer"
            onClick={toggleMenu}
          >
            IDO
          </p>
          <p
            className="text-[0.9rem] md:text-[1.25rem] text-left  text-white leading-[20px] zcool-kuaile-regular cursor-pointer"
            onClick={toggleMenu}
          >
            Tokenomics
          </p>
          <p
            className="text-[0.9rem] md:text-[1.25rem] text-left  text-white leading-[20px] zcool-kuaile-regular cursor-pointer"
            onClick={toggleMenu}
          >
            Roadmap
          </p>
          <div className="flex gap-2">
            <p
              className="text-[0.9rem] md:text-[1.25rem] text-center  text-white leading-[20px] zcool-kuaile-regular cursor-pointer"
              onClick={toggleMenu}
            >
              Coming Soon
            </p>
            <img src={arrowDown} alt="down arrow" />
          </div>
        </div>
      ) : (
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
      )}
      <WalletConnectionButton />
    </div>
  );
};
