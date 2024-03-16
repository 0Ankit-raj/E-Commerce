/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row w-full mt-4">
      <div className="basis-1/2 w-full h-full overflow-hidden mr-2 relative">
        <div className="relative w-full">
          {/* Image */}
          <img className="w-full" src="./1.webp" alt="banner" />
          {/* Content */}
          <div className="absolute top-0 left-14 bottom-0 flex flex-col justify-center w-[75%]">
            <span className="text-4xl font-thin whitespace-nowrap text-black font-[Lobster] mb-4">
              Women's fashion
            </span>
            <p className="text-[#404057] font-300 mb-4">
              Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
              incidid-unt labore edolore magna aliquapendisse ultrices gravida.
            </p>
            <p
              href="#"
              className="block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem] pb-1"
            >
              SHOP NOW
            </p>
          </div>
        </div>
      </div>
      <div className="basis-1/4 flex flex-col mb-2 ml-2">
        <div className="relative w-full">
          Image
          <img className="w-full" src="./images/2.webp" alt="banner" />
          {/* Content */}
          <div className="absolute top-0 left-6 bottom-0 flex flex-col justify-center w-[75%]">
            <span className="text-[1.5rem] font-semibold whitespace-nowrap text-black">
              Men's fashion
            </span>
            <p className="text-[#404057] font-300 mb-4">358 items</p>
            <p
              href="#"
              className="block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem] pb-1"
            >
              SHOP NOW
            </p>
          </div>
        </div>
        <div className="h-[50%] mt-2">
          <div className="relative w-full">
            {/* Image */}
            <img className="w-full" src="./images/4.webp" alt="banner" />
            {/* Content */}
            <div className="absolute top-0 left-6 bottom-0 flex flex-col justify-center w-[75%]">
              <span className="text-[1.5rem] font-semibold whitespace-nowrap text-black">
                Kid's fashion
              </span>
              <p className="text-[#404057] font-300 mb-4">273 items</p>
              <p
                href="#"
                className="block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem] pb-1"
              >
                SHOP NOW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/4 flex flex-col ml-2">
        <div className="relative w-full">
          {/* Image */}
          <img className="w-full" src="./images/3.webp" alt="" />
          {/* Content */}
          <div className="absolute top-0 left-6 bottom-0 flex flex-col justify-center w-[75%]">
            <span className="text-[1.5rem] font-semibold whitespace-nowrap text-black">
              Cosmetics
            </span>
            <p className="text-[#404057] font-300 mb-4">159 items</p>
            <p
              className="block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem] pb-1"
            >
              SHOP NOW
            </p>
          </div>
        </div>

        <div className="h-[50%] mt-2">
          <div className="relative w-full">
            {/* Image */}
            <img className="w-full" src="./images/5.webp" alt="" />
            {/* Content */}
            <div className="absolute top-0 left-6 bottom-0 flex flex-col justify-center w-[75%]">
              <span className="text-[1.5rem] font-semibold whitespace-nowrap text-black">
                Accessories
              </span>
              <p className="text-[#404057] font-300 mb-4">792 items</p>
              <p
                className="block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem] pb-1"
              >
                SHOP NOW
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
