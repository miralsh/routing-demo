import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const MovieDetails = () => {
    const params = useParams();
    const [movies,setMovies]=useState([]);
    const backup="https://th.bing.com/th/id/OIP.ucMk47FSeRx5WqeIX-wgmAHaEH?w=317&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
    const filterMovie=movies.filter((movie)=>{
        return movie.title===params.title
        })
    return (
        
        <div className='flex flex-col justify-center text-center'>
             <p className='text-4xl font-bold p-2'>Movie Details</p>
            {filterMovie.map((movie)=>{
                return(
                    <div className='px-8 flex flex-col justify-center'>
                <div className='flex justify-center'>
                <img src={movie.poster_path!=undefined?"https://image.tmdb.org/t/p/w500/"+movie.poster_path:backup} onError={onImageError} className='p-2 h-[300px] '/>
                </div>
                    <div className='flex flex-col justify-center text-center p-8'>
                        <p className='text-3xl font-bold'>{movie.title}</p>
                        <p className='text-base'><span className='font-bold'>Release Date :</span> {movie.release_date}</p>
                        <div className='lg:px-64 text-center' ><p className='text-base text-center'> {movie.overview}</p></div>
                    </div>
                </div>
                )
            })}
           
            
        </div>
    );
};

export default MovieDetails;