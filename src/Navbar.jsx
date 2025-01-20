import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-red-400 shadow'>
            <p className='text-2xl py-2 px-4 font-bold'>Movies.com</p>
            <div className='flex p-2'>
               <Link to="/home"><div className='text-xl p-2'>Home</div></Link> 
               <Link to="/about"><div className='text-xl p-2'>About</div></Link>
               <Link to="/contact"><div className='text-xl p-2'>Contact</div></Link>
            </div>
        </div>
    );
};

export default Navbar;