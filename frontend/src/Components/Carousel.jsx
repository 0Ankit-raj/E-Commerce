import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full mb-10"
        data-carousel="slide"
      >
        <div className="relative h-60 overflow-hidden md:h-96">
          <img
            src="./images/banner-2.webp"
            className="absolute block w-full h-auto"
            alt="..."
          />
          <div className="absolute top-0 left-40 bottom-0 flex flex-col justify-center w-[75%] items-center">
            <span className="text-xl font-200 whitespace-nowrap text-[#ca1515] mb-6">
              THE CHOLE COLLECTION
            </span>
            <p className="text-[#000] font-900 text-6xl font-[Lobster] mb-6">The Project Jacket</p>
            <p
              href="#"
              className="block py-2 text-black font-semibold lg:p-0 uppercase border-b-2 border-[#7d0d0d] w-[5.5rem] pb-1"
            >
              SHOP NOW
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
