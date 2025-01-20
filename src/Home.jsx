import React, { useEffect, useState } from 'react';
import data from './assets/data.json'
import { Link } from 'react-router-dom';

import axios from 'axios';
const Home = () => {
    const [movies, setMovies] = useState([]);
    const backup = "https://th.bing.com/th/id/OIP.ucMk47FSeRx5WqeIX-wgmAHaEH?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    const onImageError = (e) => {
        e.target.src = backup
    }


    const options = {method: 'GET',   headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTVmZDkxY2JiZTAyMzljYjhlNjQ2Njk4MzI3MmI2YSIsIm5iZiI6MTczNzI4NjE3OS45NzMsInN1YiI6IjY3OGNlMjIzODU5ZmI0ZTZhODZkZjFjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AYMY95_sdxcXzGagr19NwMN64bUcVsmHUdszNJ4Hl0E'
      }};
   



    useEffect(() => {

        axios.request('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=4',options).then((res) => {
            console.log("response " + JSON.stringify(res.data))
            setMovies(res.data.results)
        }).catch((err) => {
            console.log(err);
        });
    }, [])


    return (

        <div className='bg-gray-100 '>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-center mx-auto'>
                    <h1 className='font-bold p-4 text-center text-4xl'>Movies</h1>
                    <div className='md:mx-20 text-center text-3xl '>

                        <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-28 p-8 '>
                            {movies.length > 0 ? (
                              movies.map((movie)=>{
                               
                                    return (
                                        <>
                                            <Link to={`/movies/${movie.title}`} ><div className='flex flex-col justify-center  border-2 rounded bg-white text-center mb-4 md:mb-0' align="center">
                                                {movie.poster_path?
                    <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path} onError={onImageError} className='p-2 md:h-[350px] sm:w-full'/>:<img src={backup}/>}
                                                <div className='d-block p-2'>
                                                <p className='font-bold truncate '>{movie.title}</p>
                                                    <p className='text-base truncate '>Release Date: {movie.release_date}</p>
                                                    <p className='text-base truncate '>Popularity : {movie.popularity}</p>
                                                    {/* <p className='text-base truncate '>Genre: {movie.genres.map((e)=>e+" ")}</p>
                        <p className='text-base truncate '>Actors: {movie.cast.map((e)=>e+" ")}</p> */}
                                                </div>
                                            </div>
                                            </Link>
                                        </>
                                    )
                                })) : "Data Not Found"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Home;