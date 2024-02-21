import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import {BASE_URL } from "../context"
import axios from 'axios';

const CardPage = () => {
    const { id } = useParams();
    
    const [movies, setMovies] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    

    const getMovies = async (url) => {
        // console.log("url",url)

        setIsLoading(true)

        try {
            const { data } = await axios.get(url);
            console.log("dta",data)

            if (data.Response === "True") {
                console.log('mkk    ')
                setIsLoading(false)
                setMovies(data);

            }
           

        } catch (error) {
            setIsError({
                show: "true",
                // msg: data.error
            })
            console.log(error)
        }

    };
    useEffect(() => {
        const timerOut = setTimeout(()=>{getMovies(`${BASE_URL}&i=${id}`)},800)
        return ()=> clearTimeout(timerOut)
    }, [id]);

    if(isLoading){
        return (
            <div className='movie-section '>
                <div className='loading'>Loading...</div>
            </div>
        )
    }


  return (
    <section className="movie-section">
    <div className="movie-card">
      <figure>
        <img src={movies.Poster} alt="" />
      </figure>
      {/* <div className="card-content">
        <p className="title">{movies.Title}</p>
        <p className=""></p>
        <p className="card-text">{movies.Released}</p>
        <p className="card-text">{movies.Genre}</p>
        <p className="card-text">{movies.imdbRating} / 10</p>
        <p className="card-text">{movies.Country}</p>
        <NavLink to="/" className="back-btn">
          Go Back
        </NavLink>
      </div> */}
    </div>
  </section>
  )
}

export default CardPage