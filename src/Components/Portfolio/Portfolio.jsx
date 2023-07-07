import React from 'react';
import toys from '../../assests/portfolio/toys.png'
import food from '../../assests/portfolio/foodmood.png'
import career from '../../assests/portfolio/career.png'
import summmer from '../../assests/portfolio/summer-camp.png'
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: summmer,
            demo: 'https://summer-camp-22a7d.web.app',
            code: 'https://github.com/mikabir76/summer-camp-client'
        },
        {
            id: 2,
            src: toys,
            demo: 'https://toys-shop-38e13.web.app',
            code: 'https://github.com/mikabir76/toys-market-client'
        },
        {
            id: 3,
            src: career,
            demo: 'https://chimerical-rugelach-75cddc.netlify.app/',
            code: 'https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-mikabir76'
        },
        {
            id: 4,
            src: food,
            demo: 'https://chef-recipe-hunter-e4e58.web.app/',
            code: 'https://github.com/mikabir76/chef-recipe-client'
        },

    ]
    return (
        <div name="Portfolio" className='text-white pt-24 w-full md:h-screen pb-24'> 
            <div className='max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full '>
                <div className='pb-8'>
                    <p className='text-5xl text-center font-bold border-b-4 border-gray-500 inline'>Portfolio</p>
                    <p className='text-xl py-6'>Chek out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    <div className='shadow-lg shadow-gray-600 rounded-lg'>
                        <img className='w-72 flex mx-auto rounded-md hover:scale-105 h-[450px] duration-300' src={summmer} alt="" />
                        <div className='flex items-center justify-center'>
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 me-16 rounded-lg font-semibold w-1/2 m-4 hover:scale-105 duration-300'><a href="https://summer-camp-22a7d.web.app" target='_blank'>Demo</a></button>
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 me-16 rounded-lg font-semibold w-1/2 m-4 hover:scale-105 duration-300'><a href="https://github.com/mikabir76/summer-camp-client" target='_blank'>Code</a></button>
                        </div>
                    </div>
                    <div className='shadow-lg shadow-gray-600 rounded-lg'>
                        <img className='w-72 flex mx-auto rounded-md h-[450px] hover:scale-105 duration-300' src={food} alt="" />
                        <div className='flex items-center justify-center'>
                            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 me-16 rounded-lg font-semibold w-1/2 m-4 hover:scale-105 duration-300'><a href="https://chef-recipe-hunter-e4e58.web.app/" target='_blank'>Demo</a></button>
                            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 me-16 rounded-lg font-semibold w-1/2 m-4 hover:scale-105 duration-300'><a href="https://github.com/mikabir76/chef-recipe-client" target='_blank'>Code</a></button>
                        </div>
                    </div>
                    <div className='shadow-lg shadow-gray-600 rounded-lg'>
                        <img className='w-72 flex mx-auto rounded-md hover:scale-105 duration-300 h-[450px]' src={career} alt="" />
                        <div className='flex items-center justify-center'>
                        <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 me-16 rounded-lg font-semibold w-1/2 m-4 hover:scale-105 duration-300'><a href="https://chimerical-rugelach-75cddc.netlify.app/" target='_blank'>Demo</a></button>
                            <button className='bg-gradient-to-r from-cyan-500 to-blue-500 py-3 px-8 me-16 rounded-lg font-semibold w-1/2 m-4 hover:scale-105 duration-300'><a href="https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-mikabir76" target='_blank'>Code</a></button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Portfolio;