import React from "react";
import { Window } from "../utils/Window";
import { projects } from "../constants";
import { FaGithub, FaKaggle } from "react-icons/fa";
import { HorizontalScroll } from "../utils/HorizontalScroll";

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
    <HorizontalScroll>
      {projects.map((project) => (
        <li>
          <ProjectCard project={project} />
        </li>
      ))}
    </HorizontalScroll>
  );
};

// project card comp
const ProjectCard = ({ project }) => {
  return (
    <Window>
      <div className="w-[250px] sm:w-[300px] h-[500px] mt-2 overflow-y-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-w-[2px]">
        {project.img !== null ? (
          <div className="py-2 ">
            <img src={project.img} alt={project.title} />
          </div>
        ) : null}
        <p className="text-xl sm:text-2xl font-bold py-1">{project.title}</p>
        <p className="text-md sm:text-lg font-bold py-1">{project.date}</p>

        <div className="flex flex-wrap">
          <span className="text-[#f6c600]">[</span>
          {project.tech.map((tech) => (
            <div>
              <span className="text-[#85bbdd]">"{tech}"</span>,
            </div>
          ))}
          <span className="text-[#f6c600]">]</span>
        </div>

        <p className="text-md py-1">{project.description}</p>
        <div className="flex justify-center gap-3 pt-5">
          {project.github !== undefined ? (
            <a href={project.github}>
              <FaGithub className="hover:animate-bounce bg-gray-600 rounded-full p-2 w-12 h-12" />
            </a>
          ) : null}
          {project.kaggle !== undefined ? (
            <a href={project.kaggle}>
              <FaKaggle className="hover:animate-bounce bg-[#4abfff] rounded-full p-2 w-12 h-12" />
            </a>
          ) : null}
        </div>
      </div>
    </Window>
  );
};
