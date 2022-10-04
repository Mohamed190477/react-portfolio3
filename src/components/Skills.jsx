import React from 'react';
import HTML from "../assets/html.png" ;
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import MongoDB from "../assets/mongo.png";
import NodeJS from "../assets/node.png";
import AWS from "../assets/aws.png";
import Firebase from "../assets/firebase.png";
import Github from "../assets/github.png";
import TailWind from "../assets/tailwind.png";
import ReactJS from "../assets/react.png";

const Skills = () => {
    return (
        <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Experience</p>
                    <p className='py-4'>These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={CSS} alt="HTML Icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="HTML Icon" />
                        <p className='my-4'>Java Script</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={MongoDB} alt="HTML Icon" />
                        <p className='my-4'>Mongo DB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={NodeJS} alt="HTML Icon" />
                        <p className='my-4'>Node JS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={AWS} alt="HTML Icon" />
                        <p className='my-4'>AWS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Firebase} alt="HTML Icon" />
                        <p className='my-4'>Firebase</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Github} alt="HTML Icon" />
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={TailWind} alt="HTML Icon" />
                        <p className='my-4'>TailWind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={ReactJS} alt="HTML Icon" />
                        <p className='my-4'>React JS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills