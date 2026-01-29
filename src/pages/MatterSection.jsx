import LogoSection from "../Logos/LogoSection";
import Resume from "../assets/BhargavResume.pdf";

const MatterSection = () => {
  return (
    <div className="  w-full flex  flex-col   justify-around items-center h-fit">
      <div className=" w-full md:w-3/4  flex-col m-4 md:m-7 gap-10 justify-self-center flex justify-center">
        <h1 className="text-lg md:text-xl lg:text-2xl fadeAnimation font-medium  text-center leading-relaxed text-gray-500 px-4">
          A passinated{" "}
          <span className="font-extralight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[rgb(230,145,230)]">
            Frontend - Developer
          </span>
          with a knack for creating seamless user journeys and solving complex
          design challenges through elegant code
        </h1>
        <div className="flex justify-center w-fit items-center self-center md:self-start ">
          <LogoSection />
          <a href={Resume} download>
            <button
              type="submit"
              className="bg-white text-black text-xl fadeAnimation rounded-xl md:p-3 p-2   font-medium hover:bg-purple-300 active:scale-95  hover:translate-y-[-10px] transition-all duration-300 ease-in-out"
            >
              Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MatterSection;
