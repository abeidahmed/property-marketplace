import React, { useState } from "react";
import Icon from "components/icon";
import { Link } from "react-router-dom";
import { profileLinks } from "./components/profile-links";

const Header = ({ setSidebarActive }) => {
  const [profileActive, setProfileActive] = useState(false);

  return (
    <header className="px-4 bg-white h-16 z-40 flex items-center border-b border-gray-200">
      <button
        onClick={() => setSidebarActive(true)}
        className="lg:hidden p-1 -ml-2 rounded-md text-gray-700 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition duration-150 ease-in-out"
      >
        <Icon icon="menu" className="h-6 w-6" />
      </button>
      <div className="relative ml-auto">
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
            <button className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
              Sign out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
