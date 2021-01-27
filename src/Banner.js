import { useQuery } from "react-query";
import { getListMovie } from "./api";
import "./Banner.css";

const posterBaseUrl = "http://image.tmdb.org/t/p/original";
const category = "fetchNetflixOriginals"
const truncate = (str, n) => 
  str?.length > n ? str.substr(0, n - 1) + "..." : str;

const Banner = () => {

  const { data, isLoading, isError, error } = useQuery(`movies_${category}`, async () => {
    const request = await getListMovie(category)
    const data = await request.results[
      Math.floor(Math.random() * request.results.length - 1)
    ]
    return data
  }, { refetchOnWindowFocus: false });

  if(isLoading)
    return <h1>Chargement</h1>

  if(isError)
    return <h1>{error}</h1>

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "${posterBaseUrl}${data.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {data.title || data.name || data.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">PLay</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(data.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
