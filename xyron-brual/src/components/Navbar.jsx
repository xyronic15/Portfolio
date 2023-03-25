import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  let Links = [
    { name: "Home" },
    { name: "About" },
    { name: "Skills" },
    { name: "Projects" },
    { name: "Certifications" },
    { name: "Contacts" },
  ];

  // open/closed state for mobile users
  let [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full shadow-md top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-[#04060d] py-4 md:px-10 px-7 text-gray-50">
        {/* logo/name */}
        <div className="uppercase font-bold text-xl cursor-pointer py-2 ">
          Xyron Brual
        </div>

        {/* main menu */}
        <div>
          <ul className={`md:flex md:items-center ${!open ? 'hidden': 'mt-2'}`}>
            {Links.map((link) => (
              <li className="text-gray-400 cursor-pointer rounded-md px-3 py-2 hover:bg-[#0f1631] hover:font-medium hover:text-gray-50">
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
    </div>
  );
};
