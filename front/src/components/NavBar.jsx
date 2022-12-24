import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoLetter from "../assets/images/logo/logo-letter.svg";
import logo from "../assets/images/logo/logo.svg";
import DropDownUser from "./DropDownUser";
import LangNavItem from "./LangNavItem";
import NavBarLinks from "./NavBarLinks";
import SearchBar from "./SearchBar";
const NavBar = () => {
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900 after:h-px after:bg-gray-200 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-11/12 after:block">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <Link to="/" className="flex items-center">
            <img className="block lg:hidden w-40" src={logoLetter} alt="Logo" />
            <img
              className="hidden lg:block h-12 w-auto"
              src={logo}
              alt="Logo"
            />
          </Link>

          <div className="flex items-center">
            <LangNavItem />
            <Link
              href="tel:5541251234"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </Link>
            <NavLink
              href="#"
              className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Login
            </NavLink>
            <DropDownUser />
          </div>
        </div>
      </nav>
      <nav className="max-w-screen-xl px-4 py-3 mx-auto md:px-6 bg-white dark:bg-gray-700 shadow-md flex items-center">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <SearchBar />
          <NavBarLinks />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
