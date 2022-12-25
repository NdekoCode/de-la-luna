import React from "react";
import { Link } from "react-router-dom";

const CartFooter = () => (
  <div className="card-body border-top ">
    <button className="btn btn-primary float-md-right me-3">
      <Link to="/checkout" className="text-light">
        Make Purchase{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 512 512"
        >
          <title>Chevron Forward</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M184 112l144 144-144 144"
          />
        </svg>
      </Link>
    </button>
    <button className="btn btn-secondary float-md-right  mr-2">
      <Link to="/" className="text-light">
        {" "}
        Continue shopping
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          viewBox="0 0 512 512"
        >
          <title>Chevron Forward</title>
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={48}
            d="M184 112l144 144-144 144"
          />
        </svg>
      </Link>
    </button>
  </div>
);
export default CartFooter;
