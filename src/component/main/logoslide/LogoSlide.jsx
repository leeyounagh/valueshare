import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import uuid from "react-uuid";
import styled from "styled-components";

const Logoimg = styled.img`
  object-fit: contain;
  align-items: center;
  padding: 0 30px;
  width: 180px;
  height: 100px;
`;

const logoimages = [
  "/asset/img-logo1.png",
  "/asset/img-logo2.png",
  "/asset/img-logo3.png",
  "/asset/img-logo4.png",
  "/asset/img-logo1.png",
  "/asset/img-logo2.png",
  "/asset/img-logo3.png",
  "/asset/img-logo4.png",
  "/asset/img-logo1.png",
  "/asset/img-logo2.png",
  "/asset/img-logo3.png",
];

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };

    return (
      <div>
        <Slider {...settings}>
          {logoimages.map((logoimage) => (
            <div key={uuid()}>
              <Logoimg src={logoimage} />
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
