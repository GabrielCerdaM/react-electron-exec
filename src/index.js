import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { createHashRouter as CreateHashRouter } from "react-router-dom";
import { routes } from "./routes/routes";
import { createHashRouter, RouterProvider } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* <createHashRouter routes={routes}>
      <App />
    </createHashRouter> */}
    <RouterProvider router={routes} />
  </React.StrictMode>
);
