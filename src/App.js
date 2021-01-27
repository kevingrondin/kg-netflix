import "./App.css";

import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

const App = () => (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Movie" isLargeRow fetchUrl="fetchNetflixOriginals" />
      <Row title="Trending Now" fetchUrl="fetchTrending" />
      <Row title="Top rated" fetchUrl="fetchTopRated" />
      <Row title="Comedy Movies" fetchUrl="fetchComedyMovies" />
      <Row title="Action Movies" fetchUrl="fetchActionMovies" />
      <Row
        title="Documentary Movies"
        fetchUrl="fetchDocumentairesMovies"
      />
      <Row title="Horror Movies" fetchUrl="fetchHorrorMovies" />
      <Row title="Roman Movies" fetchUrl="fetchRomanMovies" />
    </div>
)

export default App;
