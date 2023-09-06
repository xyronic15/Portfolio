"use client"

import React from 'react'
import { Link } from "react-scroll";
import { Links, socials } from "../constants"
import { AiFillFileText } from "react-icons/ai";

export const Footer = () => {

    return (
        <footer
            className="w-full shadow-md border-t-[1px] border-[#22272d]"
        >
            <div className="flex flex-col justify-center items-center w-full h-full mx-auto px-8 bg-[#010409] py-10">

                {/* Links and info */}
                <div className='w-full flex md:flex-row flex-col justify-around pb-10 border-[#22272d] border-b-[1px] gap-4'>
                    <div className='flex flex-col align-top w-1/4'>
                        <p className='text-md text-gray-400'>
                            @xyron.brual@gmail.com
                        </p>
                        <p className='text-md text-gray-400'>
                            +1 (905) 242-2946
                        </p>
                    </div>

                    <div className='flex flex-col align-top w-1/4'>
                        <h5 className='text-md text-gray-50 mb-1'>
                            Jump to
                        </h5>
                        {Links.map((link, index) => (
                            <p key={index} className='text-md text-gray-400 hover:text-gray-50'>
                                <Link to={link.name} smooth={true} duration={500} className="">
                                    {link.name}
                                </Link>
                            </p>
                        ))}
                    </div>

                    <div className='flex flex-col align-top w-1/4'>
                        <h5 className='text-md text-gray-50 mb-1'>
                            Reach out
                        </h5>
                        {socials.map((social, index) => (
                            <a key={index} className='flex flex-row text-md text-gray-400 hover:text-gray-50 py-1' href={social.link}>
                                {social.footerIcon} &nbsp;
                                {social.name}
                            </a>
                        ))}
                    </div>

                    <div className='flex flex-col align-top w-1/4'>
                        <a href="/files/Xyron Brual - Full Resume.pdf" className='flex flex-row text-md text-gray-400 hover:text-gray-50 py-1'>
                            <AiFillFileText className='w-6 h-6' /> &nbsp;
                            My Resume
                        </a>
                    </div>

                </div>

                <div className='w-full flex justify-center items-center pt-10'>
                    <p className='text-md text-gray-400'>
                        &quot;Perfection is impossible; just strive to do your best.&quot;
                    </p>
                </div>

            </div>
        </footer>

    )
}