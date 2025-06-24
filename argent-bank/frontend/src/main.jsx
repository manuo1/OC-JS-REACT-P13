import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import "./style/main.css";

import { Provider } from "react-redux";
import { store } from "./app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
);
