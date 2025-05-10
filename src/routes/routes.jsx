import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Blogs from "../pages/Blogs";

//Routes untuk public tanpa login
const Routes = () => {
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/blogs", element: <Blogs /> },
  ];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: publicRoutes,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
