const base_path = "https://api.themoviedb.org/3";
const API_KEY = "aa5ac0d6ce97d46996c25bc5e3711e46";

const requests = [
  {
    name: "fetchTrending",
    url: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
  },
  {
    name: "fetchNetflixOriginals",
    url: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    name: "fetchTopRated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=fr_FR`,
  },
  {
    name: "fetchActionMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  {
    name: "fetchComedyMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  {
    name: "fetchHorrorMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  {
    name: "fetchRomanMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  {
    name: "fetchDocumentairesMovies",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  },
];

export const getListMovie = async (category) => {
  const index = await requests
    .map(({ name }, key) => {
      if (name === category) {
        return key;
      }
      return undefined;
    })
    .filter((x) => x !== undefined);

  const url = await (String(base_path) + String(requests[+index[0]].url));
  try {
    const response = await fetch(url);
    return response.json();
  } catch (err) {
    console.log("getListMovie", err);
  }
};
