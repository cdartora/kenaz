import React from "react";
import ReactDOM from "react-dom/client";

import WrappedApp from "./App";
import BookProvider from "./context/BookProvider";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BookProvider>
      <WrappedApp />
    </BookProvider>
  </React.StrictMode>
);
