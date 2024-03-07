import copy from "../assets/copy.svg";
import idoTimer from "../assets/ido-timer.svg";
export const IdoEvent = () => {
  const tokenInfo = {
    tokens: [
      { title: "Total Token Supply", value: "20%" },
      { title: "Soft Cap", value: "200 BNB" },
      { title: "Initial exchange rate", value: "1 BNB" },
    ],
    generation: [
      { gen: "1st Generation", data: "5%" },
      { gen: "2nd Generation", data: "2%" },
    ],
  };

  return (
    <div className="w-full h-[71.5625rem] ido-bg flex justify-center items-center relative">
      <div className="w-[95%] flex flex-col gap-14 justify-center items-center absolute top-12">
        <p className="w-[54.4%] text-[2.5625rem] leading-[3.375rem] text-center text-[#ED0137] shojumaru-regular">
          Participate in our IDO Event!
        </p>
        <div className="w-[95%] flex flex-row justify-between items-center">
          {/* left side */}
          <div className="w-[40%] flex flex-col justify-center items-center gap-10  relative">
            <p className="text-[#E6E3E3] text-[1.3125rem] leading-[2.3125rem] text-center zcool-kuaile-regular">
              During our IDO event, you will gain early access to our
              revolutionary ecosystem, designed to empower everyone to share
              wealth and achieve success.
            </p>
            <div className="w-[70%] flex flex-col justify-center items-center gap-6 border-2 pt-16 pb-6 border-[#DA0909] rounded-2xl ">
              {tokenInfo?.tokens?.map((info) => {
                return (
                  <div className="w-[68%] flex justify-between items-center">
                    <p className="w-[60%] text-white text-[1.25rem] leading-[1.25rem] text-left zcool-kuaile-regular">
                      {info.title}
                    </p>
                    <p className="text-[#DF180A] text-[1.25rem] leading-[1.25rem] text-left zcool-kuaile-regular">
                      {info.value}
                    </p>
                  </div>
                );
              })}

              <p className="text-[1.25rem] leading-[1.25rem] text-center text-white zcool-kuaile-regular">
                Recommended Referral Commission
              </p>

              {tokenInfo?.generation?.map((gen) => {
                return (
                  <div className="w-[68%] flex justify-between items-center">
                    <p className="w-[60%] text-white text-[1.25rem] leading-[1.25rem] text-left zcool-kuaile-regular">
                      {gen.gen}
                    </p>
                    <p className="text-[#DF180A] text-[1.25rem] leading-[1.25rem] text-left zcool-kuaile-regular">
                      {gen.data}
                    </p>
                  </div>
                );
              })}

              <div className="w-[40%] h-[4rem] bg-[#ED0137] rounded-[20px] flex items-center justify-center absolute top-[120px] left-[31%]">
                <p className="text-[18px] text-white shojumaru-regular">
                  Token Info
                </p>
              </div>
            </div>
            <button className="w-[27%] h-[38px] py-[12.6px] px-4 rounded-2xl bg-gradient-to-r from-[#D51B46] to-[#EE6910]">
              <p className="text-[#FFFFFF] text-center text-[14px] leading-[14px] zcool-kuaile-regular">
                Connect Wallet
              </p>
            </button>
            <p className="w-[95%] text-[#ED0137] text-[1.75rem] leading-[2.375rem] text-center shojumaru-regular">
              Become an affiliate & Earn 7% as Commission!
            </p>
            <div className="w-[95%] relative">
              <div className="flex gap-2 justify-center items-center ">
                <input
                  type="text"
                  className="w-[80%] p-4 rounded-[20px] bg-black text-[#EDEBEB] zcool-kuaile-regular text-[16px] text-left leading-4 border-2 border-red-600"
                  placeholder="Generate a unique referral link"
                />
                <img src={copy} alt="copy" />
              </div>
              <button className="bg-[#ED0137] p-3 rounded-[20px] absolute top-1.5 right-[77px]">
                <p className="text-white text-[15px] leading-[15px] text-center zcool-kuaile-regular">
                  Generate
                </p>
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="w-[50%] border-2 border-[#DA0909] rounded-[20px] flex flex-col justify-center items-center gap-8 relative pt-16 pb-10">
            <img
              src={idoTimer}
              alt="timer"
              className="absolute top-[-2.9375rem]"
            />
            <p className="text-[#ED0137] text-[3rem] leading-[4rem] text-center shojumaru-regular">
              PRESALE 1
            </p>
            <div className="flex flex-col gap-8 w-[70%]">
              <p className="w-full text-[#F5F1F1] text-[2rem] leading-8 text-center zcool-kuaile-regular">
                1 Saviour = 0.657 USDT
              </p>
              <p className="w-full text-[#F0F0F0] text-[1.5rem] leading-6 text-center zcool-kuaile-regular">
                Next Stage Price = 0.723 USDT
              </p>
              <p className="w-full text-[#F0F0F0] text-[1.5rem] leading-6 text-center zcool-kuaile-regular">
                Sold - $34,56,56,764/$50,00,00,000
              </p>
              <p className="w-full text-[#F0F0F0] text-[1.5rem] leading-6 text-center zcool-kuaile-regular">
                Raised - $34,56,56,764/$40,00,00,000
              </p>
              <input
                type="text"
                className="w-full p-4 rounded-[20px] bg-black text-[#EDEBEB] zcool-kuaile-regular text-[16px] text-left leading-4 border-2 border-red-600"
                placeholder="Enter the amount (BNB)"
              />
              <input
                type="text"
                className="w-full p-4 rounded-[20px] bg-black text-[#EDEBEB] zcool-kuaile-regular text-[16px] text-left leading-4 border-2 border-red-600"
                placeholder="Minimum Quantity to Buy"
              />
              <input
                type="text"
                className="w-full p-4 rounded-[20px] bg-black text-[#EDEBEB] zcool-kuaile-regular text-[16px] text-left leading-4 border-2 border-red-600"
                placeholder="Maximum Quantity of Tokens"
              />
            </div>
            {/* buttons */}

            <div className="flex justify-center items-center gap-4">
              <button className="w-[50%] h-[3rem] py-[14px] px-[22px] rounded-2xl bg-gradient-to-r from-[#D51B46] to-[#EE6910]">
                <p className="text-[#FFFFFF] text-center text-[17px] leading-[17px] zcool-kuaile-regular">
                  Buy
                </p>
              </button>
              <button className="w-full h-[3rem] py-[10px] px-4 rounded-2xl bg-gradient-to-r from-[#ED0137] to-[#F05733]">
                <p className="text-[#FFFFFF] text-center text-[17px] leading-[17px] zcool-kuaile-regular">
                  Claim Drop
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
