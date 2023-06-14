/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import StyledHero from "./StyledHero";
import Button from "../ui/Button";
import axios from "axios";

function Hero() {
  // Membuat state movie
  const [movie, setMovie] = useState("");
  const API_KEY = process.env.REACT_APP_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;

  console.log(trailer);
  
 useEffect(()=> {
  getDetailMovie();
 },[]);

 async function getTrendingMovies(){
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
  const response = await axios(URL);
  return response.data.results[2];
 }

 async function getDetailMovie(){
  const trendingMovie = await getTrendingMovies();
  const id = trendingMovie.id;
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
  const response = await axios(URL);
  setMovie(response.data);
  console.log(response.data);
 }

  return (
    <StyledHero>
      <div>
        <section>
          <div>
            <h2>{movie.title}</h2>
            <h3>{genres}</h3>
            <p>{movie.overview}</p>
            <Button as="a" sizebutton="md" href={trailer} target="_blank">Wacth</Button>
          </div>
          <div className="hero__right">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="placeholder" />
          </div>
        </section>
      </div>
    </StyledHero>
  );
}

export default Hero;
