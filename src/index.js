import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/car-rental-app">
      <App />
    </BrowserRouter>
  </Provider>
);
