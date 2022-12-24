import React from "react";
import { NavLink } from "react-router-dom";
import { navRoutes } from "./utilities/routes";

const NavBarLinks = () => {
  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="mobile-menu-language-select"
    >
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {navRoutes.map(({ title, path }, index) => (
          <li key={index}>
            <NavLink
              to={path}
              className="block py-2 pl-3 pr-4 rounded md:bg-transparent text-gray-700 md:p-0 dark:text-white"
              aria-current="page"
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBarLinks;
