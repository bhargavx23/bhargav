import reacticon from "../Logos/Icons/reacticon.png";
import html from "../Logos/Icons/html5.svg";
import css from "../Logos/Icons/css3.svg";
import Nodejs from "../Logos/Icons/nodejs.png";
import mongodb from "../Logos/Icons/mongodb.png";
import python from "../Logos/Icons/python.svg";
import tailwindcssicon from "../Logos/Icons/tailwindcss.png";
import expressjsicon from "../Logos/Icons/expressjs.png";
import fluttericon from "../Logos/Icons/fluttericon.png";

const AboutPage = () => {
  const Skillicons = [
    {
      icons: mongodb,
      name: "MongoDB",
    },
    {
      icons: expressjsicon,
      name: "Express.js",
    },
    {
      icons: reacticon,
      name: "React",
    },
    {
      icons: Nodejs,
      name: "Nodejs",
    },
    {
      icons: tailwindcssicon,
      name: "Tailwind",
    },
    {
      icons: html,
      name: "HTML",
    },
    {
      icons: css,
      name: "CSS",
    },
    {
      icons: python,
      name: "Python",
    },
    {
      icons: fluttericon,
      name: "flutter",
    },
  ];
  return (
    <div className="md:flex sm:grid-cols-1    md:place-items-center grid-cols-1  md:p-2  p-3  md:items-center w-full   h-fit  md:h-[89vh] bg-[rgb(13,6,19)] ">
      <div className=" relative md:relative  bg-[hsl(272,52%,5%)]  h-screen md:h-full md:flex md:justify-center items-center  w-full md:w-3/4 flex  flex-col font-poppins text-white text-xl  ">
        <div className="  min-h-full  md:h-full  flex items-center justify-center">
          <div className="md:absolute  md:min-h-fit lg:min-h-fit max-h-[400px] grid grid-cols-1 place-items-center md:flex md:justify-center md:items-center  BackFont2 w-full md:left-10 top-50 md:top-10  md:w-[90%] bg-white/10 rounded-lg backdrop-blur-lg shadow-lg border border-white/20  p-3 ">
            <p className="w-full h-fit  text-white  text-sm  font-mono  md:text-2xl lg:text-xl  xl:text-xl  md:font-mono   fadeAnimation p-2 ">
              I'm Bhargav, an enthusiastic aspiring{" "}
              <b>
                <span className="text-[rgb(147,60,197)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold md:font-bold">
                  Frontend developer{" "}
                </span>
                with a strong passion for website design. My foundational
                knowledge was built at{" "}
                <span className="text-[rgb(147,60,197)] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  DVR & DR.HS MIC College of Technology
                </span>
              </b>
              , where I cultivated a solid understanding of technology and
              problem-solving. I'm eager to translate my creativity and
              technical skills into building visually appealing and
              user-friendly web experiences. I'm always keen to learn new
              technologies and apply them to create impactful solutions.
            </p>
          </div>
        </div>

        <h1 className="absolute md:absolute   text-8xl md:left-10 md:bottom-10   md:text-[170px]  font-bold SlideDownYtoX text-[rgba(124,51,167,0.55)] ">
          ABOUT
        </h1>
      </div>
      <div className="min-h-[500px] relative border-2  md:flex md:h-[90%] flex  bg-[rgb(121,53,181)] p-2 BaxkFont2  rounded-2xl md:items-end md:w-1/3 items-center justify-center w-full ">
        <div className="w-full grid grid-cols-3 place-items-center md:grid-cols-3 md:w-full min-h-[400px] bg-purple-900  md:h-3/4 z-10 rounded-2xl">
          {Skillicons.map((e, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col items-center bg-purple-700 overflow-hidden hover:scale-105 transition-all duration-300 md:py-3 md:px-5 p-3 rounded-3xl"
              >
                <img
                  src={e.icons}
                  className="md:h-[60px] h-[50px] SlideDownYtoX"
                  alt={e.name}
                />
                <p className="text-white SlideDownYtoX ">{e.name}</p>
              </div>
            );
          })}
        </div>
        <h1 className="   absolute  md:flex md:absolute -top-30  text-8xl md:top-10 md:text-black/50 md:text-[100px]  font-bold SlideDownYtoX z-1 text-[rgba(124,51,167,0.55)] ">
          SKILLS
        </h1>
      </div>
    </div>
  );
};

export default AboutPage;
