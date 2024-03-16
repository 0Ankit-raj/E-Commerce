import React from "react";
import "./index.css";
// import { FaInstagram } from "react-icons/fa6";

const ProductGrid = () => {
  return (
    <>
      <div className="flex flex-row w-full mt-8">
        <div className="basis-[16.66] w-full h-full relative hover11">
          <img
            className="h-[18rem] w-full"
            src="./images/insta-1.webp"
            alt=""
          />
          <figcaption>
            <span className="justify-center items-center text-center flex text-[1.5rem]">
            {/* <FaInstagram /> */}
            </span>
            @ashion_shop
          </figcaption>
        </div>
        <div className="basis-[16.66] w-full h-full relative hover11">
          <img
            className="h-[18rem] w-full"
            src="./images/insta-2.webp"
            alt=""
          />
            <figcaption>
            <span className="justify-center items-center text-center flex text-[1.5rem]">
            {/* <FaInstagram /> */}
            </span>
            @ashion_shop
          </figcaption>
        </div>
        <div className="basis-[16.66] w-full h-full relative hover11">
          <img
            className="h-[18rem] w-full"
            src="./images/insta-3.webp"
            alt=""
          />
            <figcaption>
            <span className="justify-center items-center text-center flex text-[1.5rem]">
            {/* <FaInstagram /> */}
            </span>
            @ashion_shop
          </figcaption>
        </div>
        <div className="basis-[16.66] w-full h-full relative hover11">
          <img
            className="h-[18rem] w-full"
            src="./images/insta-4.webp"
            alt=""
          />
            <figcaption>
            <span className="justify-center items-center text-center flex text-[1.5rem]">
            {/* <FaInstagram /> */}
            </span>
            @ashion_shop
          </figcaption>
        </div>
        <div className="basis-[16.66] w-full h-full relative hover11">
          <img
            className="h-[18rem] w-full"
            src="./images/insta-5.webp"
            alt=""
          />
            <figcaption>
            <span className="justify-center items-center text-center flex text-[1.5rem]">
            {/* <FaInstagram /> */}
            </span>
            @ashion_shop
          </figcaption>
        </div>
        <div className="basis-[16.66] w-full h-full relative hover11">
          <img
            className="h-[18rem] w-full"
            src="./images/insta-6.webp"
            alt=""
          />
            <figcaption>
            <span className="justify-center items-center text-center flex text-[1.5rem]">
            {/* <FaInstagram /> */}
            </span>
            @ashion_shop
          </figcaption>
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
