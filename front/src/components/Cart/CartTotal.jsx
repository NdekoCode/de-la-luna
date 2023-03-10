import React from "react";

const CartTotal = () => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Have coupon?</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-0 rounded-start"
                  name=""
                  placeholder="Coupon code"
                />
                <span className="input-group-append">
                  <button className="btn btn-primary rounded-0 rounded-end">
                    Apply
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <dl className="dlist-align">
            <dt>SubTotal:</dt>
            <dd className="text-right">$0.00</dd>
          </dl>
          <dl className="dlist-align">
            <dt>Delivery:</dt>
            <dd className="text-right">$0.00</dd>
          </dl>
          <dl className="dlist-align">
            <dt>Discount:</dt>
            <dd className="text-right">---</dd>
          </dl>
          <dl className="dlist-align">
            <dt>Total:</dt>
            <dd className="text-right  h5">
              <strong>$0.00</strong>
            </dd>
          </dl>
          <hr />
          <p className="text-center mb-3">
            <img src="assets/images/misc/payments.png" height="26" />
          </p>
        </div>
      </div>
    </>
  );
};
export default CartTotal;
