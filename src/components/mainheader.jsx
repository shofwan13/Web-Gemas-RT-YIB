import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainHeader = ({ title }) => {
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Tambahkan state untuk loading

  // Fetch data from an external API using Axios
  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get("https://api.example.com/links"); // Ganti dengan URL API Anda
        setLinks(response.data); // Asumsikan response.data adalah array objek dengan { label, path, icon }
      } catch (error) {
        console.error("Error fetching links:", error);
      } finally {
        setIsLoading(false); // Set loading ke false setelah selesai fetch
      }
    };

    fetchLinks();
  }, []);

  return (
    <div className="flex items-center justify-start bg-[#03330a] h-full py-[8px] px-[16px] sticky top-0 z-10">
      {/* Logo and website title */}
      <div className="flex items-center justify-start">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt="Logo"
          className="w-[50px] h-[50px] rounded-full"
        />
        <h1 className="text-white text-[16px] font-bold ml-2">{title}</h1>
      </div>
      {/* Navigation links */}
      <nav className="ml-auto">
        <ul className="flex space-x-4">
          {isLoading ? (
            // Animasi skeleton saat loading
            <div className="z-10 animate-pulse w-[120px] flex grid-cols-2 items-center justify-center h-[200px] gap-0">
              <div className="rounded-full bg-gray-200 h-[16px] w-[16px] mx-[10px]"></div>
              <div className="rounded bg-gray-200 h-[16px] w-full mx-auto"></div>
            </div>
          ) : (
            links.map((link, index) => (
              <li key={index} className="text-white hover:text-gray-300">
                <FontAwesomeIcon icon={link.icon} className="text-inherit" />
                <Link
                  to={link.path}
                  className="ml-[12px] text-[16px] text-inherit"
                >
                  {link.label}
                </Link>
              </li>
            ))
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MainHeader;
