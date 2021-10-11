import React from "react";
import Slider from "react-slick";

const Container = ({ data }) => (
  <div className="px-5">
    <Slider {...data.settings}>
      {data.images.map((image, key) => (
        <div key={key}>
          <picture>
            <source
              media="(min-width:768px)"
              srcSet={image.desktop}
              className="img-thumbnail"
            />
            <source
              media="(min-width:320px)"
              srcSet={image.mobile}
              className="img-thumbnail"
            />
            <img src={image.mobile} alt="Flowers" className="img-thumbnail" />
          </picture>
        </div>
      ))}
    </Slider>
  </div>
);

export default Container;
