import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LayoutPage from "../Components/Layouts/LayoutPage";
import Home from "../Screens/Home";
import About from "../Screens/About";
import Vision from "../Screens/Vision";
import Contact from "../Screens/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage Component={Home} />
  },
  {
    path: "/about",
    element: <LayoutPage Component={About} />
  },
  {
    path: "/vision",
    element: <LayoutPage Component={Vision} />
  },
  {
    path: "/contact",
    element: <LayoutPage Component={Contact} />
  }
])

export default router