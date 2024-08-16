import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { App } from "./App";
import { Random_user } from "./Component/Random_user";
const router = createHashRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element=<App /> />
      <Route path="/randomuser" element=<Random_user /> />
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
