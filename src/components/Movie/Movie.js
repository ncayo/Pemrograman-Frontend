import styles from "./Movie.module.css"


// Tanggap props
function Movie(props){
    // Destructing object props
    const {movie} = props;

    return(
        <div className={styles.movie}>
            <img className={styles.movie__image} src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}` } alt={movie.title}/>
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>{movie.year || movie.release_date}</p>
          </div>
    );
}
export default Movie;