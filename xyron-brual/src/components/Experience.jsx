import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { Window } from "../utils/Window";

export const Experience = () => {
  return (
    <div
      name="Experience"
      className="relative w-full text-white py-20 font-['Consolas']"
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto px-8">
        <div className="max-w-screen-xl w-full py-4 pl-4">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#22272d]">
            Experience
          </p>
        </div>

        <ExperienceTimeline />
      </div>
    </div>
  );
};

const ExperienceTimeline = () => {
  return (
    <div className="max-w-screen-xl w-full flex flex-col">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

const ExperienceCard = ({ key, experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(0,0,0,0)",
        boxShadow: "none",
        padding: 0,
        justifyContent: "center",
        display: "flex",
      }}
      date={experience.date}
      dateClassName={'!hidden xl:!inline-block'}
      iconStyle={{ background: "rgba(0,0,0,0)" }}
      contentArrowStyle={{ borderRight: "10px solid" }}
    >
      <Window>
        <div className="w-60 md:w-96 mt-2">
          <p className="!text-xl sm:!text-2xl !font-bold !py-1 !m-0">
            {experience.title}
          </p>
          <p className="!text-base sm:!text-lg !font-bold !py-1 !m-0">
            {experience.company}
          </p>
          <p className="!text-base sm:!text-lg !font-bold !py-1 !m-0 !block xl:!hidden">
            {experience.date}
          </p>
          <ul className="py-1 list-disc list-inside">
            {experience.description.map((description) => (
              <li className="text-base">{description}</li>
            ))}
          </ul>
        </div>
      </Window>
    </VerticalTimelineElement>
  );
};
