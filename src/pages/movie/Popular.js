import axios from "axios";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
// import { useParams } from "react-router-dom";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { useDispatch } from "react-redux";
import { updateMovie } from "../../features/moviesSlice";


function Popular(){
    const dispath = useDispatch();

    useEffect(() => {
        getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    async function getPopularMovies(){
        const response = await axios(ENDPOINTS.POPULAR);
        const movies = response.data.results;
        dispath(updateMovie(movies));
    }


    return(
        <>
        <Hero/>
        <Movies title="Popular"/>
        </>
    );
}

export default Popular;