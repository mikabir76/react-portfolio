import React from 'react';

const Contact = () => {
    return (
        <div name="Contact" className='text-white h-screen w-full bg-gradient-to-l from-gray-800 via-black to-black p-4'>
            <div className='max-w-7xl mx-auto flex flex-col p-4 justify-center h-full'>
                <div className='pb-8'>
                    <p className='text-5xl text-center font-bold border-b-4 border-gray-500 inline pt-8'>Contact</p>
                    <p className='text-xl py-6'>Submit the form below to get in touch with me!</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/e0939947-9c19-4eb9-85bb-82c1d814c2ae" method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="text" name='email' placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-6 my-8 rounded-lg hover:scale-110 duration-300 font-semibold mx-auto flex items-center '>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;