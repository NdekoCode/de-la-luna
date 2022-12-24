import React from "react";
import { NavLink } from "react-router-dom";
import { authLinks } from "./utilities/routes";

const AuthLinks = () => {
  return (
    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      {authLinks.map(({ title, path }, index) => (
        <li key={index}>
          <NavLink
            to={path}
            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            aria-current="page"
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default AuthLinks;
