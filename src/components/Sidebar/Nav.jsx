import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav({ icon, link, isOpen, onClick }) {
  const location = useLocation();

  // Create the path for the link, but skip it for "Delete Data"
  let currentLink = "/";
  if (link !== "Home" && link !== "Delete Data") {
    currentLink = "/" + link.toLowerCase();
  }

  // Apply styles based on current path
  const styleNav = `${
    location.pathname === currentLink
      ? "bg-yellow-main text-brown-main"
      : "hover:bg-soft-yellow text-dark-main"
  }`;

  return (
    <li
      className={
        "transition duration-300 cursor-pointer nav mb-8 rounded-2xl " + styleNav
      }
    >
      {/* Render a button for "Delete Data" and a Link for other nav items */}
      {link === "Delete Data" ? (
        <button
          onClick={onClick}
          className="px-5 py-3 flex items-center gap-x-4 font-semibold text-xl"
        >
          {icon}
          <h2 className={`${!isOpen && "opacity-0"} cursor-pointer duration-200`}>
            {link}
          </h2>
        </button>
      ) : (
        <Link
          to={currentLink}
          className="px-5 py-3 flex items-center gap-x-4 font-semibold text-xl"
          onClick={onClick} // This ensures the onClick function gets passed from Navs
        >
          {icon}
          <h2 className={`${!isOpen && "opacity-0"} cursor-pointer duration-200`}>
            {link}
          </h2>
        </Link>
      )}
    </li>
  );
}
