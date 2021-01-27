import React from "react";
import { render } from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./index.css";
import App from "./App";

const queryClient = new QueryClient();
const rootEl = document.getElementById("root");

let renderIt = () => {
  render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
    rootEl
  );
};

if (module.hot) module.hot.accept("./App", () => setTimeout(renderIt));

renderIt();
