import React from 'react';
import logo from "../assets/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import { useState } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs"

const Navbar = () => {

    const [isNavShowing, setIsNavShowing] = useState(false);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt="logo" style={{width: "70px", height:"50px"}} />
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* hamburger */}
            <div className='md:hidden z-10'>
                {isNavShowing ? <FaTimes onClick={() => {setIsNavShowing(prev => !prev)}} /> : <FaBars onClick={() => {setIsNavShowing(prev => !prev)}} />}
            </div>
            {/* mobile menu */}
            <ul className={isNavShowing ? ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : ' hidden'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* social icons */}
            <div className='hidden md:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[]60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 p-3'>
                        <a className='flex justify-between items-center w-full text-gray-100 text-xl' href="/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[]60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] p-3'>
                        <a className='flex justify-between items-center w-full text-gray-100 text-xl' href="/">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[]60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] p-3'>
                        <a className='flex justify-between items-center w-full text-gray-100 text-xl' href="/">
                            Mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[]60px flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] p-3'>
                        <a className='flex justify-between items-center w-full text-gray-100 text-xl' href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar