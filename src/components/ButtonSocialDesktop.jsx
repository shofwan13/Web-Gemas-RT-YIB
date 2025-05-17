import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonSocialDesktop = ({
  label,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  url = "google.com",
  isnewtab = false,
  icon,
}) => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <Link to={url} target={isnewtab ? "_blank" : ""}>
      <button
        type="button"
        className={`flex items-center h-11 rounded-lg px-4 overflow-hidden transition-all duration-500 ${bgColor} ${textColor}`}
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        style={{ width: showLabel ? "160px" : "44px" }}
      >
        {icon && <FontAwesomeIcon icon={icon} className="text-lg" />}
        <span
          className={`ml-2 whitespace-nowrap transition-all duration-500 ${
            showLabel ? "opacity-100" : "opacity-0"
          }`}
        >
          {label}
        </span>
      </button>
    </Link>
  );
};

export default ButtonSocialDesktop;
