import React from "react";
import Slider from "react-slick";

const Container = ({ data }) => (
  <div className="px-5">
    <Slider {...data.settings}>
      {data.images.map((image, key) => (
        <div key={key}>
          <img src={image} alt="" className="img-thumbnail" />
        </div>
      ))}
    </Slider>
  </div>
);

export default Container;
