import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../components/utils/constants/endpoints";


function Popular(){
    const params = useParams();
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        getPopularMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.id]);

    async function getPopularMovies(){
        const response = await axios(ENDPOINTS.POPULAR);
        setMovies(response.data.results);
    }


    return(
        <>
        <Hero/>
        <Movies movies={movies}/>
        </>
    );
}

export default Popular;