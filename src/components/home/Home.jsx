import React, { useEffect } from 'react';

// import { APIKey } from '../../apis/MovieApiKey';
import { useDispatch } from 'react-redux';
import {fetchAsyncMovies, fetchAsyncShows} from '../../features/movies/MovieSlice';
import MovieListing from '../movie-listing/MovieListing';

const Home = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies("harry"))
    dispatch(fetchAsyncShows("harry"))

  }, [dispatch]);

  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />
    </div>
  );
}

export default Home;
