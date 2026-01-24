import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center w-full md:w-full bg-[rgb(14,9,17)] p-4 md:p-6 text-white font-poppins">
        <div className="fadeAnimation ">
          <h1 className="font-semibold text-3xl md:text-4xl lg:text-6xl text-purple-300">
            Portfolio
          </h1>
        </div>
        <div className="hidden md:flex fadeAnimation ml-4 space-x-4 text-xl font-semibold">
          <Link
            className="hover:bg-purple-400 hover:text-white p-2 focus:bg-purple-400 active:scale-90 rounded transition-all ease-in duration-400"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-purple-400 hover:text-white p-2 focus:bg-purple-400 rounded active:scale-90 transition-all ease-in duration-400"
            to="/about"
          >
            About
          </Link>
          <Link
            className="hover:bg-purple-400 hover:text-white p-2 focus:bg-purple-400 rounded active:scale-90 transition-all ease-in duration-400"
            to="/projects"
          >
            Projects
          </Link>
          <Link
            className="hover:bg-purple-400 hover:text-white p-2 focus:bg-purple-400 rounded active:scale-90 transition-all ease-in duration-400"
            to="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`md:hidden absolute fadeAnimation  z-20 px-6 rounded-2xl  right-1   bg-[rgb(14,9,17)] text-white font-poppins border-2 border-purple-400 transition-transform  ease-in-out transform ${isOpen ? "translate-x-0" : "-translate-x-full "} overflow-hidden`}
        >
          <div className="flex flex-col  space-y-2  justify-center items-center m-2 p-4">
            <Link
              className="hover:bg-purple-400 hover:text-white p-2 rounded transition-all ease-in duration-400"
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              className="hover:bg-purple-400 hover:text-white p-2 rounded transition-all ease-in duration-400"
              to="/about"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              className="hover:bg-purple-400 hover:text-white p-2 rounded transition-all ease-in duration-400"
              to="/projects"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              className="hover:bg-purple-400 hover:text-white p-2 rounded transition-all ease-in duration-400"
              to="/contact"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default NavBar;
