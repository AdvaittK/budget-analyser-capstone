import React from "react";
import Nav from "./Nav";
import HomeIcon from "@mui/icons-material/Home";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navs({ isOpen }) {
  return (
    <ul className="navs">
      <Nav icon={<HomeIcon />} link="Home" isOpen={isOpen} />
      <Nav icon={<BarChartIcon />} link="Analytics" isOpen={isOpen} />

      {/* Use Link to navigate to the Delete page */}
      <li className="transition duration-300 cursor-pointer nav mb-8 rounded-2xl hover:bg-soft-yellow text-dark-main">
        <Link
          to="/delete" // This will redirect to /delete
          className="px-5 py-3 flex items-center gap-x-4 font-semibold text-xl"
        >
          <DeleteIcon />
          <h2 className={`${!isOpen && "opacity-0"} cursor-pointer duration-200`}>
            Delete Data
          </h2>
        </Link>
      </li>
    </ul>
  );
}
