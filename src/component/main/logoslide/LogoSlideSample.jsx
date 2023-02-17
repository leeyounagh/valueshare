import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      arrows: true,
      infinite: true,
      slidesToShow: 9,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };

    const Box = styled.div`
      width: auto;
      height: auto;
    `;
    const Logoimg = styled.img`
      width: auto;
      height: auto;
      object-fit: contain;
    `;

    const SlayOut = styled.div`
    width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: 200px;
  padding 0 5%;
`;

    return (
      <SlayOut>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <Box>
            <Logoimg src="../asset/img-logo1.png" />
          </Box>
          <Box>
            <Logoimg src="../asset/img-logo2.png" />
          </Box>
          <Box>
            <Logoimg src="../asset/img-logo3.png" />
          </Box>
          <Box>
            <Logoimg src="../asset/img-logo4.png" />
          </Box>
        </Slider>
      </SlayOut>
    );
  }
}
