import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import {
  About,
  Blogs,
  Home,
  Dashboard,
  Login,
  postList,
  postEdit,
  Admin404,
} from "./routesimporter";

//Routes untuk public tanpa login
const Routes = () => {
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/blogs", element: <Blogs /> },
  ];

  //Routes untuk admin (Hanya bisa diakses setelah login)
  const adminRoutes = [
    { path: "/admin/dashboard", element: <Dashboard /> },
    { path: "/admin/*", element: "" },
    { path: "/admin/posts/list", element: <postList /> },
    { path: "/admin/", element: <postEdit /> },
    { path: "/admin/posts/edit", element: <postEdit /> },
  ];

  //Routes untuk auth (login)
  const routerAuth = [{ path: "/auth/login", element: <Login /> }];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: publicRoutes,
    },
    {
      path: "/admin",
      element: <Outlet />,
      children: adminRoutes,
    },
    {
      path: "/auth",
      element: <Outlet />,
      children: routerAuth,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
