import React from "react";
import MyCountBox from "../Components/MyCountBox";
import ps5 from "../assets/arrival/pinkperfume.jpg";
import guchi from "../assets/arrival/davidperfume.jpg";
import amazone from "../assets/arrival/guchi.png";
import anti from "../assets/arrival/combingpic.jpg";


function Arrivel() {
  return (
    <>
      <div className="ml-5">
        <MyCountBox name={"New Arrival"} days={"Featured"} />
      </div>
      <div className="flex justify-center items-center  my-10">
        <div className="w-full max-w-[1170px] h-auto lg:h-[600px] flex flex-col lg:flex-row  gap-4 lg:gap-[30px] p-4">
          <div
            className="flex items-end p-7 w-full lg:w-[50%]  bg-black"
            style={{
              backgroundImage: `url(${ps5})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "bottom",
              backgroundSize: "cover"
            }}
          >
            <div className="text-black flex flex-col 2xl:gap-[16px] xl:gap-[16px] lg:gap[16px] md:gap-3 sm:gap-1 mobile:gap-1 p-4">
              <div>
                <h2 className="font-semibold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-xs">versace pink perfume</h2>
              </div>
              <div>
                <p className="w-[242px] h-[42px] 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[30px]">
                  the perfume has good and long lasting best 
                </p>
              </div>
              <div>
                <span className="font-medium 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px] hover:text-myTheme cursor-pointer hover:underline">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] flex flex-col gap-8">
            <div className="bg-[#0D0D0D] w-full lg:w-[570px] h-auto lg:h-[600px] flex rounded">
              <div className="w-full lg:w-[70%] text-white flex justify-center items-end p-3">
                <div className="flex flex-col 2xl:gap-[16px] xl:gap-[16px] lg:gap[16px] md:gap-3 sm:gap-1 mobile:gap-1">
                  <div>
                    <h2 className="font-semibold 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-xl sm:text-sm mobile:text-xs ">Women’s & Mens Perfume Collections</h2>
                  </div>
                  <div>
                    <p className="font-normal 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px]">
                      Featured woman collections that give you another fragrances.
                    </p>
                  </div>
                  <div>
                    <span className="font-medium 2xl:text-sm xl:text-sm lg:text-sm md:text-xs sm:text-xs mobile:text-[10px] hover:text-myTheme cursor-pointer hover:underline">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[70%] flex items-end">
                <img className="w-full lg:w-[570px] h-auto lg:h-[250px]" src={anti} alt="" />
              </div>
            </div>
            <div className="w-full lg:w-[570px] h-auto lg:h-[600px] flex flex-col lg:flex-row gap-4 lg:gap-7">
              <div className="bg-black w-full lg:w-[270px] h-[284px] flex justify-center items-end p-4 rounded"
                style={{
                  backgroundImage: `url(${amazone})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center bottom",
                  backgroundSize: "cover"
                }}
              >
                <div className="text-white flex flex-col  ">
                  <div>
                    <h2 className="font-semibold text-[20px] leading-6">Guchi</h2>
                  </div>
                  <div>
                    <p className="w-[242px] h-[42px] font-normal text-xs">
                      Amzing fragrance check out
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-sm hover:text-myTheme cursor-pointer hover:underline">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-black w-full lg:w-[270px] h-[284px] flex justify-center items-end p-4 py-8 rounded"
                style={{
                  backgroundImage: `url(${guchi})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover"
                }}
              >
                <div className="text-white flex flex-col ">
                  <div>
                    <h2 className="font-semibold text-[20px] leading-6">Perfume</h2>
                  </div>
                  <div>
                    <p className="w-[242px] h-[42px] font-normal text-xs">
                       DAVID PERFUME INTENSE OUD EDP
                    </p>
                  </div>
                  <div>
                    <span className="font-medium text-sm hover:text-myTheme cursor-pointer hover:underline">
                      Shop Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Arrivel;