import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeLink,setActiveLink] = useState('home')
    const [visible,setVisible]=useState(false)
    const handleClickLink = (linkname)=>{
        setActiveLink(linkname)
    }
    const toggleVisibility = (current)=>{
        setVisible(!current)
    }
    return (
        <>
        <div className='flex justify-between items-center  shadow '>
            <p className='text-2xl py-2 mx-16 font-bold'>Movies.com</p>
            <div className='flex flex-col justify-end'>
            <FaBars className='md:hidden visible me-16' onClick={()=>toggleVisibility(visible)} />
            <div className={` md:visible  md:flex p-2 hidden`}>
               <Link to="/home"><div className={`text-xl px-4 py-2 ${activeLink ==='home' ? 'font-bold':''}`} onClick={()=>handleClickLink('home')}>Home</div></Link> 
               <Link to="/about"><div className={`text-xl px-4 py-2 ${activeLink ==='about' ? 'font-bold':''}`} onClick={()=>handleClickLink('about')}>About</div></Link>
               <Link to="/contact"><div className={`text-xl py-2 ps-4 me-20 ${activeLink ==='contact' ? 'font-bold':''}`} onClick={()=>handleClickLink('contact')}>Contact</div></Link>
               </div>
            </div>
        </div>
        <div className={` md:hidden  ${visible===true ?'visible flex flex-col w-full justify-end p-2':'hidden'}`}>
        <Link to="/home"><div className={`text-xl px-4 py-2 text-end ${activeLink ==='home' ? 'font-bold':''}`} onClick={()=>handleClickLink('home')}>Home</div></Link> 
        <Link to="/about"><div className={`text-xl px-4 py-2 text-end ${activeLink ==='about' ? 'font-bold':''}`} onClick={()=>handleClickLink('about')}>About</div></Link>
        <Link to="/contact"><div className={`text-xl py-2  px-4 text-end ${activeLink ==='contact' ? 'font-bold':''}`} onClick={()=>handleClickLink('contact')}>Contact</div></Link>
        </div>
        </>
    );
};

export default Navbar;