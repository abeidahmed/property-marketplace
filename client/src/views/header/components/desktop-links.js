import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links, profileLinks } from "./links";

const DesktopLinks = () => {
  const [profileActive, setProfileActive] = useState(false);

  return (
    <nav className="flex items-center space-x-8">
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

      <div className="relative">
        <div>
          <button
            className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-500 transition duration-150 ease-in-out"
            id="user-menu"
            aria-label="User menu"
            aria-haspopup="true"
            onClick={() => setProfileActive(!profileActive)}
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </button>
        </div>

        <div
          className={`${
            profileActive ? "block" : "hidden"
          } origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg`}
        >
          <div
            className="py-1 rounded-md bg-white shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            {profileLinks.map(profileLink => (
              <Link
                key={profileLink.title}
                to={profileLink.path}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
              >
                {profileLink.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopLinks;
