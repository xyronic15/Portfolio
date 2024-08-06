
"use client"

import { Link } from "react-scroll";
import { AiFillFileText, AiOutlineArrowRight } from "react-icons/ai";

export const Home = () => {
    const introText =
        "I am a highly motivated and results-driven graduate with a Bachelors in Software Engineering. With a strong passion for web development, machine learning and data analysis I thrive in fast-paced and challenging environments, constantly seeking new opportunities to learn and grow.";
    return (
        <section
            name="Home"
            className="relative w-full h-screen bg-[#151928] rounded-3xl border-2 border-[#22272d] shadow-lg shadow-[#151928] z-[49]"
        >
            <div className="max-w-screen-lg mx-auto px-8 flex flex-col justify-center h-full">
                <p className="sm:text-lg text-white">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">
                    Xyron Brual
                </h1>
                <h2 className="text-4xl sm:text-6xl font-bold text-white">
                    I&apos;m a <span className="text-[#f6c600] font-['Consolas']">[</span>
                    <span className="text-[#83c1ff] font-['Consolas']">Software Engineer</span>
                    <span className="text-[#f6c600] font-['Consolas']">]</span>
                </h2>

                <p className="sm:text-lg text-gray-200">{introText}</p>

                <div className="flex sm:flex-row flex-col gap-3 sm:gap-7 pt-4">
                    <Link
                        to="About"
                        className='flex flex-row bg-transparent text-white sm:text-md md:text-lg py-2 px-4 border-2 border-white w-fit hover:bg-white hover:text-black ease-in-out duration-500'
                    >
                        Continue &nbsp;<AiOutlineArrowRight className="h-full" />
                    </Link>

                    <a
                        href="/files/Xyron Brual - Full Resume.pdf"
                        className='flex flex-row bg-white text-black sm:text-md md:text-lg py-2 px-4 border-2 border-white w-fit hover:bg-transparent hover:text-white ease-in-out duration-500'
                    >
                        <AiFillFileText className="h-full" />&nbsp;My CV
                    </a>
                </div>
            </div>
        </section>
    );
};
