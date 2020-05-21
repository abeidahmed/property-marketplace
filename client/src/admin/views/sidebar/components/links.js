import React, { useState } from "react";
import Icon from "components/icon";
import { NavLink } from "react-router-dom";

const Links = () => {
  const [active, setActive] = useState({});

  const handleClick = menu => {
    setActive(prevState => {
      const clicked = { ...prevState };

      clicked[menu] = !clicked[menu];
      return clicked;
    });
  };

  const linkArray = [
    {
      name: "Dashboard",
      icon: "home",
      path: "/admin/dashboard"
    },
    {
      name: "Jobs",
      icon: "briefcase",
      path: "/",
      multiple: [
        {
          name: "View jobs",
          path: "/"
        },
        {
          name: "Post new job",
          path: "/"
        }
      ]
    },
    {
      name: "Events",
      icon: "calendar",
      path: "/",
      multiple: [
        {
          name: "View events",
          path: "/"
        },
        {
          name: "Post new event",
          path: "/"
        }
      ]
    },
    {
      name: "Users",
      icon: "users",
      path: "/admin/users"
    }
  ];

  return (
    <nav className="mt-2 mb-4 px-2 text-gray-400 font-medium">
      {linkArray.map(link =>
        !link.hasOwnProperty("multiple") ? (
          <NavLink
            key={link.name}
            to={link.path}
            className="mt-1 flex items-center py-2 bg-transparent px-1 rounded hover:text-gray-300 transition duration-150 ease-in-out"
          >
            <Icon icon={link.icon} className="h-6 w-6" />
            <span className="pl-2 text-sm font-medium tracking-wide leading-5">{link.name}</span>
          </NavLink>
        ) : (
          <div key={link.name} className="mt-1">
            <div
              onClick={() => handleClick(link.name)}
              className={`${
                active[link.name]
                  ? "bg-gray-900 text-gray-300 hover:bg-gray-900"
                  : "bg-transparent hover:text-gray-300"
              } py-2 flex items-center justify-between cursor-pointer px-1 rounded transition duration-150 ease-in-out`}
            >
              <p className="flex items-center">
                <Icon icon={link.icon} className="h-6 w-6" />
                <span className="pl-2 text-sm font-medium tracking-wide leading-5">
                  {link.name}
                </span>
              </p>
              <Icon
                icon="chevron-right"
                className={`${active[link.name] &&
                  "transform rotate-90"} h-5 w-5 transition duration-150 ease-in-out`}
              />
            </div>
            <div className={`${active[link.name] ? "block" : "hidden"} ml-9 mt-1`}>
              {link.multiple.map(subLink => (
                <NavLink
                  key={subLink.name}
                  to={subLink.path}
                  className="block text-sm py-1 font-normal tracking-wide hover:text-gray-300"
                >
                  {subLink.name}
                </NavLink>
              ))}
            </div>
          </div>
        )
      )}
    </nav>
  );
};

export default Links;
