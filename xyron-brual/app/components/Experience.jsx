"use client"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { Window } from "./utils/Window";

export const Experience = () => {
    return (
        <section
            name="Experience"
            className="relative w-full text-white py-20">
            <div className="flex flex-col justify-center items-center w-full h-full mx-auto px-8">
                <div className="max-w-screen-xl w-full py-4 pl-4">
                    <h3 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#22272d]">
                        Experience
                    </h3>
                </div>

                <ExperienceTimeline />
            </div>
        </section>
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
            iconStyle={{
                background: "rgba(255,255,255,255)",
                // height: "20px",
                // width: "20px",
                // align: "center"
            }}
            contentArrowStyle={{ borderRight: "10px solid" }}
        >
            <Window>
                <div className="w-60 md:w-96 mt-2">
                    <h4 className="!text-xl sm:!text-2xl !font-bold !py-1 !m-0">
                        {experience.title}
                    </h4>
                    <p className="!text-base sm:!text-lg !font-bold !py-1 !m-0">
                        {experience.company}
                    </p>
                    <p className="!text-base sm:!text-lg !font-bold !py-1 !m-0 !block xl:!hidden">
                        {experience.date}
                    </p>
                    <ul className="py-1 list-disc list-inside">
                        {experience.description.map((description, index) => (
                            <li className="text-base" key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
            </Window>
        </VerticalTimelineElement>
    );
};
