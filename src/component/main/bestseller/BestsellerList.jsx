import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import BestSellerCard from "../../BestSellerCard";

const Slayout = styled.div`
  h2 {
    margin-top: 120px;
    margin-bottom: 40px;
    font-size: 50px;
    text-align: center;
    font-family: "Rufina", serif;
    z-index: 1;
  }
  div {
    .slick-next {
      width: 36px;
      height: 36px;
      right: 2%;
      margin-top: -311px;
    }
    .slick-next:before {
      background: url("/asset/icn-arrow-next.svg") no-repeat center center;
      color: transparent;
    }
    .slick-prev {
      width: 36px;
      height: 36px;
      left: 92%;
      margin-top: -311px;
    }
    .slick-prev:before {
      background: url("/asset/icn-arrow-prev.svg") no-repeat center center;
      color: transparent;
    }
    .slick-dots {
      bottom: 4px;
    }
  }
`;

const BgImg1 = styled.img`
  position: absolute;
  left: 40%;
  top: 1090px;
  opacity: 0.6;
  scale: 0.8;
`;

const BgImg2 = styled.img`
  position: absolute;
  right: 35%;
  top: 1090px;
  opacity: 0.6;
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
      }}
      onClick={onClick}
    />
  );
}

export default class BestsellerList extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Slayout>
        <div>
          <h2>Best Seller</h2>
          <Slider {...settings}>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
            <div>
              <BestSellerCard />
            </div>
          </Slider>
        </div>
        <BgImg1 src="/asset/bg-Ellipse3.svg" />
        <BgImg2 src="/asset/bg-star.svg" />
      </Slayout>
    );
  }
}
