import React from "react";
import { Navbar } from "./Navbar";

export const TopSection = () => {
  return (
    <div className="w-full h-[36.75rem] top-bg abolute">
      <Navbar />
      <div className="flex justify-center items-center absolute">
        <p className="w-[53%] lg:w-[83.4%] text-center text-[1.3rem] lg:text-[2.8125rem] leading-[1.6rem] lg:leading-[2.8125rem] text-[#FBF6F6] relative top-[9.375rem] shojumaru-regular">
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </p>
      </div>
    </div>
  );
};
