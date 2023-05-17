import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import data from "../components/utils/constants/data";

function Main(){

    // mengangkat state movies : lifting state
    const [movies, setMovies] = useState(data);

    return(
        <main>
            <Hero />
            {/* Mengirim props : state movies */}
            <Movies movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies}/>
        </main>
    )
}

function Home(){
    return(
        <div>
            <Main />
        </div>
    )
}
export default Home;