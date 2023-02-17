/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from "react";
import Slider from "react-slick";
import ProductCard from "./ProductCard";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <ProductCard />
        </Slider>
      </div>
    );
  }
}
