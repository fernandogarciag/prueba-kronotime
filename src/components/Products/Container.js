import React from "react";
import Slider from "react-slick";

const Container = ({ data }) => (
  <div className="p-5">
    <Slider {...data.settings}>
      {data.products.map((product, key) => (
        <div key={key}>
          <div className="card position-relative border-0 mx-5">
            <span className="bg-danger position-absolute end-0 p-2 rounded text-white">
              {product.discount}%
            </span>
            <a href="/">
              <img
                className="card-img-top w-50 mx-auto"
                src={product.image}
                alt="..."
                width="100"
              />
              <h6 className="text-center link-dark">{product.name}</h6>
            </a>
            <hr />
            <h5 className="text-center text-danger">
              Ahora: {product.discountPrice}
            </h5>
            <h5 className="text-center">
              Antes:{" "}
              <span style={{ textDecoration: "line-through" }}>
                {product.price}
              </span>
            </h5>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default Container;
