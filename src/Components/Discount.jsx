import React from "react";
// import { FaCar } from "react-icons/fa";
// import { FaRegMoneyBillAlt } from "react-icons/fa";
// import { HiSupport } from "react-icons/hi";
// import { IoHeadsetSharp } from "react-icons/io5";

const Discount = () => {
  return (
    <>
      <div className="flex flex-row w-full mt-4 justify-center relative left-0 mb-6">
        <div className="flex justify-center">
          <div className="flex-1 flex flex-col ml-2 w-[30rem] h-[20rem]">
            <img className="w-full" src="./images/discount.webp" alt="" />
          </div>
          <div className="flex-1 flex flex-col ml-2">
            <div className="h-[18rem] block max-w-sm p-6 bg-white dark:bg-[#f4f4f4] relative">
              <div className="relative top-[0rem] left-1/2 transform -translate-x-1/2 w-40 h-40 bg-white rounded-full flex items-center justify-center overflow-visible z-0">
                <div
                  className="flex flex-col justify-center
               items-center"
                >
                  <span className="text-sm font-semibold dark:text-[#000]">
                    DISCOUNT
                  </span>
                  <h2 className="text-2xl font-400 font-[Lobster] dark:text-[#ca1515]">
                    Summer 2019
                  </h2>
                  <span className="text-sm font-semibold dark:text-[#000]">
                    SALE{" "}
                    <span className="text-lg font-bold dark:text-[#ca1515]">
                      50%
                    </span>
                  </span>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mr-4">
                  <span className="text-[2rem] font-medium dark:text-[#000] pr-2">
                    30
                  </span>
                  <span className="text-[1rem] font-200 dark:text-[#000] pt-4">
                    Day
                  </span>
                </div>
                <div className="mr-4">
                  <span className="text-[2rem] font-medium dark:text-[#000] pr-2">
                    06
                  </span>
                  <span className="text-[1rem] font-200 dark:text-[#000] pt-4">
                    Hour
                  </span>
                </div>
                <div className="mr-4">
                  <span className="text-[2rem] font-medium dark:text-[#000] pr-2">
                    54
                  </span>
                  <span className="text-[1rem] font-200 dark:text-[#000] pt-4">
                    Min
                  </span>
                </div>
                <div className="mr-4">
                  <span className="text-[2rem] font-medium dark:text-[#000] pr-2">
                    45
                  </span>
                  <span className="text-[1rem] font-200 dark:text-[#000] pt-4">
                    Sec
                  </span>
                </div>
              </div>
              <div
                href="#"
                className="justify-center text-[0.6rem] items-center mt-3 m-auto flex py-2 text-black font-bold lg:p-0 uppercase border-b-2 border-[#ca1515] w-[3.5rem] pb-1"
              >
                SHOP NOW
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full mt-4 justify-center mb-6 relative left-0">
        <div className="mr-6 flex">
          <span className="text-[3rem] font-medium dark:text-[#ca1515] pr-2">
            {/* <FaCar /> */}
          </span>
          <div className="flex flex-col ml-2">
            <p className="text-[1rem] font-bold dark:text-[#000]">
              Free Shipping
            </p>
            <p className="text-[1rem] font-200 dark:text-[#000]">
              For all order over $99
            </p>
          </div>
        </div>
        <div className="mr-6 flex">
          <span className="text-[3rem] font-medium dark:text-[#ca1515] pr-2">
            {/* <FaRegMoneyBillAlt /> */}
          </span>
          <div className="flex flex-col ml-2">
            <p className="text-[1rem] font-bold dark:text-[#000]">
              Money Back Guarantee
            </p>
            <p className="text-[1rem] font-200 dark:text-[#000]">
              If good have Problems
            </p>
          </div>
        </div>
        <div className="mr-6 flex">
          <span className="text-[3rem] font-medium dark:text-[#ca1515] pr-2">
            {/* <HiSupport /> */}
          </span>
          <div className="flex flex-col ml-2">
            <p className="text-[1rem] font-bold dark:text-[#000]">
              Online Support 24/7
            </p>
            <p className="text-[1rem] font-200 dark:text-[#000]">
              Dedicated support
            </p>
          </div>
        </div>
        <div className="mr-6 flex">
          <span className="text-[3rem] font-medium dark:text-[#ca1515] pr-2">
            {/* <IoHeadsetSharp /> */}
          </span>
          <div className="flex flex-col ml-2">
            <p className="text-[1rem] font-bold dark:text-[#000]">
              Payment Secure
            </p>
            <p className="text-[1rem] font-200 dark:text-[#000]">
              100% secure payment
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
