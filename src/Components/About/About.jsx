import React from 'react';
import kabir from '../../assests/kabir-about.jpg'
const About = () => {
    return (
        <div name="About" className='text-white h-screen pt-24 w-full bg-gradient-to-l from-gray-800 via-black to-black'>
            <div className='max-w-screen-xl mx-auto flex flex-col justify-center w-full'>
                <div className='pb-8'>
                    <p className='text-5xl text-center font-bold border-b-4 border-gray-500 inline '>About me</p>
                    </div>
                   <div className='grid grid-cols-2'>
                    <div className='w-[30%]'>
                        <img className='w-full hidden md:block md:w-60 backdrop-blur-lg border-8 border-gray-500' src={kabir} alt="" />
                    </div>
                    <div className='w-full'>
                    <p>I am Mirajul Islam Kabir, I am a student. I am studying B.A Deegre at Govt. Dohar Nawabganj College. I started learning basic front end development from W3 school by my own interest. Then I also took an online course provided by Programming Hero to expand my knowledge in this field. One of my strengths is my ability to communicate and collaborate effectively with others. I enjoy working as part of a team and I'm always willing to learn new things. Additionally, I have skills in graphic design and Facebook marketing. When it comes to graphic design, I can create attractive and user-friendly designs for websites and other digital media. As for Facebook marketing, I know how to promote products and services, engage with the target audience, and analyze marketing campaigns for better results.</p>
                    </div>
                   </div>
                    <br />
                    
               
            </div>
        </div>
    );
};

export default About;