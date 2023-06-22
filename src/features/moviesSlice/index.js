import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/utils/constants/data";

const movieSlice = createSlice({
    name: "Movies Slice",
    initialState:{
        movies: data
    },
    reducers:{
        addMovie(state, action) {
            state.movies.push(action.payload);
        },
        updateMovie(state, action){
            state.movies = action.payload;
        },
    },
});

const {addMovie, updateMovie} = movieSlice.actions;
const moviesReducer = movieSlice.reducer; 

export default moviesReducer;
export { addMovie, updateMovie };