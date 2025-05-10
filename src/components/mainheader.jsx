import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainHeader = () => {
  // Render the main header with a logo, title, and navigation links
  return (
    <div className="flex items-center justify-start bg-[#03330a] h-full py-[8px] px-[16px] sticky top-0 z-10">
      {/* Logo and website title */}
      <div className="flex items-center justify-start">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="Logo"
          className="w-[50px] h-[50px] rounded-full"
        />
        <h1 className="text-white text-[16px] font-bold ml-2">My Website</h1>
      </div>
      {/* Navigation links */}
      <nav className="ml-auto">
        <ul className="flex space-x-4">
          <li className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={"house"} className="text-inherit" />
            <Link to={"/"} className="ml-[12px] text-[16px] text-inherit">
              Home
            </Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={"fa-heart"} className="text-inherit" />
            <Link to={"/about"} className="ml-[12px] text-[16px] text-inherit">
              About
            </Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={"fa-feather"} className="text-inherit" />
            <Link to={"/blogs"} className="ml-[12px] text-[16px] text-inherit">
              Blogs
            </Link>
          </li>
          <li className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={"fa-feather"} className="text-inherit" />
            <Link to={"/blogs"} className="ml-[12px] text-[16px] text-inherit">
              Blogs
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
