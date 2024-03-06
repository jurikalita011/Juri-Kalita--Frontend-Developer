import React from "react";
import phase1 from "../assets/phase1.svg";
import phase2 from "../assets/phase2.svg";
import phase3 from "../assets/phase3.svg";
import phase4 from "../assets/phase4.svg";
export const Roadmap = () => {
  return (
    <div className="w-full roadmap-bg flex flex-col gap-16 py-16 justify-center items-center border-2 border-green-200">
      <p className="text-[#ED0137] text-[44px] leading-[52px] shojumaru-regular border-2 border-red-200">
        ROAD MAP
      </p>
      <div className="w-[77%] grid grid-cols-4 place-items-center gap-4 border-2 border-cyan-200">
        <img src={phase1} alt="phase1" />
        <img src={phase2} alt="phase2" />
        <img src={phase3} alt="phase3" />
        <img src={phase4} alt="phase4" />
      </div>
    </div>
  );
};
