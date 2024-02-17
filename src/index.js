import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import "./index.css";
import { GlobalStyle } from "./css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/car-rental-app">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
);
