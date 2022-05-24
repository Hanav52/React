import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../component/Movie";

function Detail() {
    const [Loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
      <div>
          {Loading ? <h1>Loading...</h1> : null}
      </div>
  )
}
export default Detail;