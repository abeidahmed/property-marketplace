import React from "react";
import Icon from "components/icon";
import { Link } from "react-router-dom";
import Links from "./components/links";
import LogoFullWhite from "assets/logo/logo-full-white.svg";

const Sidebar = ({ setSidebarActive, sidebarActive }) => {
  return (
    <aside
      className={`${
        sidebarActive ? "translate-x-0" : "-translate-x-full"
      } transform lg:translate-x-0 fixed top-0 lg:sticky w-64 z-50 h-screen bg-gray-800 overflow-y-hidden flex flex-col border-r border-gray-200 bg-white flex-shrink-0 transition duration-150 ease-in-out`}
    >
      <div className="bg-gray-900 h-16 flex flex-shrink-0 items-center justify-between px-3">
        <Link to="/">
          <img src={LogoFullWhite} className="h-8 w-auto" alt="Property marketplace" />
        </Link>
        <button
          onClick={() => setSidebarActive(false)}
          className="lg:hidden p-1 -mr-2 rounded-md text-gray-200 focus:outline-none focus:text-white focus:bg-gray-800 transition duration-150 ease-in-out"
        >
          <Icon icon="close" className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Links />
      </div>
    </aside>
  );
};

export default Sidebar;
