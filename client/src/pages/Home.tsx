import React from "react";
import { TopSection } from "../components/TopSection";
import { Introduction } from "../components/Introduction";
import { Intro } from "../components/Intro";

export const Home = () => {
  return (
    <div className="w-full bg-[#0A0A0A] flex flex-col justify-center items-center border-2 border-red-700">
      <TopSection />
      <Introduction />
    </div>
  );
};

//1512px-w
