import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import {PiDownloadSimpleBold} from 'react-icons/pi'
import banner from '../../../../public/kabir.png'
import CV from '../../../assests/cv.pdf'
const Banner = () => {
    
    return (
        <div name="Home" className='text-white pt-24 w-full h-screen'>
           <div className='max-w-screen-xl  mx-auto flex flex-col items-center justify-center px-4 md:flex-row'>
            <div className='w-1/2 flex flex-col justify-center space-y-2'>
                <p>Hello, I am </p>
                <h1 className='text-2xl'>Mirajul Islam Kabir</h1>
               <span className='text-4xl'>
               <Typewriter
            words={['MERN stack Developer', 'Web Developer', 'Web Designer', 'Graphics Designer']}
            loop
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />

               </span>
               
                <p className='text-gray-500 max-w-md text-justify'>Welcome to my portfolio! I'm a dedicated web developer passionate about crafting engaging and innovative digital experiences. From designing stunning user interfaces to implementing robust back-end solutions, I thrive on turning ideas into reality. Explore my work and let's embark on a journey of creativity and excellence together.</p>
                <div className='flex'>
                    <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 me-16 rounded-lg font-semibold'><a href={CV} className='flex justify-center items-center' target='_blank' download={true}> Resume <span className='px-1'><PiDownloadSimpleBold></PiDownloadSimpleBold></span></a></button>
                    {/* <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 rounded-lg font-semibold'><Link to='link'>Portfolio</Link> <span className='px-1'></span></button> */}
                </div>
            </div>
            <div className=''>
            <div className="avatar ">
  <div className="">
    <img className='rounded-2xl mx-auto w-2/3 md:w-full' src={banner} />
  </div>
</div>
            </div>
           </div>
        </div>
    );
};

export default Banner;