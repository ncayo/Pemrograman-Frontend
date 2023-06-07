import axios from "axios";
import { useEffect, useState } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function Popular(){
    // Simpan API_KEY dan URL
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

    // Membuat State Movies
    const [movies, setMovies] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
        getTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function getTrendingMovies(){
        // Fetch data dari axios
        const response = await axios(URL);
        
        // simpan data ke state movie
        setMovies(response.data.results);
    }

    console.log(movies);

    return(
        <>
        <Hero/>
        <Movies movies={movies}/>
        </>
    );
}

export default Popular;