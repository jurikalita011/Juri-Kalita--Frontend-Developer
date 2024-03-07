import React from "react";
import logo from "../assets/logo-footer.svg";
import twitter from "../assets/twitter.svg";
import telegram from "../assets/telegram.svg";
import email from "../assets/email.svg";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 py-10">
      <img src={logo} alt="logo" />
      <p className="poppins font-bold text-[24px] leading-6 text-center tracking-tighter bg-gradient-to-r from-[#FF002A] to-[#720005] text-transparent bg-clip-text">
        SITEMAP
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-0 md:flex-row md:w-full">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <p className="leading-5 text-[1rem] font-semibold poppins text-white">
            Home
          </p>
          <p className="leading-5 text-[1rem] font-semibold poppins text-white">
            IDO
          </p>
          <p className="leading-5 text-[1rem] font-semibold poppins text-white">
            Tokenomics
          </p>
          <p className="leading-5 text-[1rem] font-semibold poppins text-white">
            Road Map
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <p className="leading-5 text-[1rem] font-semibold poppins text-white">
            Whitepaper
          </p>
          <p className="leading-5 text-[1rem] font-semibold poppins text-white">
            Pledge
          </p>
          <p className="leading-5 text-[1rem] font-semibold poppins text-white">
            NFT
          </p>
          <p className="leading-5 text-[1rem] font-semibold poppins text-white">
            Games
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-8">
        <img src={twitter} alt="twitter" />
        <img src={telegram} alt="telegram" />
        <img src={email} alt="email" />
      </div>
    </div>
  );
};
