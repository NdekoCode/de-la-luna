import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const links = ["Home", "About"];
  return (
    <div className="navbar-dark bg-primary">
      <nav className="container px-4 navbar navbar-expand-lg">
        <Link className="navbar-brand text-white" to={"/"}>
          <b>AZ-Marketplace</b>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto menu">
            {links.map((link) => {
              return (
                <li className="me-4 text-white" key={link} onClick={() => {}}>
                  <NavLink
                    className="link"
                    to={`/${link == "Home" ? "" : link}`}
                  >
                    {link}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <form className="d-flex my-2 my-lg-0">
            <input
              className="form-control rounded-0 rounded-start"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="rounded-0 rounded-end btn btn-outline-light my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
