import React from "react";
import ReactDOM from "react-dom/client";
import {persistor, store } from "./redux/store";
import "./index.css";
import { GlobalStyle } from "./css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter basename="/car-rental-app">
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
