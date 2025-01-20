import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope, FaMapLocation } from 'react-icons/fa6';
import MapComponent from './MapComponent';
import { Map, GoogleApiWrapper } from 'google-maps-react';


const Contact = (props) => {
    const myStyle = {
        position: "absolute",
        maxWidth: "100%",
        height: "auto",
        top: "20%",
        left: "25%",
        transform: `translate(-25%)`
    }
    

    return (
        <>
        <div className='flex flex-col sm:flex-row text-center text-3xl container mx-auto mt-8 md:mt-4 items-center'>


<div className='px-12 md:w-3/4  text-center'  >
<p className='md:text-5xl sm:text-2xl font-bold md:mb-4 text-black-700'>Contact Us</p>
<p className='py-4 md:text-xl text-base text-justify md:tracking-wide text-black-700 font-semibold md:leading-8'>"Have questions, feedback, or suggestions? We’d love to hear from you! At Movies.com, your thoughts help us improve and deliver the best movie discovery experience. Reach out to us anytime—we’re here to assist you!"</p>
</div>
                <div className=' flex md:justify-end justify-center items-center'>


                <div className='md:w-3/4 w-1/2 pe-4'>
                    <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1736767818~exp=1736771418~hmac=b873c0844b8c9f03d37b40d1ece29a991f5ac497b666c7eb4c84860c38cd64ef&w=826" />
                </div>
            </div>
            </div>
            <div className='flex flex-col md:flex-row text-center text-3xl container mx-auto mt-8 md:mt-4 items-center justify-center '>
                <div className=' px-12 flex-col justify-center  '>
                    <div className='py-4 flex '><FaMapLocation/> <p className='text-xl px-4 md:w-3/4 text-start'>2386 S Flower Ave
                    Port Orchard, Washington(WA), 98366</p></div>

                    <div className='py-4 flex '><FaEnvelope/><p className='px-4 text-xl'>HELP@MOVIES.COM</p></div>
                    <div className='py-4 flex '><FaPhone/><p className='px-4 text-xl'>(360) 697-4451</p></div>
                </div>
                <div className="relative  w-[65%] md:h-80 h-60 overflow-hidden m-8">
            <MapComponent />
          </div>
                </div>
            </>
    );
};

export default Contact;