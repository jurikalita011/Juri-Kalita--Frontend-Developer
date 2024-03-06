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
    <div className="w-full flex flex-col gap-14 justify-center items-center tokenomics-bg">
      <p className="text-[#ED0137] text-[44px] leading-[52px] text-center shojumaru-regular">
        Tokenomics
      </p>
      <div className="flex gap-6 justify-between items-center w-[90%]">
        {/* left side */}
        <div className="w-[35%] flex flex-col gap-6 justify-between items-center rounded-[20px] border-2 border-[#DA0909] pt-[80px] pb-[60px] relative">
          <div className="w-[50%] h-[4rem] bg-[#ED0137] rounded-[20px] flex items-center justify-center absolute top-[-32px]">
            <p className="text-[18px] leading-6 text-white shojumaru-regular">
              Token Details
            </p>
          </div>
          {tokenDetails?.map((token) => {
            return (
              <div className="w-[70%] flex justify-between items-center">
                <p className="text-[20px] leading-[20px] text-white text-left zcool-kuaile-regular">
                  {token.title}
                </p>
                <p className="text-[#DF180A] text-[20px] leading-[20px] text-left zcool-kuaile-regular">
                  {token.value}
                </p>
              </div>
            );
          })}
        </div>
        {/* right side */}
        <img className="w-[60%]" src={shield} alt="shield" />
      </div>
    </div>
  );
};
