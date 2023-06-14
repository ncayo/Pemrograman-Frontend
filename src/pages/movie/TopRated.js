import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";
import { useParams } from "react-router-dom";

function TopRated(){
    const [ movies, setMovies ] = useState([]);
    const params = useParams

    useEffect(() => {
        getTopRated();
    },[params.id])

    async function getTopRated(){
        const response = await axios(ENDPOINTS.TOPRATED);
        setMovies(response.data.results)
    }


    return(
        <>
        <Hero/>
        <Movies title="Top Rated" movies={movies}/>
        </>
    );
}

export default TopRated;