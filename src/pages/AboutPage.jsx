const AboutPage = () => {
  return (
    <div className=" relative md:relative bg-[rgb(13,6,19)] h-screen md:max-h-[90vh]  w-full md:w-full flex  flex-col font-poppins text-white text-4xl p-4 ">
      <div className="  h-full flex items-center justify-center">
        <div className="md:absolute min-h-fit md:min-h-[400px]   grid grid-cols-1 place-items-center md:flex md:justify-center md:items-center  BackFont2 w-full md:left-10 top-50 md:top-10  md:w-3/4 bg-white/10 rounded-lg backdrop-blur-lg shadow-lg border border-white/20 mx-auto p-5 md:p-6">
          <p className="w-full h-fit  text-white text-xl   font-mono  md:text-4xl lg:text-2xl  xl:text-3xl  md:font-mono   fadeAnimation ">
            I'm Bhargav, an enthusiastic aspiring{" "}
            <b>
              <span className="text-[rgb(147,60,197)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:font-bold">
                Frontend developer
              </span>
              with a strong passion for website design. My foundational
              knowledge was built at{" "}
              <span className="text-[rgb(147,60,197)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                DVR & DR.HS MIC College of Technology
              </span>
            </b>
            , where I cultivated a solid understanding of technology and
            problem-solving. I'm eager to translate my creativity and technical
            skills into building visually appealing and user-friendly web
            experiences. I'm always keen to learn new technologies and apply
            them to create impactful solutions.
          </p>
        </div>
      </div>

      <h1 className="absolute md:absolute overflow-y-hidden left-10 text-8xl md:left-10 md:bottom-10  md:text-8xl lg:text-[150px] xl:text-[200px] 2xl:text-[250px] font-bold SlideDownYtoX text-[rgba(124,51,167,0.55)] ">
        ABOUT
      </h1>
      <div>
        <div className=" hidden md:flex md:h-fit SlideDownYtoX md:w-[400px] lg:w-[500px]  md:absolute md:right-100 md:hover:bg-purple-600 duration-1000 transition-all   md:bottom-10 border-4 border-white/30 rounded-4xl md:overflow-hidden shadow-lg backdrop-blur-lg">
          <img
            className=" relative hover:scale-110 md:hover:scale-150 lg:hover:scale-180 transition-all duration-500 ease-in-out scale-100 md:scale-125 lg:scale-150"
            src={
              "https://careerworldedu.com/storage/files/in/1010/thumb-816x460-622073da07a65c4b3e814c9caf2846d2.jpg"
            }
            alt="Image of College"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
