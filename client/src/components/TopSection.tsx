import React from "react";
import { Navbar } from "./Navbar";
import { useComponentVisible } from "../custom-hooks/UseComponentVisible";

export const TopSection = () => {
  const { componentRef, isVisible } = useComponentVisible();

  return (
    <div
      ref={componentRef}
      className={
        isVisible
          ? "w-full h-[36.75rem] top-bg opacity-100 transition-opacity duration-500 ease-in-out"
          : "w-full h-[36.75rem] top-bg opacity-0"
      }
    >
      <Navbar />
      <div className="flex justify-center items-center absolute">
        <div className="w-[85%] py-4 flex justify-center items-center bg-[#24232366] md:bg-transparent lg:bg-transparent rounded-[20px] md:rounded-none lg:rounded-none lg:w-[83.4%] relative top-[6.2rem] md:top-[9.375rem] lg:top-[9.375rem]">
          <p className="w-[70%] lg:w-full text-center text-[1.3rem] lg:text-[2.8125rem] leading-[1.6rem] lg:leading-[2.8125rem] text-[#FBF6F6] shojumaru-regular">
            Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
          </p>
        </div>
      </div>
    </div>
  );
};
