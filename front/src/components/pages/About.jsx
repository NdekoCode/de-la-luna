import React from "react";

const About = () => {
  return (
    <>
      <section className="pt-24 pb-32 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <h2 className="mb-28 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">
            We make things easy for your business
          </h2>
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2">
                  <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      1
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200" />
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                A complete UI kit for building your business
              </h3>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2">
                  <div className="relative w-14 h-14 text-2xl text-white font-bold bg-indigo-600 rounded-full">
                    <img
                      className="absolute top-0 left-0"
                      src="flaro-assets/images/how-it-works/gradient.svg"
                      alt=""
                    />
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      2
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200" />
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                A complete UI kit for building your business
              </h3>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2">
                  <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      3
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200" />
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                A complete UI kit for building your business
              </h3>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-8">
              <div className="flex flex-wrap items-center mb-7 -m-2">
                <div className="w-auto p-2">
                  <div className="relative w-14 h-14 text-2xl font-bold font-heading bg-indigo-100 rounded-full">
                    <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      4
                    </span>
                  </div>
                </div>
                <div className="flex-1 p-2">
                  <div className="w-full h-px bg-gray-200" />
                </div>
              </div>
              <h3 className="text-xl font-semibold leading-normal md:max-w-xs">
                A complete UI kit for building your business
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="relative pt-24 pb-28 bg-white overflow-hidden">
        <img
          className="absolute right-0 bottom-0"
          src="flaro-assets/images/applications/gradient.svg"
          alt=""
        />
        <div className="relative z-10 container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
              <div className="md:max-w-2xl">
                <p className="mb-7 text-sm text-indigo-600 font-semibold uppercase">
                  👋 Meet new Flaro
                </p>
                <h2 className="mb-8 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none">
                  Start with ease,Grow your business
                </h2>
                <p className="mb-10 text-lg text-gray-600 font-medium leading-normal md:max-w-md">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Malesuada tellus vestibulum, commodo pulvinar.
                </p>
                <a className="mb-20 inline-block" href="#">
                  <img
                    src="flaro-assets/images/applications/app-store-round.png"
                    alt=""
                  />
                </a>
                <h3 className="mb-3 text-gray-900 font-bold font-heading">
                  Trusted by 1M+ customers
                </h3>
                <div className="flex flex-wrap items-center -m-1">
                  <div className="w-auto p-1">
                    <div className="flex flex-wrap -m-0.5">
                      <div className="w-auto p-0.5">
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                            fill="#6366F1"
                          />
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                            fill="#6366F1"
                          />
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                            fill="#6366F1"
                          />
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                            fill="#6366F1"
                          />
                        </svg>
                      </div>
                      <div className="w-auto p-0.5">
                        <svg
                          width={17}
                          height={16}
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                            fill="#6366F1"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-1">
                    <div className="flex flex-wrap -m-0.5">
                      <div className="w-auto p-0.5">
                        <p className="text-gray-900 font-bold">4.2/5</p>
                      </div>
                      <div className="w-auto p-0.5">
                        <p className="text-gray-600 font-medium">
                          (45k Reviews)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 self-end">
              <img
                className="relative top-28 transform hover:scale-105 transition ease-in-out duration-1000"
                src="flaro-assets/images/applications/iphone.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blueGray-50">
        <div className="container mx-auto overflow-hidden">
          <div className="flex items-center justify-between px-4 py-5 bg-blueGray-50">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto mr-14">
                  <a href="#">
                    <img src="flaro-assets/logos/flaro-logo-black.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto hidden lg:block">
                  <ul className="flex items-center mr-16">
                    <li className="mr-9 font-medium hover:text-gray-700">
                      <a href="#">Features</a>
                    </li>
                    <li className="mr-9 font-medium hover:text-gray-700">
                      <a href="#">Solutions</a>
                    </li>
                    <li className="mr-9 font-medium hover:text-gray-700">
                      <a href="#">Resources</a>
                    </li>
                    <li className="font-medium hover:text-gray-700">
                      <a href="#">Pricing</a>
                    </li>
                  </ul>
                </div>
                <div className="w-auto hidden lg:block">
                  <div className="inline-block">
                    <button
                      className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                      type="button"
                    >
                      Try 14 Days Free Trial
                    </button>
                  </div>
                </div>
                <div className="w-auto lg:hidden">
                  <a href="#">
                    <svg
                      className="navbar-burger text-indigo-600"
                      width={51}
                      height={51}
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width={56}
                        height={56}
                        rx={28}
                        fill="currentColor"
                      />
                      <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
            <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80" />
            <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
              <div className="flex flex-wrap justify-between h-full">
                <div className="w-full">
                  <div className="flex items-center justify-between -m-2">
                    <div className="w-auto p-2">
                      <a className="inline-block" href="#">
                        <img
                          src="flaro-assets/logos/flaro-logo-black.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="w-auto p-2">
                      <a className="navbar-burger" href="#">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6M6 6L18 18"
                            stroke="#111827"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center py-16 w-full">
                  <ul>
                    <li className="mb-12">
                      <a className="font-medium hover:text-gray-700" href="#">
                        Features
                      </a>
                    </li>
                    <li className="mb-12">
                      <a className="font-medium hover:text-gray-700" href="#">
                        Solutions
                      </a>
                    </li>
                    <li className="mb-12">
                      <a className="font-medium hover:text-gray-700" href="#">
                        Resources
                      </a>
                    </li>
                    <li>
                      <a className="font-medium hover:text-gray-700" href="#">
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-end w-full pb-8">
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <div className="block">
                        <button
                          className="py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                          type="button"
                        >
                          Try 14 Days Free Trial
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="overflow-hidden pt-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -m-8">
              <div className="w-full md:w-1/2 p-8">
                <div className="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
                  <div className="flex flex-wrap items-center -m-1">
                    <div className="w-auto p-1">
                      <a className="text-sm" href="">
                        👋 We are hiring! View open roles
                      </a>
                    </div>
                    <div className="w-auto p-1">
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                          stroke="black"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <h1 className="mb-6 text-6xl md:text-8xl lg:text-10xl font-bold font-heading md:max-w-xl leading-none">
                  Discover mentors that helps you grow
                </h1>
                <p className="mb-11 text-lg text-gray-900 font-medium md:max-w-md">
                  Get the best-in-class group mentoring plans and professional
                  benefits for your team
                </p>
                <div className="flex flex-wrap -m-2.5 mb-20">
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                      <button
                        className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                        type="button"
                      >
                        Join Free for 30 Days
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-auto p-2.5">
                    <div className="block">
                      <button
                        className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200"
                        type="button"
                      >
                        <div className="flex flex-wrap justify-center items-center -m-1">
                          <div className="w-auto p-1">
                            <svg
                              width={19}
                              height={18}
                              viewBox="0 0 19 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                          <div className="w-auto p-1">
                            <span>Book a call</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <p className="mb-6 text-sm text-gray-500 font-semibold uppercase">
                  Trusted and loved by 100+ tech first teams
                </p>
                <div className="flex flex-wrap -m-3">
                  <div className="w-auto p-3">
                    <img src="flaro-assets/logos/brands/brand.png" alt="" />
                  </div>
                  <div className="w-auto p-3">
                    <img src="flaro-assets/logos/brands/brand2.png" alt="" />
                  </div>
                  <div className="w-auto p-3">
                    <img src="flaro-assets/logos/brands/brand3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8">
                <img
                  className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                  src="flaro-assets/images/headers/header.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-32 bg-white overflow-hidden">
        <img
          className="absolute left-0 top-0"
          src="flaro-assets/images/features/elipse.svg"
          alt=""
        />
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -m-8">
            <div className="w-full md:w-1/2 p-8">
              <h2 className="mb-6 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight">
                Build better customer experiences with Flaro
              </h2>
              <p className="font-sans text-lg text-gray-900 leading-relaxed md:max-w-lg">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-8">
              <img
                className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                src="flaro-assets/images/features/feature.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-24 pb-28 bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-lg mx-auto">
            <h2 className="mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight">
              Collaborate efficiently with the teams today
            </h2>
            <p className="mb-7 text-lg text-gray-600 font-medium">
              Amet minim mollit non deserunt ullamco.
            </p>
            <div className="mb-11 md:inline-block">
              <button
                className="py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
                type="button"
              >
                Join Free for 30 Days
              </button>
            </div>
            <div className="flex flex-wrap items-center justify-center -m-1">
              <div className="w-auto p-1">
                <div className="flex flex-wrap">
                  <div className="w-auto">
                    <img
                      src="flaro-assets/images/cta/avatar-circle.png"
                      alt=""
                    />
                  </div>
                  <div className="w-auto -ml-3">
                    <img
                      src="flaro-assets/images/cta/avatar-circle2.png"
                      alt=""
                    />
                  </div>
                  <div className="w-auto -ml-3">
                    <img
                      src="flaro-assets/images/cta/avatar-circle3.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="w-auto p-1">
                <p className="text-gray-600 font-medium">
                  <span>Join</span>
                  <span className="font-bold">250+</span>
                  <span>other startup founders</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
