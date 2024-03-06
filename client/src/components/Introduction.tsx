import React from "react";

import arrowDown from "../assets/arrow-down.svg";
import img from "../assets/intro-img.svg";

export const Introduction = () => {
  return (
    <div className="flex flex-wrap justify-center items-center w-[80%] border-2 border-pink-200">
      {/* Left side content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
        <p className="text-[#ED0137] lg:text-[44px] leading-[52.36px] shojumaru-regular">
          Introduction
        </p>
        {/* On small screens, display image below heading */}
        <img
          src={img}
          alt="Intro-image"
          className="w-full lg:hidden border-2 border-yellow-200"
        />
        <p className="text-[#FFFCFD] lg:text-2xl zcool-kuaile-regular">
          We've all been in the mud once, and now we've decided to fight it out.
          <br />
          Pay tribute to those pioneers of WEB3 and the warriors who dedicated
          their love to the blockchain. Save the lucky ones alive, join us to
          save the future!
          <br />
          Our mission is to empower everyone to share wealth and succeed.
          <br />
          <span className="text-slate-400">read more...</span>
        </p>

        <button className="w-[25%] h-[38px] py-[17px] px-[21px] rounded-[22px] bg-gradient-to-r from-[#D51B46] to-[#EE6910]">
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#FFFFFF] text-center leading-[20px] text-[20px] zcool-kuaile-regular ">
              Documents
            </p>
            <img src={arrowDown} alt="down-arrow" />
          </div>
        </button>
      </div>
      {/* Right side image */}
      <div className="w-full lg:w-1/2">
        {/* On large screens*/}
        <img
          src={img}
          alt="Intro-image"
          className="w-full lg:block hidden border-2 border-yellow-200"
        />
      </div>
    </div>
  );
};
