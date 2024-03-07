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
    <div className="w-full h-[71.5625rem] ido-bg flex justify-center items-center relative my-8 lg:my-0">
      <div className="w-[95%] flex flex-col gap-6 lg:gap-14 justify-center items-center absolute top-12">
        <p className="w-[80%] lg:w-[54.4%] text-[1.75rem] lg:text-[2.5625rem] leading-[2.31rem] lg:leading-[3.375rem] text-center text-[#ED0137] shojumaru-regular">
          Participate in our IDO Event!
        </p>
        <div className="w-[95%] flex flex-col lg:flex-row justify-between items-center">
          {/* left side */}
          <div className="w-[90%] lg:w-[40%] flex flex-col justify-center items-center gap-3 lg:gap-10  relative">
            <p className="text-[#E6E3E3] text-[1rem] lg:text-[1.3125rem] leading-[1.84rem] lg:leading-[2.3125rem] text-center zcool-kuaile-regular">
              During our IDO event, you will gain early access to our
              revolutionary ecosystem, designed to empower everyone to share
              wealth and achieve success.
            </p>
            <div className="w-[80%] flex flex-col justify-center items-center gap-6 border-2 pt-16 pb-6 border-[#DA0909] rounded-2xl ">
              {tokenInfo?.tokens?.map((info, ind) => {
                return (
                  <div
                    className="w-[85%] lg:w-[68%] flex justify-between items-center"
                    key={ind}
                  >
                    <p className="w-[60%] text-white text-[0.8rem] lg:text-[1.25rem] leading-[0.8rem] lg:leading-[1.25rem] text-left zcool-kuaile-regular">
                      {info.title}
                    </p>
                    <p className="text-[#DF180A] text-[0.8rem] lg:text-[1.25rem] leading-[0.8rem] lg:leading-[1.25rem] text-left zcool-kuaile-regular">
                      {info.value}
                    </p>
                  </div>
                );
              })}

              <p className="text-[0.8rem] lg:text-[1.25rem] leading-[0.8rem] lg:leading-[1.25rem] text-center text-white zcool-kuaile-regular">
                Recommended Referral Commission
              </p>

              {tokenInfo?.generation?.map((gen, ind) => {
                return (
                  <div
                    className="w-[85%] lg:w-[68%] flex justify-between items-center"
                    key={ind}
                  >
                    <p className="w-[60%] text-white text-[0.8rem] lg:text-[1.25rem] leading-[0.8rem] lg:leading-[1.25rem] text-left zcool-kuaile-regular">
                      {gen.gen}
                    </p>
                    <p className="text-[#DF180A] text-[0.8rem] lg:text-[1.25rem] leading-[0.8rem] lg:leading-[1.25rem] text-left zcool-kuaile-regular">
                      {gen.data}
                    </p>
                  </div>
                );
              })}

              <div className="w-[50%] md:w-[30%] lg:w-[40%] h-[2rem] lg:h-[4rem] bg-[#ED0137] rounded-[20px] flex items-center justify-center absolute top-[141px] md:top-[3.7rem] lg:top-[120px] left-[26%] md:left-[14rem] lg:left-[31%]">
                <p className="text-[1rem] lg:text-[1.125rem] leading-[1.32rem] lg:leading-[1.5rem] text-white shojumaru-regular">
                  Token Info
                </p>
              </div>
            </div>
            <button className="w-[45%] md:w-[30%] lg:w-[27%] h-[38px] py-[12.6px] px-4 rounded-2xl bg-gradient-to-r from-[#D51B46] to-[#EE6910]">
              <p className="text-[#FFFFFF] text-center text-[0.783rem] lg:text-[0.875rem] leading-[1.175rem] lg:leading-[0.875rem] zcool-kuaile-regular">
                Connect Wallet
              </p>
            </button>
            <p className="w-full lg:w-[95%] text-[#ED0137] text-[1.3rem] lg:text-[1.75rem] leading-[1.98rem] lg:leading-[2.375rem] text-center shojumaru-regular">
              Become an affiliate & Earn 7% as Commission!
            </p>
            {/* input tag*/}
            <div className="w-full lg:w-[95%] relative">
              <div className="flex gap-2 justify-center items-center ">
                <input
                  type="text"
                  className="w-[90%] lg:w-[80%] p-2 lg:p-4 rounded-[20px] bg-black text-[#EDEBEB] zcool-kuaile-regular text-[0.64rem] lg:text-[1rem] text-left leading-[0.64rem] lg:leading-4 border-2 border-red-600"
                  placeholder="Generate a unique referral link"
                />
                <img
                  src={copy}
                  alt="copy"
                  className="w-[10%] md:w-[6%] lg:w-[10%]"
                />
              </div>
              <button className="bg-[#ED0137] p-1 md:p-1.5 lg:p-3 rounded-[20px] absolute top-[0.35rem] md:top-2 lg:top-1.5 right-[2.7rem] md:right-[3.8rem] lg:right-[5.5rem]">
                <p className="text-white text-[0.6rem] lg:text-[0.93rem] leading-[0.6rem] lg:leading-[0.93rem] text-center zcool-kuaile-regular">
                  Generate
                </p>
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="w-[98%] mt-8 py-6 md:py-6 lg:py-6 lg:w-[50%] border-2 border-[#DA0909] rounded-[20px] flex flex-col justify-center items-center gap-4 lg:gap-8 relative pt-2 lg:pt-16 pb-2 lg:pb-10">
            <img
              src={idoTimer}
              alt="timer"
              className="w-[20%] absolute top-[-0.8rem] md:top-[-1.6rem] lg:top-[-1.6rem]"
            />
            <p className="text-[#E6E3E3] lg:text-[#ED0137] text-[1.5rem] lg:text-[3rem] leading-[1.97rem] lg:leading-[4rem] text-center shojumaru-regular">
              PRESALE 1
            </p>
            <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[70%]">
              <p className="w-full text-[#C50D0D] lg:text-[#F5F1F1] text-[1rem] lg:text-[1.5rem] leading-[1rem] lg:leading-8 text-center zcool-kuaile-regular">
                1 Saviour = 0.657 USDT
              </p>
              <p className="w-full text-[#C50D0D] lg:text-[#F5F1F1] text-[1rem] lg:text-[1.5rem] leading-[1rem] lg:leading-8 text-center zcool-kuaile-regular">
                Next Stage Price = 0.723 USDT
              </p>
              <p className="w-full text-[#C50D0D] lg:text-[#F5F1F1] text-[1rem] lg:text-[1.5rem] leading-[1rem] lg:leading-8 text-center zcool-kuaile-regular">
                Sold - $34,56,56,764/$50,00,00,000
              </p>
              <p className="w-full text-[#C50D0D] lg:text-[#F5F1F1] text-[1rem] lg:text-[1.5rem] leading-[1rem] lg:leading-8 text-center zcool-kuaile-regular">
                Raised - $34,56,56,764/$40,00,00,000
              </p>
              {/* inputs */}
              <div className="flex flex-col gap-2 justify-center items-center">
                <input
                  type="text"
                  className="w-[90%] lg:w-full p-2 lg:p-4 rounded-[20px] bg-black text-[#EDEBEB] zcool-kuaile-regular text-[0.5rem] lg:text-[1rem] text-left leading-[0.5rem] lg:leading-4 border-2 border-red-600"
                  placeholder="Enter the amount (BNB)"
                />
                <input
                  type="text"
                  className="w-[90%] lg:w-full p-2 lg:p-4 rounded-[20px] bg-black text-[#EDEBEB] zcool-kuaile-regular text-[0.5rem] lg:text-[1rem] text-left leading-[0.5rem] lg:leading-4 border-2 border-red-600"
                  placeholder="Minimum Quantity to Buy"
                />
                <input
                  type="text"
                  className="w-[90%] lg:w-full p-2 lg:p-4 rounded-[20px] bg-black text-[#EDEBEB] zcool-kuaile-regular text-[0.5rem] lg:text-[1rem] text-left leading-[0.5rem] lg:leading-4 border-2 border-red-600"
                  placeholder="Maximum Quantity of Tokens"
                />
              </div>
            </div>
            {/* buttons */}

            <div className="flex justify-center items-center gap-4">
              <button className="w-[50%] h-[2rem] lg:h-[3rem] py-[10px] px-5 lg:px-[1.375rem] rounded-2xl bg-gradient-to-r from-[#D51B46] to-[#EE6910]">
                <p className="text-[#FFFFFF] text-center text-[0.57rem] lg:text-[1.06rem] leading-[0.85rem] lg:leading-[1.06rem] zcool-kuaile-regular">
                  Buy
                </p>
              </button>
              <button className="w-full h-[2rem] lg:h-[3rem] py-[10px] px-5 lg:px-4 rounded-2xl bg-gradient-to-r from-[#ED0137] to-[#F05733]">
                <p className="text-[#FFFFFF] text-center text-[0.57rem] lg:text-[1.06rem] leading-[0.85rem] lg:leading-[1.06rem] zcool-kuaile-regular">
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
