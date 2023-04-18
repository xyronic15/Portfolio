import React from "react";
import { Window } from "./Window";
import { projects } from "../constants";

// const projects = [
//   {
//     date: "2019",
//     title: "Project 1",
//     description: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet",
//   },
//   {
//     date: "April 2023",
//     title: "Floppy Bird",
//     description: "Consectetur adipiscing elit",
//     img: "../imgs/projects/floppy_bird.png"
//   },
//   {
//     date: "2021",
//     title: "Project 3",
//     description: "Sed do eiusmod tempor incididunt",
//   },
//   { date: "2022", title: "Project 4", description: "Ut enim ad minim veniam" },
//   {
//     date: "2023",
//     title: "Project 5",
//     description: "Duis aute irure dolor in reprehenderit",
//   },
//   {
//     date: "2024",
//     title: "Project 6",
//     description: "Excepteur sint occaecat cupidatat non proident",
//   },
//   // {
//   //   date: "2019",
//   //   title: "Project 1",
//   //   description: "Lorem ipsum dolor sit amet",
//   // },
//   // {
//   //   date: "2020",
//   //   title: "Project 2",
//   //   description: "Consectetur adipiscing elit",
//   // },
//   // {
//   //   date: "2021",
//   //   title: "Project 3",
//   //   description: "Sed do eiusmod tempor incididunt",
//   // },
//   // { date: "2022", title: "Project 4", description: "Ut enim ad minim veniam" },
//   // {
//   //   date: "2023",
//   //   title: "Project 5",
//   //   description: "Duis aute irure dolor in reprehenderit",
//   // },
//   // {
//   //   date: "2024",
//   //   title: "Project 6",
//   //   description: "Excepteur sint occaecat cupidatat non proident",
//   // },
// ];

export const Projects = () => {
  return (
    <div
      name="Projects"
      className="relative w-full text-white py-20 font-['Consolas']"
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto px-8">
        <div className="max-w-screen-xl w-full py-4 pl-4">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#22272d]">
            Projects
          </p>
        </div>

        <ProjectTimeline />
      </div>
    </div>
  );
};

// timeline component
const ProjectTimeline = () => {
  return (
    <div className="max-w-screen-xl w-full">
      <ul className="flex flew-row gap-5 py-4 overflow-y-auto scrollbar scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-h-[2px]">
        {projects.map((project) => (
          <li>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// project card comp
const ProjectCard = ({ project }) => {
  return (
    // <div className="w-full flex justify-center mx-4">
    <Window>
      <div className="w-[300px] h-[500px] mt-2 overflow-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-w-[2px]">
        <img src={project.img} alt={project.title} />
        {project.title}
        <br />
        {project.date}
        <br />
        {project.description}
      </div>
    </Window>
    // </div>
  );
};
