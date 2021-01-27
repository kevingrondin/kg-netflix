import { useState } from "react";
import { useQuery } from "react-query";
import { getListMovie } from "./api";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

const opts = {
  height: "390",
  width: "100%",
  playserVars: {
    autoplay: 1,
  },
};

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const { data, isLoading, isError, error } = useQuery(
    `movies_${title}`,
    async () => {
      const data = await getListMovie(fetchUrl);
      return data;
    }
  );

  if (isLoading) return <h1>Chargement</h1>;

  if (isError) return <h1>{error}</h1>;

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title)
        .then((url) => {
          if (url) {
            let urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }
        })
        .catch((err) => console.log("movie trailer erreur", err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {data.results.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
