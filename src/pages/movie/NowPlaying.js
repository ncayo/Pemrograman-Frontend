import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { useParams } from "react-router-dom";
import ENDPOINTS from "../../components/utils/constants/endpoints";


function NowPlayingMovie(){
    const params = useParams
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        getNowPlaying();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.id]);

    async function getNowPlaying(){
        const response = await axios(ENDPOINTS.NOWPLAYING);
        setMovies(response.data.results);
    }


    return(
        <>
        <Hero/>
        <Movies title="Now Playing" movies={movies}/>
        </>
    );
}

export default NowPlayingMovie;