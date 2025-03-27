import React from "react";
import CountdownTimer from "./CountdownTimer";
import ghee from "../assets/offersImg/ghee.webp";
import rawsugar from "../assets/offersImg/RawSugar.webp";
import sunfloweroil from "../assets/offersImg/SunflowerOil.webp";
import wildforesthoney from "../assets/offersImg/WildForestHoney.webp";

const Banner = () => {
  return (
    <div className="bg-[#F4EDE1] p-3 md:p-4 my-2 max-w-7xl mx-auto mt-5">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left Section */}
        <div className="text-green-900 text-center md:text-left">
          <h2 className="text-xl md:text-3xl font-bold leading-snug">
            Clean Eating Starts Here
          </h2>
          <p className="text-sm md:text-lg mt-1 font-medium">
            Switch to chemical-free groceries for a healthier lifestyle.
          </p>
        </div>

        {/* Middle Section - Product Images */}
        <div className="flex flex-wrap justify-center gap-2 mt-3 md:mt-0">
          <img src={ghee} alt="Ghee" className="h-16 md:h-24 rounded-md shadow-sm" />
          <img src={rawsugar} alt="Raw Sugar" className="h-24 md:h-30 rounded-md shadow-sm" />
          <img src={sunfloweroil} alt="Sunflower Oil" className="h-16 md:h-24 rounded-md shadow-sm" />
          <img src={wildforesthoney} alt="Wild Forest Honey" className="h-16 md:h-24 rounded-md shadow-sm" />
        </div>

        {/* Right Section - Discount Offer */}
        <div className="mt-3 md:mt-0 text-center md:text-right">
          <div className="bg-green-900 text-white px-3 py-2 rounded-md shadow-md">
            <p className="text-base font-semibold">UP TO</p>
            <p className="text-2xl md:text-3xl font-bold">25% OFF</p>
          </div>
          <button className="mt-2 bg-green-700 text-white px-4 py-1 rounded-md text-sm font-semibold hover:bg-green-800 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mt-4 flex justify-center">
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Banner;
