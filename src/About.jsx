import React from 'react';

const About = () => {
    const myStyle = {
        position: "absolute",
        maxWidth: "100%",
        height: "auto",
        top: "20%",
        left: "25%",
        transform: `translate(-25%)`
    }
    return (
        <div className=''>
            <div className='flex flex-col sm:flex-row text-center text-3xl container mx-auto mt-8 md:mt-4 items-center'>

                
                <div className='px-12 md:w-3/4  text-center'  >
                    <p className='md:text-5xl sm:text-2xl font-bold md:mb-4 text-black-700'>About Us</p>
                    <p className='py-4 md:text-xl text-base text-justify md:tracking-wide text-black-700 font-semibold md:leading-8'>"Welcome to Movies.com,
                        your ultimate destination for discovering movies! We are passionate about bringing you the latest releases,
                        timeless classics, and hidden gems across genres. Join us in celebrating the magic of cinema!"</p>
                </div>
                <div className=' flex md:justify-end justify-center items-center'>

                    <div className='md:w-3/5 w-1/2 pe-4'>
                        <img src="https://img.freepik.com/free-vector/corporate-meeting-employees-cartoon-characters-discussing-business-strategy-planning-further-actions-brainstorming-formal-communication-seminar-concept-illustration_335657-2035.jpg?t=st=1736750445~exp=1736754045~hmac=bbe02e65e86bebe286c676a3b04efdd0ac5240da2b283628469e241f9d678957&w=826" />
                    </div>
                </div>
                </div>
                <div className=' flex items-center py-2 bg-indigo-200 mb-8'>
                    {/* <img src={"https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?t=st=1736749825~exp=1736753425~hmac=e5d2faf3d85489a8b00d160175b88d3063dbc0f445f9fea29017e6f07b89b9b8&w=1380"} className='w-1/3'/> */}
                    <div className='flex flex-col justify-center py-4'>
                        <p className='md:text-5xl sm:text-2xl font-bold text-center text-black-700'>What We Do</p>
                        <p className='md:px-28 px-12 py-8 text-justify md:text-xl text-base font-semibold md:leading-8'>"Our team at Movies.com is a group of passionate movie enthusiasts, critics, and tech-savvy professionals dedicated to creating the best movie discovery experience. From curating the latest blockbusters to uncovering indie gems, our mission is to connect you with films that inspire, entertain, and leave a lasting impression. With a shared love for cinema and storytelling, we work together to bring you a seamless, engaging, and user-friendly platform. Let’s explore the world of movies together!"</p>
                    </div>
                </div>

            </div>
        
    );
};

export default About;