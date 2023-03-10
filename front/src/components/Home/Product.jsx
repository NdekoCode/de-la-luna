import React from "react";

const Product = ({ id, name, price, category }) => {
  return (
    <div className="col-xl-3 col-lg-3 col-md-4 col-6">
      <div className="card card-product-grid">
        <a href="#" className="img-wrap">
          {" "}
          <img src={`assets/images/items/${id}.jpg`} />{" "}
        </a>
        <figcaption className="info-wrap">
          <ul className="rating-stars mb-1">
            <li style={{ width: "80%" }} className="stars-active">
              <img src="assets/images/icons/stars-active.svg" alt="" />
            </li>
            <li>
              <img src="assets/images/icons/starts-disable.svg" alt="" />
            </li>
          </ul>
          <div>
            <a href="#" className="text-muted">
              {category}
            </a>
            <a href="#" className="title">
              {name}
            </a>
          </div>
          <div className="price h5 mt-2">${price}</div>
          <div
            className="btn-group btn-group-toggle float-right"
            data-toggle="buttons"
          >
            <label className="btn btn-warning active">
              <input type="radio" name="options" id="option1" checked />
              <i className="fas fa-heart"></i>
            </label>

            <label className="btn btn-success">
              <input
                onClick={() => null}
                type="radio"
                name="options"
                id="option3"
              />
              <i className="fas fa-shopping-cart"></i>
            </label>
          </div>
        </figcaption>
      </div>
    </div>
  );
};
export default Product;
