import {
  createBrowserRouter,
} from "react-router-dom";
import MainMenu from "./App";
import Login from "./Login";
import React from 'react';

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

export default Routes