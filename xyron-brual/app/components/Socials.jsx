"use client"

import React from 'react'
import { socials } from '../constants'
import { Link } from "react-scroll";
import { HiOutlineMail } from 'react-icons/hi'

export const Socials = () => {
    return (
        <div className='hidden md:flex flex-col top-[35%] left-0 fixed z-50'>
            <ul>
                {socials.map((social) => (
                    <li key={social.name} className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-r-full duration-700 ease-in-out bg-[#151928]'>
                        <a href={social.link} className='flex justify-between items-center w-full text-white'>
                            <>
                                {social.name} {social.icon}
                            </>
                        </a>
                    </li>
                ))}
                <li key="Email" className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-r-full duration-700 ease-in-out bg-[#151928]'>
                    <Link to='Contact' smooth={true} duration={500} className='flex justify-between items-center w-full text-white cursor-pointer'>
                        <>
                            Email <HiOutlineMail className='w-8 h-8' />
                        </>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
