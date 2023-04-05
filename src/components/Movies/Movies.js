import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data movie
import data from "../utils/constants/data";
import { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
  //Membuat variable state: movies
  const [movies, setMovies]= useState(data);

  // Membuat fungsi tambah film
  // dijalankan ketika tombol diklik
  function tambahFilm() {
    const movie ={
      id : nanoid(10),
      title : "Spiral Jigsaw",
      year : "2021",
      type : "Movie",
      poster : "https://picsum.photos/300/400",
    };

    // Menambahkan movie ke state movies
    // spread operatir : copy dan merge array
    setMovies([...movies,movie])
  }
  
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/* 
          * looping data movies : map
          * Render Component Movie
          * Kirim props movie
           */}
        {
          movies.map(function(movie){
            return <Movie key={movie.id} movie={movie} />
          })
        }
        </div>
        {/* Menambahkan Event  */}
        <button onClick={tambahFilm}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;