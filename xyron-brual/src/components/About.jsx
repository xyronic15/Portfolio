import React from "react";
import { BiBrain, BiScatterChart } from "react-icons/bi";
import { BsWindowStack } from "react-icons/bs";
import { RiSwordFill } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { GiCookingPot } from "react-icons/gi";
import { MdDraw } from "react-icons/md";
import { CgGym } from "react-icons/cg";

export const About = () => {
  return (
    <div
      name="About"
      className="relative w-full text-white py-20 font-['Consolas']"
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto px-8">
        <div className="max-w-screen-lg  w-full grid sm:grid-cols-3 sm:gap-8 drop-shadow-xl">
          <div className="sm:text-right py-4 pl-4 col-span-1">
            <p className="text-3xl sm:text-4xl font-bold inline border-b-4 border-[#2e9cca]">
              About
            </p>
          </div>

          <div className="col-span-2"></div>

          <LeftSection text="I graduated from" />
          <RightSection text="Ontario tech University" />

          <LeftSection text="Interests" />
          <MultiSection
            items={[
              <Item icon={<BsWindowStack />} text="Full Stack Development" />,
              <Item icon={<BiBrain />} text="Machine Learning" />,
              <Item icon={<BiScatterChart />} text="Data Analysis" />,
              <Item icon={<RiSwordFill />} text="Game Development" />,
            ]}
          />

          <LeftSection text="Hobbies" />
          <MultiSection
            items={[
              <Item icon={<IoGameController />} text="Gaming" />,
              <Item icon={<GiCookingPot />} text="Cooking" />,
              <Item icon={<MdDraw />} text="Drawing" />,
              <Item icon={<CgGym />} text="Working out" />,
            ]}
          />

          {/* <LeftSection text="Goals" />
          <div className="px-4 pb-4 sm:p-2 sm:text-3xl text-2xl col-span-2">
            <ul>
              <li>Goal 1</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const LeftSection = ({ text }) => {
  return (
    <div className="sm:text-right sm:text-2xl text-xxl font-bold px-4 sm:p-2 col-span-1">
      <p>{text}</p>
    </div>
  );
};

const RightSection = ({ text }) => {
  return (
    <div className="px-4 pb-4 sm:p-2 sm:text-2xl text-xl col-span-2">
      <p>{text}</p>
    </div>
  );
};

const MultiSection = ({ items }) => {
  return (
    <div className="px-4 pb-4 sm:p-2 sm:text-2xl text-xl w-full grid sm:grid-cols-2 col-span-2">
      {items}
    </div>
  );
};

const Item = ({ icon, text }) => {
  return (
    <div className="sm:text-2xl text-xl w-full flex sm:grid sm:grid-cols-1 sm:place-items-center sm:pb-5 py-2 sm:text-center">
      <div className="sm:text-6xl">{icon}</div>
      {text}
    </div>
  );
};