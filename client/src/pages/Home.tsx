import React from "react";
import { TopSection } from "../components/TopSection";
import { Introduction } from "../components/Introduction";
import { IdoEvent } from "../components/IdoEvent";
import { Tokenomics } from "../components/Tokenomics";
import { Roadmap } from "../components/Roadmap";

export const Home = () => {
  return (
    <div className="w-full bg-[#0A0A0A] flex flex-col justify-center items-center border-2 border-red-700">
      <TopSection />
      <Introduction />
      <IdoEvent />
      <Tokenomics />
      <Roadmap />
    </div>
  );
};

//1512px-w
