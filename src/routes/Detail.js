import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Details from "../components/Details";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState({});
  const {id} = useParams();

  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovies(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Details Loading...</h1>
      ) : (
        <div>
          <Details
            title={movie.title_long}
            src={movie.medium_cover_image}
            description={movie.description_full}
            genres={movie.genres}
            url={movie.url}
            rating={movie.rating}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;