import { useEffect, useState } from "react";
import Movie from "./component/Movie";

function H11() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
    .then((response => response.json()))
    .then((json) => {
    setMovies(json.data.movies);
    setLoading(false);
  });
  }, []);
  return <div>
    {loading ? <h1>Loading...</h1> : <div>{movie.map((movie) => (
      <Movie coverImg={movie.medium_cover_image}
             title={movie.title}
             summary={movie.summary}
             genres={movie.genres}/>
    ))}</div>}
  </div>;
}

export default H11;