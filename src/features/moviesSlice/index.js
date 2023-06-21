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
        deleteMovie(){},
    },
});

const {addMovie, deleteMovie} = movieSlice.actions;
const moviesReducer = movieSlice.reducer; 

export default moviesReducer;
export { addMovie, deleteMovie };