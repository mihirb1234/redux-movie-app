import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies/MovieSlice.jsx'


export const store=configureStore({
    reducer:{
        movies:moviesReducer
    },
})