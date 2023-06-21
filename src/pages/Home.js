import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home(){
    return(
        <>
        <Hero />
        {/* Mengirim props : state movies */}
        <Movies title="Latest Movies" />
        </>
    )
}
export default Home;