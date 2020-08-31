const API_KEY = "aa5ac0d6ce97d46996c25bc5e3711e46";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=fr-FR`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=fr_FR`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentairesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
