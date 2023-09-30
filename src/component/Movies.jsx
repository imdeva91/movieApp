import React from 'react'
import { useGlobleContext } from '../context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const { movies } = useGlobleContext();
    return (
        <section className='movie-page'>
            <div className='container grid grid-4-col'>
                {movies?.map((item) => {
                    const { imdbID, Title, Poster } = item;
                    const movieName = Title.substring(0, 15);
                    return <NavLink to={`movies/${imdbID}`} key={imdbID}>
                        <div className='card'>
                            <div className='card-info'>
                                <h2>{movieName > 15 ? `${movieName} ...` : movieName}</h2>
                                <img src={Poster} alt={imdbID} />
                            </div>
                        </div>

                    </NavLink>
                })}
            </div>
        </section>
    )
}

export default Movies