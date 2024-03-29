import React from "react";
import phase1 from "../assets/phase1.svg";
import phase2 from "../assets/phase2.svg";
import phase3 from "../assets/phase3.svg";
import phase4 from "../assets/phase4.svg";
import { useComponentVisible } from "../custom-hooks/UseComponentVisible";

export const Roadmap = () => {
  const images = [phase1, phase2, phase3, phase4];
  const { componentRef, isVisible } = useComponentVisible();

  return (
    <div
      ref={componentRef}
      className={
        isVisible
          ? "w-full roadmap-bg opacity-100 transition-opacity duration-500 ease-in-out flex flex-col gap-16 py-16 justify-center items-center"
          : "w-full roadmap-bg flex flex-col gap-16 py-16 justify-center items-center opacity-0"
      }
    >
      <p className="text-[#ED0137] text-[2rem] lg:text-[2.75rem] leading-[2.38rem] lg:leading-[3.25rem] shojumaru-regular">
        ROAD MAP
      </p>
      <div className="w-[77%] grid grid-cols-2 lg:grid-cols-4 place-items-center gap-4">
        {images.map((phase, ind) => {
          return (
            <img
              key={ind}
              src={phase}
              alt="phase"
              className="phase-img hover:scale-110"
            />
          );
        })}
      </div>
    </div>
  );
};
