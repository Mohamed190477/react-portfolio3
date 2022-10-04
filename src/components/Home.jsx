import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]' >
            <div className='max-w-[1000px] mx-auto pt-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Clint Briely</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm A Full Stack Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid doloremque recusandae quisquam perspiciatis autem minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis blanditiis, enim quia deleniti eius cumque?</p>
                <div>
                    <button className='text-white group border-2 w-[170px] px-6 py-2 flex items-center justify-center gap-2 hover:bg-pink-600 duration-300'> <span>View Work</span> <span> <HiArrowNarrowRight className='group-hover:rotate-90 duration-300' /> </span></button>
                </div>
            </div>
        </div>
    )
}

export default Home