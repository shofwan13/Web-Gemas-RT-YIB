import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ExpandableButton({
  text = "Menuju Fitur",
  icon = faArrowRight,
  bgColor = "bg-[#1a6218]",
  textColor = "text-white",
  onClick,
}) {
  const [showIcon, setShowIcon] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setShowIcon(true)}
      onMouseLeave={() => setShowIcon(false)}
      onFocus={() => setShowIcon(true)}
      onBlur={() => setShowIcon(false)}
      className={`flex items-center transition-all duration-300 ${bgColor} ${textColor} px-4 h-[44px] rounded-lg overflow-hidden`}
    >
      <span className="whitespace-nowrap">{text}</span>
      <span
        className={`flex items-center overflow-hidden transition-all duration-300 ml-2 ${
          showIcon ? "w-5 opacity-100" : "w-0 opacity-0"
        }`}
        style={{ transitionProperty: "width, opacity" }}
      >
        <FontAwesomeIcon icon={icon} className="text-lg" />
      </span>
    </button>
  );
}
