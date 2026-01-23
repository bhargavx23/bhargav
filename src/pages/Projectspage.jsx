import React from "react";
import { Link } from "react-router-dom";
import ProjectsComponent from "./ProjectsComponent";
import innovaiImage from "../ProjectImages/INNOVAI.png";
import qrGeneratorImage from "../ProjectImages/QrGenerator.png";
import jobVerseImage from "../ProjectImages/jobVerse.png";

const Projectspage = () => {
  setTimeout(() => {
    const backtext = document.querySelector(".BackText ");

    backtext.style.transition = "all .6s ease-in-out";
    backtext.style.opacity = "0";
    backtext.style.zIndex = "-1";
  }, 2000);
  const projects = [
    {
      id: 1,
      title: "INNOV.Ai",
      description:
        "INNOV.AI is a web-based app that helps users generate innovative startup ideas using AI. Powered by Google's Gemini API, it offers creative suggestions, business plans, taglines, and image generation to fuel your entrepreneurial journey.",
      imageUrl: innovaiImage,
      projectUrl: "https://bhargavx23.github.io/INNOV.AI/",
    },
    {
      id: 2,
      title: "Qr Generator",
      description:
        "A simple QR code generator is perfect for quickly turning any piece of text or link into a scannable QR code without needing to sign up, install anything, or deal with ads and extra features.",
      imageUrl: qrGeneratorImage,
      projectUrl: "https://bhargavx23.github.io/qr/",
    },
    {
      id: 3,
      title: "Job Portal",
      description:
        " A full-stack web application for a job portal, built with the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to register, login, browse job listings, apply for jobs, and administrators to manage jobs, users, and applications.",
      imageUrl: jobVerseImage,
      projectUrl: "https://jobversez.netlify.app/",
    },
  ];
  return <ProjectsComponent projects={projects} />;
};

export default Projectspage;
