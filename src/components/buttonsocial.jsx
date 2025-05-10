import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonSocial = ({
  label,
  bgColor,
  textColor,
  url = "google.com",
  isnewtab = false,
  icon,
}) => {
  return (
    <Link to={url} target={isnewtab == true ? "_blank" : ""}>
      <button
        className={`flex items-center justify-between hover:cursor-pointer py-2 px-4 rounded transition gap-[12px] ${bgColor} ${textColor}`}
      >
        <FontAwesomeIcon icon={icon} className="" />
        {label}
      </button>
    </Link>
  );
};

export default ButtonSocial;
