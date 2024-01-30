import React from 'react';
import { useSelector } from 'react-redux';
import { getAllmovies,getAllShows} from '../../features/movies/MovieSlice.jsx';
import MovieCard from '../movie-card/MovieCard';
const MovieListing = () => {
  const movies = useSelector(getAllmovies);
  const shows=useSelector(getAllShows)

  let renderMovies = "";
  let renderShows=""

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-Error">
      <h3>{movies.Error}</h3>
    </div>
  );


  //rendering the shows
  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-Error">
      <h3>{shows.Error}</h3>
    </div>
  );



  return (
    <div className="movie-wrapper">
      <div className="movie-list ">
        <h2 className="text-black font-mono font-bold text-4xl  px-3">Movies</h2>

        {/* Apply grid styles to movie-container */}
        <div className="movie-container grid grid-cols-auto-fill gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {renderMovies}
        </div>
      </div>

      <div className="show-list ">
        <h2 className="text-black font-mono font-bold text-4xl mt-20 px-6" >Shows</h2>

        {/* Apply grid styles to movie-container */}
        <div className="movie-container grid grid-cols-auto-fill gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {renderShows}
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
