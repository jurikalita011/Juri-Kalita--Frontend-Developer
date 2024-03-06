import copy from "../assets/copy.svg";
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
    <div className="w-full h-[1145px] ido-bg border-2 border-green-500 flex justify-center items-center relative">
      <div className="w-[95%] flex flex-col gap-14 justify-center items-center border-2 border-violet-500 absolute top-12">
        <p className="w-[54.4%] text-[41px] leading-[54px] text-center text-[#ED0137] shojumaru-regular border-2 border-yellow-500">
          Participate in our IDO Event!
        </p>
        <div className="w-[95%] flex flex-row justify-between items-center border-2 border-brown-500">
          {/* left side */}
          <div className="w-[40%] flex flex-col justify-center items-center gap-10 border-2 border-yellow-500 relative">
            <p className="text-[#E6E3E3] text-[21px] leading-[37px] text-center zcool-kuaile-regular">
              During our IDO event, you will gain early access to our
              revolutionary ecosystem, designed to empower everyone to share
              wealth and achieve success.
            </p>
            <div className="w-[70%] flex flex-col justify-center items-center gap-6 border-2 pt-16 pb-6 border-[#DA0909] rounded-2xl ">
              {tokenInfo?.tokens?.map((info) => {
                return (
                  <div className="w-[68%] flex justify-between items-center">
                    <p className="w-[60%] text-white text-[20px] leading-[20px] text-left zcool-kuaile-regular">
                      {info.title}
                    </p>
                    <p className="text-[#DF180A] text-[20px] leading-[20px] text-left zcool-kuaile-regular">
                      {info.value}
                    </p>
                  </div>
                );
              })}

              <p className="text-[20px] leading-[20px] text-center text-white zcool-kuaile-regular">
                Recommended Referral Commission
              </p>

              {tokenInfo?.generation?.map((gen) => {
                return (
                  <div className="w-[68%] flex justify-between items-center">
                    <p className="w-[60%] text-white text-[20px] leading-[20px] text-left zcool-kuaile-regular">
                      {gen.gen}
                    </p>
                    <p className="text-[#DF180A] text-[20px] leading-[20px] text-left zcool-kuaile-regular">
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
            <p className="w-[95%] text-[#ED0137] text-[28px] leading-[38px] text-center shojumaru-regular">
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
          <div className="text-[#E6E3E3] text-[21px] leading-[37px] text-center zcool-kuaile-regular border-2 cyan-yellow-500">
            ndsndn
          </div>
        </div>
      </div>
    </div>
  );
};

//text
/*
width: 539px
height: 111px
top: 1385px
left: 80px
*/
/*
card================>
width: 412px
height: 382px
top: 1562.27px
left: 151px
border-radius: 20px
border: 1.5px

border: 1.5px solid;

border-image-source: linear-gradient(132.77deg, #EF490F 2.13%, #DA0909 98.39%);


*/

//card top
/*
width: 244px
height: 70px
top: 1520px
left: 229px
border-radius: 20px
background: #ED0137;
==========================>
text inside====>
font-family: Shojumaru;
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
background: #FFFFFF;

*/
