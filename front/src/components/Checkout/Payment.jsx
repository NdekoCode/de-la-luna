import React from "react";

function Payment({ isValid }) {
  return (
    <button
      className="btn btn-outline-primary mt-3 d-block w-100"
      onClick={() => null}
      disabled={isValid}
    >
      Checkout
    </button>
  );
}
export default Payment;
