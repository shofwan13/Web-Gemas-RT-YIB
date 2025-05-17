import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

//Routes untuk public tanpa login
const Routes = () => {
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/admin/dashboard", element: <Dashboard /> },
    { path: "/admin/login", element: <Login /> },
    { path: "/admin/*", element: <Login /> },
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
