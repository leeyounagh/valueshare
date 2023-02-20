import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

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
    const Logoimg = styled.img`
      object-fit: contain;
      align-items: center;
      padding: 0 30px;
      width: 180px;
      height: 100px;
    `;
    return (
      <div>
        <Slider {...settings}>
          <div>
            <Logoimg src="../asset/img-logo1.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo2.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo3.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo4.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo1.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo2.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo3.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo4.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo1.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo2.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo3.png" />
          </div>
          <div>
            <Logoimg src="../asset/img-logo4.png" />
          </div>
        </Slider>
      </div>
    );
  }
}
