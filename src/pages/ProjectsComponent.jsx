import { Link } from "react-router-dom";
const ProjectsComponent = ({ projects }) => {
  return (
    <div>
      <div className=" mainbg md: z-1 md:relative flex flex-col  items-center  w-full  py-10 min-h-screen md:min-h-[85vh]   justify-center p-4 bg-[rgb(14,9,17)] md:bg-[rgb(14,9,17)] gap-2 md:grid  md:m-0 md:gap-0 md:place-items-center md:grid-cols-3   md:flex-wrap md:justify-center  ">
        {projects.map((e, idx) => {
          return (
            <div
              key={idx}
              className=" md:h-fit  md:max-w-fit max-w-[480px] min-h-[500px]   md: flex flex-col bg-[rgba(106,3,165,0.94)] rounded-2xl gap-10 m-4 p-4 SlideDownYtoX"
            >
              <h1 className="text-2xl text-white font-medium ">{e.title}</h1>
              <p className="text-xl font-mono  text-white bg-purple-500 p-4 rounded-2xl">
                {e.description}
              </p>
              <div className="w-fit h-fit border-4 rounded-2xl overflow-hidden border-purple-100">
                <img
                  className="  hover:scale-125 bg-center w-full  scale-100  transition-all ease-in-out duration-300"
                  src={e.imageUrl}
                  alt={e.title}
                />
              </div>
              <button className="bg-white flex w-fit p-4 rounded-3xl font-mono active:scale-90 transition-all duration-300   ">
                <Link to={e.projectUrl}>View Project</Link>
              </button>
            </div>
          );
        })}

        <div className=" hidden BackText md:absolute md:min-h-full  md:min-w-full   md:bg-[rgb(14,9,17)] md:flex md:justify-center md:items-center  md:z-300 md:font-bold ">
          <h1 className=" border-2 md:absolute md:top-30 fadeAnimation text-6xl md:text-[250px] bg-purple-500 p-4 rounded-3xltext-[rgba(0,0,0,0.74)]">
            PROJECTS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProjectsComponent;
