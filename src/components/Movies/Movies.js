import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import { nanoid } from "nanoid";

function Movies(props) {

  // Destructing props : state movies
  const { title } = props;

  const movies = useSelector((store) => store.movies.movies);


  // Membuat fungsi tambah film
  // dijalankan ketika tombol diklik
  // function tambahFilm() {
  //   const movie ={
  //     id : nanoid(10),
  //     title : "Spiral Jigsaw",
  //     year : "2021",
  //     type : "Movie",
  //     poster : "https://picsum.photos/300/400",
  //   };

  //   setMovies([...movies,movie]);
  // }
  
  return (
  <div>
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
        {movies.map(function(movie){
            return <Movie key={movie.id} movie={movie} />
          })
        }
        </div>
        {/* <button onClick={tambahFilm}>Add Movie</button> */}
      </section>
    </div>
  </div>
  );
}

export default Movies;