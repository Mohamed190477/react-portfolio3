import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
            <form action="" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - myemail@gmail.com</p>
                </div>
                <input className='my-4 p-2 outline-none' type="text" placeholder='Your Name' name='name' />
                <input className='my-4 p-2 outline-none' type="text" placeholder='Your Email' name='email' />
                <textarea className='outline-none p-2 my-4' placeholder='Message' name="message" rows="10"></textarea>
                <button className='text-white border-2 hover:bg-pink-600 px-4 py-2 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact