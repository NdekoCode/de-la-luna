import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelected, useToggle } from "./hooks/utils";
import { appLanguage } from "./utilities/constants";

const LangNavItem = () => {
  const [isVisible, toggleVisible] = useToggle();
  const [selectedLanguage, toggleSelected] = useSelected(null);
  const [languages, setLanguages] = useState(appLanguage);
  return (
    <div className="flex items-center relative">
      <button
        onClick={toggleVisible}
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        className="inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {selectedLanguage ? (
          <>
            {selectedLanguage.icon} {selectedLanguage.title}
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5 mr-2 rounded-full"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 3900 3900"
            >
              <path fill="#b22234" d="M0 0h7410v3900H0z" />
              <path
                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                stroke="#fff"
                strokeWidth={300}
              />
              <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
              <g fill="#fff">
                <g id="d">
                  <g id="c">
                    <g id="e">
                      <g id="b">
                        <path
                          id="a"
                          d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                        />
                        <use xlinkHref="#a" y={420} />
                        <use xlinkHref="#a" y={840} />
                        <use xlinkHref="#a" y={1260} />
                      </g>
                      <use xlinkHref="#a" y={1680} />
                    </g>
                    <use xlinkHref="#b" x={247} y={210} />
                  </g>
                  <use xlinkHref="#c" x={494} />
                </g>
                <use xlinkHref="#d" x={988} />
                <use xlinkHref="#c" x={1976} />
                <use xlinkHref="#e" x={2470} />
              </g>
            </svg>
            English (US)
          </>
        )}
      </button>
      {/* Dropdown */}
      {isVisible && (
        <div
          className="absolute top-5 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
          id="language-dropdown-menu"
        >
          <ul className="py-1" role="none">
            {languages.map((lang, index) => (
              <li key={index} onClick={() => toggleSelected(lang)}>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    {lang.icon}
                    {lang.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LangNavItem;
