import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link} from 'react-scroll'
const NavBar = () => {
    const [nav, setNav] = useState(false)
    const navInfo = [
        {id: 1,
        link: 'Home'
        },
        {id: 2,
        link: 'About'
        },
        {id: 3,
        link: 'Portfolio'
        },
        {id: 4,
        link: 'Experience'
        },
        {id: 5,
        link: 'Contact'
        },
    ]
    return (
        <div className='flex justify-between items-center fixed backdrop-blur-lg z-10 w-full px-5 h-20 max-w-7xl md:border-b-2 border-gray-500'>
            <div className='text-5xl text-white'>
                Mi Kabir
            </div>
            <ul className='hidden md:flex text-white'>
                {
                    navInfo.map(({id, link}) => <li key={id} className='pl-5 cursor-pointer hover:scale-105 duration-200 font-bold'>
                        <Link to={link} smooth duration={1000}>{link}</Link></li>)
                }
            </ul>
            <div onClick={()=> setNav(!nav)} className='text-white text-4xl md:hidden z-10'>
               {
                nav? <FaTimes> </FaTimes> : <FaBars></FaBars>
               }
</div>
{
                    nav && (
                        <ul className='md:hidden flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-l from-black via-black to-black'>
                {
                    navInfo.map(({id, link}) => <li key={id} className='px-5 text-white py-5 text-3xl cursor-pointer hover:scale-105 duration-200 font-bold'><Link onClick={()=> setNav(!nav)} to={link} smooth duration={1000}>{link}</Link></li>)
                }
            </ul>
                    )
                }
            
        </div>
    );
};

export default NavBar;