import React from "react";
import { languages, technologies } from "../constants";
import { Window } from "./Window";

export const Skills = () => {
  return (
    <div
      name="Skills"
      className="relative w-full text-white py-20 font-['Consolas']"
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto px-8">
        <div className="max-w-screen-xl w-full py-4 pl-4">
          <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#22272d]">
            Skills
          </p>
        </div>

        <Window>
          {/* List out the languages */}
          <ArrayComp title={"languages"} arr={languages} />

          {/* List out the technologies*/}
          <ArrayComp title={"technologies"} arr={technologies} />
        </Window>
      </div>
    </div>
  );
};

const ArrayComp = ({ title, arr }) => {
  return (
    <div>
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row pt-4 pl-4 sm:text-2xl text-xl">
        <div className="basis-1/5 italic text-[#83c1ff]">
          <span className="text-white">{title}</span> =
        </div>
        <div className="basis-1/5 italic">
          <span className="text-[#f6c600]">[</span>
        </div>
      </div>
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row pl-4 sm:text-2xl text-xl">
        <div className="basis-1/12"></div>
        <div className="basis-11/12">
          <div className="flex flex-row flex-wrap gap-2">
            {arr.map((item) => (
              <div>
                <span className="text-[#85bbdd]">"{item}"</span>,
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row pb-4 pl-4 sm:text-2xl text-xl">
        <div className="italic text-[#f6c600] basis-1/5">]</div>
      </div>
    </div>
  );
};
