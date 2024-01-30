/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom';
const MovieCard = (props) => {
  const {data}=props;
  return (
    <div className='card-item cursor-pointer bg-black hover:transform hover:scale-110 transition-transform duration-300 min-h-[450px] h-[100%] m-[10px] '>
      <Link to={`/movie/${data.imdbID}`}>
      <div className='card-inner'>
          <div className='card-top h-300'>
            {/* movies.search.map aur search ke ander we have the poster ppy */}
              <img src={data.Poster} alt={data.Title} className='h-full w-full' />

          </div>
          <div className='card-bottom'>
              <div className='card-info text-black font-thin mb-5 p-4'>
                  <h4 className='mt-4 text-white'>{data.Title}</h4>
                  <p className='mt-4 text-white'>{data.Year}</p>
              </div>
          </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard