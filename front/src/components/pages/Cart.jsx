import React from "react";
import PageContent from "./PageContent";

const Cart = () => {
  return (
    <PageContent>
      <main className="mx-auto max-w-7xl mt-10 sm:px-4 px-2  overflow-x-hidden">
        <div className="flex justify-center my-6">
          <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
            <div className="flex-1">
              <table
                className="w-full text-sm lg:text-base"
                aria-describedby="cart"
              >
                <thead>
                  <tr className="h-12 uppercase">
                    <th className="hidden md:table-cell" />
                    <th className="text-left">Product</th>
                    <th className="lg:text-right text-left pl-5 lg:pl-0">
                      <span className="lg:hidden" title="Quantity">
                        Qtd
                      </span>
                      <span className="hidden lg:inline">Quantity</span>
                    </th>
                    <th className="hidden text-right md:table-cell">
                      Unit price
                    </th>
                    <th className="text-right">Total price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                          className="w-20 rounded"
                          alt="Mens Casual Premium Slim Fit T-Shirts "
                        />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <p className="mb-2 md:ml-4">
                          Mens Casual Premium Slim Fit T-Shirts{" "}
                        </p>
                        <form action="/cart-delete-item" method="POST">
                          <input
                            type="hidden"
                            name="productId"
                            defaultValue="6371167815fd4e0cd219c17a"
                          />
                          <button
                            type="submit"
                            className="text-red-500 md:ml-4"
                          >
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </a>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input
                            type="number"
                            defaultValue={2}
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        22.3$
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        44.6$
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
                          className="w-20 rounded"
                          alt="Mens Cotton Jacket"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <p className="mb-2 md:ml-4">Mens Cotton Jacket</p>
                        <form action="/cart-delete-item" method="POST">
                          <input
                            type="hidden"
                            name="productId"
                            defaultValue="6371167815fd4e0cd219c17c"
                          />
                          <button
                            type="submit"
                            className="text-red-500 md:ml-4"
                          >
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </a>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input
                            type="number"
                            defaultValue={2}
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        55.99$
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        111.98$
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                          className="w-20 rounded"
                          alt="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <p className="mb-2 md:ml-4">
                          John Hardy Women's Legends Naga Gold &amp; Silver
                          Dragon Station Chain Bracelet
                        </p>
                        <form action="/cart-delete-item" method="POST">
                          <input
                            type="hidden"
                            name="productId"
                            defaultValue="6371167915fd4e0cd219c180"
                          />
                          <button
                            type="submit"
                            className="text-red-500 md:ml-4"
                          >
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </a>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input
                            type="number"
                            defaultValue={1}
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        695$
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        695$
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
                          className="w-20 rounded"
                          alt="White Gold Plated Princess"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <p className="mb-2 md:ml-4">
                          White Gold Plated Princess
                        </p>
                        <form action="/cart-delete-item" method="POST">
                          <input
                            type="hidden"
                            name="productId"
                            defaultValue="6371167915fd4e0cd219c184"
                          />
                          <button
                            type="submit"
                            className="text-red-500 md:ml-4"
                          >
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </a>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input
                            type="number"
                            defaultValue={1}
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        9.99$
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        9.99$
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="hidden pb-4 md:table-cell">
                      <a href="#">
                        <img
                          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                          className="w-20 rounded"
                          alt="Sac à dos"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="#">
                        <p className="mb-2 md:ml-4">Sac à dos</p>
                        <form action="/cart-delete-item" method="POST">
                          <input
                            type="hidden"
                            name="productId"
                            defaultValue="6371167715fd4e0cd219c16c"
                          />
                          <button
                            type="submit"
                            className="text-red-500 md:ml-4"
                          >
                            <small>(Remove item)</small>
                          </button>
                        </form>
                      </a>
                    </td>
                    <td className="justify-center md:justify-end md:flex mt-6">
                      <div className="w-20 h-10">
                        <div className="relative flex flex-row w-full h-8">
                          <input
                            type="number"
                            defaultValue={1}
                            className="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black"
                          />
                        </div>
                      </div>
                    </td>
                    <td className="hidden text-right md:table-cell">
                      <span className="text-sm lg:text-base font-medium">
                        110.95$
                      </span>
                    </td>
                    <td className="text-right">
                      <span className="text-sm lg:text-base font-medium">
                        110.95$
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <hr className="pb-6 mt-6" />
              <div className="my-4 mt-6 -mx-2 lg:flex justify-end">
                <div className="lg:px-2 lg:w-1/2">
                  <div className="p-4 bg-gray-100 rounded-full">
                    <h1 className="ml-2 font-bold uppercase">Order Details</h1>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between pt-4 border-b">
                      <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                        Total
                      </div>
                      <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                        972.5200000000001€
                      </div>
                    </div>
                    <form method="POST" action="/create-order">
                      <button
                        type="submit"
                        className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                      >
                        <svg
                          aria-hidden="true"
                          data-prefix="far"
                          data-icon="credit-card"
                          className="w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"
                          ></path>
                        </svg>
                        <span className="ml-2 mt-5px">
                          Procceed to checkout
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageContent>
  );
};

export default Cart;
