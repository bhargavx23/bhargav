import React from "react";
import { Link } from "react-router-dom";
import ProjectsComponent from "./ProjectsComponent";

const Projectspage = () => {
  setTimeout(() => {
    const backtext = document.querySelector(".BackText ");
    // const mainbg = document.querySelector(".mainbg");
    // mainbg.style.padding = "20px";
    backtext.style.transition = "all .6s ease-in-out";
    backtext.style.opacity = "0";
    backtext.style.zIndex = "-1";
  }, 2000);
  const projects = [
    {
      id: 1,
      title: "INNOV.Ai",
      description:
       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "src/ProjectImages/INNOVAI.png",
      projectUrl: "https://bhargavx23.github.io/INNOV.AI/",
    },
    {
      id: 2,
      title: "Qr Generator",
      description:
       "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "src/ProjectImages/QrGenerator.png",
      projectUrl: "https://bhargavx23.github.io/qr/",
    },
    {
      id: 3,
      title: "Job Portal",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      imageUrl: "src/ProjectImages/jobVerse.png",
      projectUrl: "https://jobversez.netlify.app/",
    },
  ];
  return (
    <ProjectsComponent projects={projects}/>
  );
};

export default Projectspage;
