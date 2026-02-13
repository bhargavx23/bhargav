import TopSection from "./TopSection.jsx";
import MatterSection from "./MatterSection.jsx";

const Home = () => {
  return (
    <div>
      <div className="  realtive bg-[rgb(14,9,17)] md:bg-[rgba(14,9,17,0.55)] items-center z-20  m-0  min-h-[95vh] md:max-h-[90vh]  w-full flex justify-center flex-col font-[poppins] text-white text-4xl ">
        <TopSection />
        <MatterSection />
        <div className=" md:absolute  hidden  md:h-full md:w-full   md:bg-[rgb(14,9,17)] md:flex md:justify-center md:items-center   md:overflow-y-hidden md:-z-10 md:font-bold ">
          <h1 className=" left-0 top-2 absolute overflow-hidden font-[poppins] SlideDownXtoY text-6xl md:text-[400px] lg:text-[400px] xl:text-[340px]  text-[rgba(71,36,92,0.65)] ">
            FRONT
            <br />
          </h1>
          <span className="right-0 bottom-10 absolute SlideDownYtoX font-[poppins] text-6xl md:text-[400px] lg:text[400px] xl:text-[340px] text-[rgba(71,36,92,0.64)]">
            END
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
