import React from "react";

const TopSection = () => {
  return (
    <div className=" fadeAnimation  h-fit p-2  w-full flex justify-center items-center flex-col">
      <div className="flex items-center space-x-4 w-full justify-center">
        <p className="font-bold  fadeAnimation text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[rgb(255,255,255)]">
          hey!
        </p>
      </div>
      <br />
      <p className=" fadeAnimation text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        i'm{" "}
        <span className=" font-poppins font-bold   text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[rgb(171,71,202)]">
          Bhargav
        </span>
      </p>
    </div>
  );
};

export default TopSection;
