import React from "react";
import { TopSection } from "../components/TopSection";
import { Introduction } from "../components/Introduction";
import { IdoEvent } from "../components/IdoEvent";
import { Tokenomics } from "../components/Tokenomics";
import { Roadmap } from "../components/Roadmap";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="w-full bg-[#0A0A0A] flex flex-col justify-center items-center">
      <TopSection />
      <Introduction />
      <IdoEvent />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
};
