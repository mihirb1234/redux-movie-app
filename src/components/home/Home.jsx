import React, { useEffect } from 'react';
import MovieListing from '../movie-listing/movieListing';
import movieAPI from '../../apis/movieAPI';
// import { APIKey } from '../../apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/MovieSlice';

const Home = () => {
  
  const dispatch = useDispatch();
  const  movieText="harry"
  const showText="friends"
  useEffect(() => {
   
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))

  }, [dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
}

export default Home;
