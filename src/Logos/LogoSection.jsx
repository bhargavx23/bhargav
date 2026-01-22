import React from "react";
import gitLogo from "./Git.svg";
import instagramLogo from "./instagaram.svg";
import linkedinLogo from "./linkedin.svg";

const LogoSection = () => {
  return (
    <div className=" fadeAnimation w-full h-[10vh]  justify-center md:justify-start items-center flex  px-4 md:px-6 lg:px-10 md:items-center space-x-4 md:space-x-6">
      <a href="https://github.com/bhargavx23">
        <img
          src={gitLogo}
          alt="Git Logo"
          className="w-15 h-15 hover:scale-95 ease-in transition-all duration-75"
        />
      </a>
      <a href=" ">
        <img
          src={instagramLogo}
          alt="Instagram Logo"
          className="w-15 h-15 hover:scale-95 ease-in transition-all duration-75"
        />
      </a>
      <a href="https://www.linkedin.com/in/bhargav-pasupulati-6b280b28b/">
        <img
          src={linkedinLogo}
          alt="LinkedIn Logo"
          className="w-15 h-15 hover:scale-95 ease-in transition-all duration-75"
        />
      </a>
    </div>
  );
};

export default LogoSection;
