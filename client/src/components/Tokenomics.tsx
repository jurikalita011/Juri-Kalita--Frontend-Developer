import React from "react";
import shield from "../assets/shield-tokenomics.svg";
export const Tokenomics = () => {
  const tokenDetails = [
    { title: "Name", value: "Saviour" },
    { title: "Symbol", value: "SVR" },
    { title: "Total Supply", value: "1000 Trillion" },
    { title: "Decimals", value: "18" },
  ];
  return (
    <div className="w-full flex flex-col gap-14 justify-center items-center tokenomics-bg mt-10 lg:mt-0">
      <p className="text-[#ED0137] text-[2rem] lg:text-[2.75rem] leading-[2.38rem] lg:leading-[3.25rem] text-center shojumaru-regular">
        Tokenomics
      </p>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 justify-between items-center w-[90%]">
        {/* left side */}
        <div className="w-[90%] lg:w-[35%] flex flex-col gap-6 justify-between items-center rounded-[20px] border-2 border-[#DA0909] pt-[80px] pb-[60px] relative">
          <div className="w-[70%] lg:w-[50%] h-[3rem] lg:h-[4rem] bg-[#ED0137] rounded-[20px] flex items-center justify-center absolute top-[-1.5rem] lg:top-[-2rem]">
            <p className="text-[1.125rem] leading-6 text-white shojumaru-regular">
              Token Details
            </p>
          </div>
          {tokenDetails?.map((token) => {
            return (
              <div className="w-[87%] lg:w-[70%] flex justify-between items-center">
                <p className="text-[1.05rem] lg:text-[1.25rem] leading-[1.05rem] lg:leading-[1.25rem] text-white text-left zcool-kuaile-regular">
                  {token.title}
                </p>
                <p className="text-[#DF180A] text-[1.05rem] lg:text-[1.25rem] leading-[1.05rem] lg:leading-[1.25rem] text-left zcool-kuaile-regular">
                  {token.value}
                </p>
              </div>
            );
          })}
        </div>
        {/* right side */}
        <img className="w-full lg:w-[60%]" src={shield} alt="shield" />
      </div>
    </div>
  );
};
