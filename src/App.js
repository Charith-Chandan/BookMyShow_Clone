import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

import HomePage from "./pages/Home.page";
import Movies from "./pages/Movies.page";
import Plays from "./pages/Plays.pages";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing Axios
import axios from "axios";
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={HomePage} />

      <MovieHOC path="/movies/123" exact component={Movies}/>

      <DefaultHOC path="/plays" exact component={Plays} />
    </>
  );
}

export default App;
