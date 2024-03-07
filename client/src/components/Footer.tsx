import React from "react";
import logo from "../assets/logo-footer.svg";
import twitter from "../assets/twitter.svg";
import telegram from "../assets/telegram.svg";
import email from "../assets/email.svg";
import { useComponentVisible } from "../custom-hooks/UseComponentVisible";

export const Footer = () => {
  const { componentRef, isVisible } = useComponentVisible();

  const transitionStyles = {
    transition: "opacity 0.5s ease-in-out",
    opacity: isVisible ? 1 : 0,
  };
  return (
    <div
      ref={componentRef}
      style={{ ...transitionStyles }}
      className="w-full flex flex-col justify-center items-center gap-10 py-10"
    >
      <img
        src={logo}
        alt="logo"
        className="hover:translate-y-[-5px] transition-transform float cursor-pointer"
      />
      <p className="poppins font-bold text-[24px] leading-6 text-center tracking-tighter bg-gradient-to-r from-[#FF002A] to-[#720005] text-transparent bg-clip-text">
        SITEMAP
      </p>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-6 md:flex-row md:w-full">
        <div className="flex flex-wrap justify-center items-center gap-8">
          <p className="leading-[1.187rem] lg:leading-5 text-[0.625rem] lg:text-[1rem] font-semibold poppins text-white cursor-pointer">
            Home
          </p>
          <p className="leading-[1.187rem] lg:leading-5 text-[0.625rem] lg:text-[1rem] font-semibold poppins text-white cursor-pointer">
            IDO
          </p>
          <p className="leading-[1.187rem] lg:leading-5 text-[0.625rem] lg:text-[1rem] font-semibold poppins text-white cursor-pointer">
            Tokenomics
          </p>
          <p className="leading-[1.187rem] lg:leading-5 text-[0.625rem] lg:text-[1rem] font-semibold poppins text-white cursor-pointer">
            Road Map
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <p className="leading-[1.187rem] lg:leading-5 text-[0.625rem] lg:text-[1rem] font-semibold poppins text-white cursor-pointer">
            Whitepaper
          </p>
          <p className="leading-[1.187rem] lg:leading-5 text-[0.625rem] lg:text-[1rem] font-semibold poppins text-white cursor-pointer">
            Pledge
          </p>
          <p className="leading-[1.187rem] lg:leading-5 text-[0.625rem] lg:text-[1rem] font-semibold poppins text-white cursor-pointer">
            NFT
          </p>
          <p className="leading-[1.187rem] lg:leading-5 text-[0.625rem] lg:text-[1rem] font-semibold poppins text-white cursor-pointer">
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
