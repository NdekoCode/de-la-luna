import React from "react";
import { Link } from "react-router-dom";

const UserLogin = ({ user }) => {
  return (
    <>
      <li>
        <span className="nav-link">
          {!!user ? (
            <>
              <button className="btn btn-danger btn-sm" onClick={() => null}>
                logout
              </button>
              <span>
                <b>Hi, Client</b>
              </span>
            </>
          ) : (
            <span>
              <Link to="/login">login</Link> or{" "}
              <Link to="/register">register</Link>
            </span>
          )}
        </span>
      </li>
    </>
  );
};

const Header = () => {
  return (
    <nav className="navbar d-flex p-md-0 navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTop4"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container collapse navbar-collapse" id="navbarTop4">
          <ul className="navbar-nav me-auto">
            <UserLogin />
            <li>
              <a href="#" className="nav-link" disabled={true}>
                Deals
              </a>
            </li>
            <li>
              <Link className="nav-link" to="/help">
                Help
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li>
              <a href="#" className="nav-link">
                <img src="assets/images/icons/flags/US.png" height="16" /> Ship
                to{" "}
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                {" "}
                Watchlist{" "}
              </a>
              <ul className="dropdown-menu small">
                <li>
                  <a className="dropdown-item" href="#">
                    First item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Second item
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Third item{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="nav-link" disabled={true}>
                {" "}
                My Orders{" "}
              </a>
            </li>
            <li>
              <Link to="/cart" className="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  fill="none"
                  viewBox="0 0 512 512"
                >
                  <title>Notifications</title>
                  <path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link to={"/cart"} className="nav-link">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li>
              {" "}
              <span className="badge badge-primary">{/* cart quantity */}</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
