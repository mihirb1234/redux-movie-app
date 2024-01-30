import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, rempveSelectedMovieOrShow } from '../../features/movies/MovieSlice';

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));

    return ()=>{
      dispatch(rempveSelectedMovieOrShow())
    }

  }, [dispatch, imdbID]);

  return (
    <div className='movie-section flex justify-between w-full h-full p-6 text-black font-bold gap-5'>
      {Object.keys(data).length===0? 
      (<div>...Loading</div>)
      :
      (<>
      <div className='section-left w-full'>
        <div className='movie-title text-3xl mb-4'>{data.Title}</div>

        <div className='movie-rating flex gap-4'>
          <span>
            IMDB rating : {data.imdbRating}
          </span>
          <span>
            IMDB votes : {data.imdbVotes}
          </span>
          <span>
            Runtime : {data.Runtime}
          </span>
          <span>
            Year : {data.Year}
          </span>
        </div>

        <div className='movie-plot mt-4 leading-6'>{data.Plot}</div>

        <div className='movie-info mt-4'>
          <div className=''>
            <div className='mb-2 flex'>
              <span className='font-bold'>Director:</span> {data.Director}
            </div>
            <div className='mb-2'>
              <span className='font-bold'>BoxOffice collection:</span> {data.BoxOffice}
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Genres:</span> {data.Genre}
            </div>
            <div className='mb-2'>
              <span className='font-bold'>Languages:</span> {data.Language}
            </div>
            <div>
              <span className='font-bold'>Awards:</span> {data.Awards}
            </div>
          </div>
        </div>
      </div>

      <div className='movie-section-right w-full'>
        <img src={data.Poster} alt={data.Title} className='w-full min-h-auto' />
      </div>
      </>)}
    </div>
  );
};

export default MovieDetail;
