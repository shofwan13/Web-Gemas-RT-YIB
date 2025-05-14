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
        className={`flex items-center h-[44px] rounded-lg transition-all duration-500 px-4 pr-4 overflow-hidden ${bgColor} ${textColor}`}
        onMouseEnter={() => setShowLabel(true)}
        onMouseLeave={() => setShowLabel(false)}
        onFocus={() => setShowLabel(true)}
        onBlur={() => setShowLabel(false)}
        style={{
          width: showLabel ? "160px" : "44px", // Lebar tombol berubah sesuai state
          transition: "width 500ms ease-in-out", // Transisi halus untuk width
        }}
      >
        <span className="flex items-center">
          {icon && <FontAwesomeIcon icon={icon} className="text-lg" />}
        </span>
        <span
          className={`whitespace-nowrap ml-2 overflow-hidden inline-block transition-all duration-500 ${
            showLabel ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
          style={{
            transitionProperty: "opacity, transform",
            opacity: showLabel ? 1 : 0, // Segera hilangkan opacity
            width: showLabel ? "auto" : "0", // Segera hilangkan width
          }}
        >
          {label}
        </span>
      </button>
    </Link>
  );
};

export default ButtonSocialDesktop;
