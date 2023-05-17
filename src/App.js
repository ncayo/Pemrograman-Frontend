// Import Routes dan Route dari React Router.
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
import CreateMovie from "./pages/movie/Create";
import Popular from "./pages/movie/Popular";
import NowPlayingMovie from "./pages/movie/NowPlaying";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout";


function App() {
  return(
    <>
<Layout>
<Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/movie/create" element={<CreateMovie/>}/>
      <Route path="/movie/popular" element={<Popular/>} />
      <Route path="/movie/now" element={<NowPlayingMovie></NowPlayingMovie>}/>
      <Route path="/movie/top" element={<TopRated/>}/>
    </Routes>
</Layout>
    </>
);
}

export default App;
