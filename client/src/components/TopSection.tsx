import React from "react";
import { Navbar } from "./Navbar";

export const TopSection = () => {
  return (
    <div className="w-full h-[588px] top-bg abolute">
      <Navbar />
      <div className="flex justify-center items-center absolute">
        <p className="w-[83.4%] text-[45px] leading-[45px] text-[#FBF6F6] relative top-[150px] shojumaru-regular">
          Where Blockchain Heroes Thrive, Rescuing Dreams, Elevating Fortunes.
        </p>
      </div>
    </div>
  );
};
