import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {

    return (
     <div className='border-2 border-gray-200 border-t-gray-200 '>
            <div className='flex flex-col justify-center items-center text-center p-8 ' >
            <p className='text-2xl font-bold mb-4'>Movies.com</p>
            <div className='flex px-4'>
            <Link to="https://www.facebook.com/AlmaBetterOfficial" target='_blank'><FaFacebook size={28} className='mb-4 mx-2'/></Link>
            <Link to="https://x.com/AlmaBetter" target='_blank'><FaTwitter size={28} className='mb-4 mx-2'/></Link>
            <Link to="https://www.instagram.com/almabetter/" target='_blank'><FaInstagram size={28} className='mb-4 mx-2'/></Link>
           
            </div>
            <p>&copy; 2025 copyright all right reserved</p>
        </div>
        </div>
    );
};

export default Footer;