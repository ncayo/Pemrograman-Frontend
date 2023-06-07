import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Movies from "../../components/Movies/Movies";
import Hero from "../../components/Hero/Hero";

function TopRated() {
  // simpan API_KEY dan URL
  const API_KEY = process.env.REACT_APP_API_KEY;
  const URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

  // membuat state movies
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTopRatedMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getTopRatedMovies() {
    // fetch data dari axios
    const response = await axios(URL);

    // simpan data ke state movie
    setMovies(response.data.results);
  }

  return (
    <>
      <Hero />
      <Movies title="Top Rated" movies={movies} />
    </>
  );
}

export default TopRated;