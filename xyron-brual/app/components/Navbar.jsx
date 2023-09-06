"use client"

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { Links } from "../constants"

export const Navbar = () => {

    // open/closed state for mobile users
    let [open, setOpen] = useState(false);

    return (
        <header className="fixed w-full shadow-md top-0 left-0 z-50 border-b-[1px] border-[#22272d]">
            <div className="md:flex items-center justify-between bg-[#010409] py-4 md:px-10 px-7 text-gray-50">
                {/* logo/name */}
                <div className="uppercase font-bold text-xl cursor-pointer py-2 ">
                    <Link to="Home" smooth={true} duration={500}>
                        Xyron Brual
                    </Link>
                </div>

                {/* main menu */}
                <div>
                    <ul className={`md:flex md:items-center ${!open ? 'hidden' : 'mt-2'}`}>
                        {Links.map((link) => (
                            <li key={link.name} className="text-gray-400 cursor-pointer px-3 py-2 hover:bg-[#191b22]  hover:text-gray-50 hover:border-b-[1px] border-gray-50">
                                <Link to={link.name} smooth={true} duration={500} className="">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hamburger */}
                <div onClick={() => setOpen(!open)} className="md:hidden z-10 absolute right-8 top-6 cursor-pointer py-2">
                    {!open ? <FaBars /> : <FaTimes />}
                </div>
            </div>
        </header>
    );
};
