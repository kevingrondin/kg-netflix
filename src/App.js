import React from "react";
import request from "./requests.js";
import "./App.css";

import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Movie"
        isLargeRow
        fetchUrl={request.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top rated" fetchUrl={request.fetchTopRated} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row
        title="Documentary Movies"
        fetchUrl={request.fetchDocumentairesMovies}
      />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Roman Movies" fetchUrl={request.fetchRomanMovies} />
    </div>
  );
}

export default App;
