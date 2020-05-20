import React from "react";
import { Link } from "react-router-dom";
import { links } from "./links";

const DesktopLinks = () => {
  return (
    <nav className="space-x-8">
      {links.map(link => (
        <Link
          key={link.title}
          to={link.path}
          className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
        >
          {link.title}
        </Link>
      ))}

      <Link
        to="/login"
        className="font-medium text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out"
      >
        Log in
      </Link>

      <Link
        to="/signup"
        className="inline-flex items-center justify-center rounded-md shadow px-5 py-2 border border-transparent leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
      >
        Sign up
      </Link>
    </nav>
  );
};

export default DesktopLinks;
