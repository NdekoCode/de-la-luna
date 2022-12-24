import React from "react";

const CookieBanner = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 px-4 lg:px-10 pb-16">
      <div className="relative p-14 bg-gray-500 rounded-xl">
        <div
          className="absolute top-0 -mt-6 left-0 ml-12 w-14 h-14 bg-gray-500"
          style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
        />
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-auto px-4 mb-4 lg:mb-0">
            <h3 className="mb-2 text-2xl font-bold font-heading text-white">
              Cookie Policy
            </h3>
            <p className="max-w-xs text-gray-200 leading-loose">
              By clicking “Accept”, you agree to the storing of cookies on your
              device to enhance site navigation...
            </p>
          </div>
          <div className="w-full md:w-1/3 px-4 flex">
            <a
              className="inline-flex ml-auto items-center px-8 py-4 mr-2 text-lg text-white hover:text-gray-100 font-bold"
              href="#"
            >
              <span>More</span>
              <svg
                className="ml-3 w-6 h-4"
                width={27}
                height={15}
                viewBox="0 0 27 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.0851 7.66792L19.398 14.355L18.5621 13.5192L24.242 7.83927L0.590432 7.84345L0.590431 6.66485L24.242 6.66067L18.98 1.39873L19.8159 0.562843L26.0851 6.83202C26.3159 7.06286 26.3159 7.43708 26.0851 7.66792Z"
                  fill="white"
                />
              </svg>
            </a>
            <a
              className="inline-block px-12 py-4 text-lg bg-transparent text-white font-bold border border-gray-300 hover:border-gray-200 rounded-full"
              href="#"
            >
              Accept
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
