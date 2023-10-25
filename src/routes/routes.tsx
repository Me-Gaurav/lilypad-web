import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../Components/Layouts/LayoutPage";
import Home from "../Screens/Home";
import About from "../Screens/About";


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage Component={Home} />
  },
  {
    path: "/about",
    element: <LayoutPage Component={About} />
  }
])

export default router