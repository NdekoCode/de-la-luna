import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelected, useToggle } from "./hooks/utils";
import { appLanguage } from "./utilities/constants";

const LangNavItem = () => {
  const [isVisible, toggleVisible] = useToggle();
  const [languages, setLanguages] = useState(appLanguage);
  const [selectedLanguage, toggleSelected] = useSelected(appLanguage[0]);
  const handleLang = (value) => {
    toggleSelected(value);
    toggleVisible(false);
  };
  return (
    <div className="flex items-center relative">
      <button
        onClick={toggleVisible}
        type="button"
        data-dropdown-toggle="language-dropdown-menu"
        className="inline-flex items-center justify-center p-2 text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        {selectedLanguage.icon} {selectedLanguage.title}
      </button>
      {/* Dropdown */}
      {isVisible && (
        <div
          className="absolute top-5 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700"
          id="language-dropdown-menu"
        >
          <ul className="py-1" role="none">
            {languages.map((lang, index) => (
              <li key={index} onClick={() => handleLang(lang)}>
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
