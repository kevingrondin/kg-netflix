import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

const rootEl = document.getElementById("root");

let renderIt = () => {
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootEl
  );
};

if (module.hot) module.hot.accept("./App", () => setTimeout(renderIt));

renderIt();
