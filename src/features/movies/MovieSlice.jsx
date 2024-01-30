import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieAPI from '../../apis/MovieAPI';



// Use the API key in the request                                                //term is input from the search bar
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    // const movieText = "harry";
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

      const response = await movieAPI.get(`?apiKey=${apiKey}&s=${term}&type=movie`);
      console.log("the response from API", response.data);
      return response.data;
    
});


export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    // const seriesText = "Friends";
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

      const response = await movieAPI.get(`?apiKey=${apiKey}&s=${term}&type=series`);
      console.log("the response from API", response.data);
      return response.data;
    
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', 
  async (id) => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

    const response = await movieAPI.get(`?apiKey=${apiKey}&i=${id}&Plot=full`);
    console.log("the response from API", response.data);
    return response.data;
  
});




const initialState = {
  movies: {},
  shows:{},
  selectMovieOrShow:{},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // addMovies: (state, { payload }) => {
    //   state.movies = payload;
    // },

    rempveSelectedMovieOrShow:(state)=>{
      state.selectMovieOrShow={}
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        console.log("Pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("Fulfilled");
        state.movies = payload;
      })
      
      .addCase(fetchAsyncMovies.rejected, (state, action) => {
        console.log("Rejected", action.error.message);
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        console.log("Fulfilled");
        state.shows = payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        console.log("Fulfilled");
        return {...state,selectMovieOrShow:payload};
        // state.selectMovieOrShow = payload;
      });
  },
});

export const { rempveSelectedMovieOrShow} = movieSlice.actions;
export const getAllmovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
