import React from "react";
import Cards from "../../assets/desktop/isocard.svg";
const Slogan = () => {
  return (
    <section className="relative text-36 my-14 font-extrabold  tablet:my-20 laptop:my-32 md:text-48 laptop:text-56 laptop:grid laptop:grid-cols-3 laptop:items-center">
      <div className="text-center laptop:col-start-2 laptop:col-span-1">
        <p className="">
          Earn <span className="text-purple-300">More</span>
        </p>
        <p className="">Pay Less</p>
        <button className="text-white text-20 px-6 py-[6px] font-bold mt-6 dark:bg-purple-500 rounded-xl dark:hover:bg-pink-500 bg-pink-500 hover:bg-purple-500  transition-all duration-300 tablet:text-24 tablet:py-2">
          Start
        </button>
      </div>
      <div className="mt-[68px] laptop:absolute laptop:right-[-5rem]">
        <img
          src={Cards}
          alt="credit card"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Slogan;
