import React from "react";
import shield from "../assets/shield-faq.svg";
import arrowDown from "../assets/arrow-down-faq.svg";
import { useComponentVisible } from "../custom-hooks/UseComponentVisible";
export const Faq = () => {
  const { componentRef, isVisible } = useComponentVisible();

  return (
    <div
      ref={componentRef}
      className={
        isVisible
          ? "w-full flex justify-center items-center my-2 opacity-100 transition-opacity duration-500 ease-in-out"
          : "w-full flex justify-center items-center my-2 opacity-0"
      }
    >
      <div className="w-[85%] lg:w-[80%] flex flex-col lg:flex-row justify-between items-center">
        <img src={shield} alt="shield" className="hidden lg:block" />
        <div className="w-full flex flex-col gap-5 lg:gap-8 justify-center items-center">
          <p className="text-[#ED0137] text-[2rem] lg:text-[2.75rem] leading-[2.38rem] lg:leading-[3.25rem] text-center shojumaru-regular">
            FAQ
          </p>
          <img src={shield} alt="shield" className="lg:hidden" />
          <div className="w-full lg:w-[90%] flex flex-col gap-6 justify-center items-center">
            <details className="transition duration-300 ease [&_img]:open:-rotate-180 h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[1rem]">
              <summary className="flex justify-between items-center cursor-pointer w-[100%] ">
                <p className="text-white text-[0.6rem] md:text-[0.9rem] lg:text-[1.125rem] leading-[0.828rem] lg:leading-6 text-center shojumaru-regular">
                  1
                </p>
                <p className="text-white text-[0.5rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[1.25rem] leading-[0.92rem] lg:leading-[1.625rem] text-center shojumaru-regular">
                  Why choose "Savior"?
                </p>
                <img
                  src={arrowDown}
                  alt="down-arrow"
                  className="w-[0.6rem] h-[0.6rem] sm:w-[0.83rem] sm:h-[0.83rem] lg:w-[1.5rem] lg:h-[1.5rem]"
                />
              </summary>
              <div className="bg-[#181818] text-white p-[1rem] rounded-[2rem] mt-[1rem]">
                <p className="text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] leading-[1.59rem] lg:leading-[2rem] zcool-kuaile-regular">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Laboriosam error ad, modi culpa beatae laborum aliquam
                  molestiae perferendis eveniet voluptatem nesciunt. Aliquam
                  ipsa hic odit beatae voluptate minus esse repellat.
                </p>
              </div>
            </details>
            <details className="transition duration-300 ease [&_img]:open:-rotate-180 h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[1rem]">
              <summary className="flex justify-between items-center cursor-pointer w-[100%] ">
                <p className="text-white text-[0.6rem] md:text-[0.9rem] lg:text-[1.125rem] leading-[0.828rem] lg:leading-6 text-center shojumaru-regular">
                  2
                </p>
                <p className="text-white text-[0.5rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[1.25rem] leading-[0.92rem] lg:leading-[1.625rem] text-center shojumaru-regular">
                  Why is the IDO duration so long?
                </p>
                <img
                  src={arrowDown}
                  alt="down-arrow"
                  className="w-[0.6rem] h-[0.6rem] sm:w-[0.83rem] sm:h-[0.83rem] lg:w-[1.5rem] lg:h-[1.5rem]"
                />
              </summary>
              <div className="bg-[#181818] text-white p-[1rem] rounded-[2rem] mt-[1rem]">
                <p className="text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] leading-[1.59rem] lg:leading-[2rem] zcool-kuaile-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, facere. Labore obcaecati asperiores quos? Quam
                  aliquam dolorum impedit, eum commodi, atque rerum mollitia
                  exercitationem eos ullam labore, officiis nesciunt
                  praesentium?
                </p>
              </div>
            </details>
            <details className="transition duration-300 ease [&_img]:open:-rotate-180 h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[1rem]">
              <summary className="flex justify-between items-center cursor-pointer w-[100%] ">
                <p className="text-white text-[0.6rem] md:text-[0.9rem] lg:text-[1.125rem] leading-[0.828rem] lg:leading-6 text-center shojumaru-regular">
                  3
                </p>
                <p className="text-white text-[0.5rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[1.25rem] leading-[0.92rem] lg:leading-[1.625rem] text-center shojumaru-regular">
                  When will trading go live?
                </p>
                <img
                  src={arrowDown}
                  alt="down-arrow"
                  className="w-[0.6rem] h-[0.6rem] sm:w-[0.83rem] sm:h-[0.83rem] lg:w-[1.5rem] lg:h-[1.5rem]"
                />
              </summary>
              <div className="bg-[#181818] text-white p-[1rem] rounded-[2rem] mt-[1rem]">
                <p className="text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] leading-[1.59rem] lg:leading-[2rem] zcool-kuaile-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, facere. Labore obcaecati asperiores quos?
                </p>
              </div>
            </details>
            <details className="transition duration-300 ease [&_img]:open:-rotate-180 h-fit w-[100%] border-[1px] border-[#ED0137] rounded-[20px] p-[1rem]">
              <summary className="flex justify-between items-center cursor-pointer w-[100%] ">
                <p className="text-white text-[0.6rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[1.25rem] leading-[0.828rem] lg:leading-6 text-center shojumaru-regular">
                  4
                </p>
                <p className="text-white text-[0.5rem] sm:text-[0.9rem] md:text-[0.9rem] lg:text-[1.25rem] leading-[0.92rem] lg:leading-[1.625rem] text-center shojumaru-regular">
                  When can we claim the tokens?
                </p>
                <img
                  src={arrowDown}
                  alt="down-arrow"
                  className="w-[0.6rem] h-[0.6rem] sm:w-[0.83rem] sm:h-[0.83rem] lg:w-[1.5rem] lg:h-[1.5rem]"
                />
              </summary>
              <div className="bg-[#181818] text-white p-[1rem] rounded-[2rem] mt-[1rem]">
                <p className="text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] leading-[1.59rem] lg:leading-[2rem] zcool-kuaile-regular">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi, facere. Labore obcaecati asperiores quos?
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};
