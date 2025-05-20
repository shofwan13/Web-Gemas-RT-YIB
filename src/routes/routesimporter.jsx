import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "../pages/publicroutes/About";
import Blogs from "../pages/publicroutes/Blogs";
import Home from "../pages/publicroutes/Home";
import Dashboard from "../pages/menucepat/Dashboard";
import Login from "../pages/authroutes/Login";
import postList from "../pages/posts/postList";
import postEdit from "../pages/posts/postEdit";
import Admin404 from "../pages/error/Admin404";

export {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  About,
  Blogs,
  Home,
  Dashboard,
  Login,
  postList,
  postEdit,
  Admin404,
};
