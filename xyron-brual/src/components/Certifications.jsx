import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { certifications } from "../constants";
import { HorizontalScroll } from "./HorizontalScroll";
import { Window } from "./Window";

export const Certifications = () => {
  return (
    <div
      name="Certifications"
      className="relative w-full text-white py-20 font-['Consolas']"
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto px-8">
        <div className="max-w-screen-xl w-full py-4 pl-4">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#22272d]">
            Certifications
          </p>
        </div>

        <CertificationTimeline />
      </div>
    </div>
  );
};

// timeline component
const CertificationTimeline = () => {
  return (
    <HorizontalScroll>
      {certifications.map((certification) => (
        <li>
          <CertificationCard cert={certification} />
        </li>
      ))}
    </HorizontalScroll>
  );
};

const CertificationCard = ({ cert }) => {
  return (
    <Window>
      <div className="w-[250px] sm:w-[300px] h-[200px] mt-2 overflow-y-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-thumb-rounded-full scrollbar-w-[2px]">
        <p className="text-xl sm:text-2xl font-bold py-1">{cert.name}</p>
        <p className="text-md sm:text-lg font-bold py-1">{cert.date}</p>
        <p className="text-md py-1">{cert.org}</p>
        <a
          href={cert.url}
          className="flex flex-row p-2 rounded-lg gap-2 bg-[#171b22] border-[#22272d] border-2 w-10 hover:w-52 h-10 overflow-hidden transition-[width] duration-300 hover:ease-in-out mt-3"
        >
          <div className="w-6 h-6">
            <FaExternalLinkAlt className="w-6 h-6" />
          </div>

          <div className="w-48 h-10">
            <p className="text-md">Go to certificate</p>
          </div>
        </a>
      </div>
    </Window>
  );
};
