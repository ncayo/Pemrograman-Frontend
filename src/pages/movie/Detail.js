import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import { useEffect, useState } from "react";
import axios from "axios";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../components/utils/constants/endpoints";

function Detail() {
    const params = useParams();
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        getRecommendationMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.id])

    async function getRecommendationMovies() {
        const response = await axios(ENDPOINTS.RECOMMENDATIONS(params.id));
        setMovies(response.data.results);
    }
    console.log(movies);

    return (
        <>
        <DetailMovie/>
        <Movies title="Recommendations" movies={movies} />
        </>
    );
}

export default Detail;