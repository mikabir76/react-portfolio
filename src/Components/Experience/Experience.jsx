import React from 'react';
import html from "../../assests/experience/html.png";
import css from '../../assests/experience/css.png';
import js from '../../assests/experience/js.png';
import react from '../../assests/experience/react.png';
import node from '../../assests/experience/node.png';
import express from '../../assests/experience/express.png';
import mongodb from '../../assests/experience/mongojpg.jpg';
import firebase from '../../assests/experience/firebase.png';
import ps from '../../assests/experience/ps.png';
import ai from '../../assests/experience/ai.png';
import github from '../../assests/experience/github.png';
import figma from '../../assests/experience/figma.png';
import tailwind from '../../assests/experience/tailwind.png';
import bootstrap from '../../assests/experience/bootstrapjpg.jpg';
const Experience = () => {

    const technologies = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-blue-600'
        },
        {
            id: 4,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 5,
            src: js,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: react,
            title: 'React',
            style: 'shadow-cyan-500'
        },
        {
            id: 7,
            src: node,
            title: 'Node JS',
            style: 'shadow-green-500'
        },
        {
            id: 8,
            src: express,
            title: 'Express JS',
            style: 'shadow-yellow-400'
        },
        {
            id: 9,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-green-400'
        },
        {
            id: 10,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-yellow-600'
        },
        {
            id: 11,
            src: github,
            title: 'Github',
            style: 'shadow-gray-500'
        },
        {
            id: 12,
            src: figma,
            title: 'Figma',
            style: 'shadow-blue-300'
        },
        {
            id: 13,
            src: ps,
            title: 'Photoshop CC',
            style: 'shadow-blue-600'
        },
        {
            id: 14,
            src: ai,
            title: 'Adobe Illustrator',
            style: 'shadow-orange-500'
        },
    ]
    return (
        <div name="Experience" className='text-white pt-24 h-full bg-gradient-to-l from-gray-800 via-black to-black'>
           <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full '>
            <div>
                <p className='text-5xl text-center font-bold border-b-4 border-gray-500 inline pt-8'>Experience</p>
                <p className='text-xl py-6'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    technologies.map(({id, src, title, style})=>(
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} className='bg-transparent w-20 mx-auto' alt="" />
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
            </div>
           </div> 
        </div>
    );
};

export default Experience;