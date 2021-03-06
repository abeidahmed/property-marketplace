import React, { useRef, useState } from "react";
import { AdminLayout } from "components/layout";
import Icon from "components/icon";
import Pagination from "./components/pagination";
import { SearchField } from "components/search";
import { useOnOutsideClick } from "utils/on-outside-click";
import UserTable from "./components/user-table";

const UserList = () => {
  const [filterActive, setFilterActive] = useState(false);

  const ref = useRef();

  useOnOutsideClick(ref, () => setFilterActive(false));

  return (
    <AdminLayout>
      <div className="flex items-center justify-between space-x-4">
        <div className="max-w-md flex-1">
          <SearchField placeholder="Search users" />
        </div>
        <div>
          <span ref={ref} className="relative shadow-sm rounded-md">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out"
              id="menu"
              aria-haspopup="true"
              onClick={() => setFilterActive(!filterActive)}
            >
              Filter
              <Icon icon="chevron-down" className="-mr-1 ml-2 h-5 w-5 text-gray-500" />
            </button>
            <div
              className={`${
                filterActive ? "block" : "hidden"
              } origin-top-right absolute right-0 mt-2 -mr-1 w-32 rounded-md shadow-lg`}
              aria-labelledby="menu"
              role="menu"
            >
              <div className="py-1 rounded-md bg-white shadow-xs">
                <button
                  className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  All
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Admin
                </button>
                <button
                  className="block w-full text-left px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
                  role="menuitem"
                >
                  Users
                </button>
              </div>
            </div>
          </span>
        </div>
      </div>
      <UserTable />
      <Pagination />
    </AdminLayout>
  );
};

export default UserList;
