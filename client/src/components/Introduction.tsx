import React from "react";

import arrowDown from "../assets/arrow-down.svg";
import img from "../assets/intro-img.svg";
import { useComponentVisible } from "../custom-hooks/UseComponentVisible";

export const Introduction = () => {
  const { componentRef, isVisible } = useComponentVisible();

  return (
    <div
      ref={componentRef}
      className={
        isVisible
          ? "flex flex-wrap justify-center items-center w-[80%] opacity-100 transition-opacity duration-500 ease-in-out right-move"
          : "flex flex-wrap justify-center items-center w-[80%] opacity-0"
      }
    >
      {/* Left side content */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-8">
        <p className="text-[#ED0137] text-[2rem] md:text-[2rem] lg:text-[2.75rem] leading-[3.2725rem] shojumaru-regular">
          Introduction
        </p>
        {/* On small screens*/}
        <img src={img} alt="Intro" className="w-full lg:hidden " />
        <p className="text-[#FFFCFD] text-center lg:text-left text-base md:text-3xl lg:text-2xl zcool-kuaile-regular">
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

        <button className="w-[55%] md:w-[30%] lg:w-[29%] h-[1.5rem] md:h-[2rem]  lg:h-[2.375rem] py-[17px] px-[21px] rounded-[22px] bg-gradient-to-r from-[#D51B46] to-[#EE6910] flex items-center justify-center gap-2">
          <p className="text-[#FFFFFF] text-center leading-[0.9rem] text-[0.9rem] md:leading-[1rem] md:text-[1rem] lg:leading-[1.25rem] lg:text-[1.25rem] zcool-kuaile-regular ">
            Documents
          </p>
          <img src={arrowDown} alt="down-arrow" />
        </button>
      </div>
      {/* Right side image */}
      <div className="w-full lg:w-1/2">
        {/* On large screens*/}
        <img src={img} alt="Intro" className="w-full lg:block hidden" />
      </div>
    </div>
  );
};
