import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };

  return (
    <div className='header bg-black  sm:h-[140px] px-4 py-2 md:py-0 flex flex-col md:flex-row items-center justify-between'>
      <div className='logo text-white text-2xl font-semibold mb-2 md:mb-0 md:mr-4'>
        <Link to='/'>Movie App</Link>
      </div>

      <div className='search-bar flex flex-col md:flex-row items-center'>
        <form onSubmit={submitHandler} className='flex'>
          <span className='text-white  px-3 py-1  '>Search :</span>
          <input
            type='text'
            value={term}
            placeholder='Search movie or shows'
            onChange={(e) => setTerm(e.target.value)}
            className='rounded-lg p-2 w-full md:w-[300px] md:ml-2 '
          />
          <button
            type='submit'
            className='text-white bg-gray-600 p-2 rounded-xl ml-2 md:ml-2 hover:transform hover:scale-125 transition-transform duration-300  '
          >
            enter
          </button>
        </form>
      </div>

      <div className='user-image w-[38px] h-[38px] rounded-full overflow-hidden'>
        {/* <img src={userImage} alt="user w-full h-full object-cover" /> */}
      </div>
    </div>
  );
};

export default Header;
