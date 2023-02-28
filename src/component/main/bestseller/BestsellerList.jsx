import React, { Component } from "react";
import Slider from "react-slick";
import Btn2 from "component/button/Btn2";
import styled from "styled-components";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import color from "../../../styles/color";

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
      z-index: 2;
      position: relative;
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
      z-index: 2;
      position: relative;
    }
    .slick-dots {
      bottom: 4px;
    }
  }

  a {
    width: 140px;
    color: ${color.gray1};
    font-size: 18px;
    font-weight: 500;
    position: absolute;
    right: 10%;
    margin-top: -18px;
    cursor: pointer;
    text-decoration: none;
    z-index: 2;
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

const SCardDiv = styled.div`
  width: 360px;
  height: 550px;
  margin: 46px 74px 50px 91px;
  padding: 28px 25px 19px 19px;
  border: solid 1px ${color.gray4};
  background-color: ${color.white};
  color: ${color.gray1};

  &:hover {
    border: solid 1px ${color.main};
    color: ${color.main};
  }
`;
const SCardBrand = styled.div`
  padding-left: 10px;
  width: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
`;
const SCartImg = styled.img`
  width: 30px;
  height: 30px;
`;
const SPriceText = styled.div`
  width: 103px;
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  line-height: normal;
  text-align: left;
`;
const SCardImg = styled.img`
  width: 310px;
  height: 350px;
  margin: 0 0 22px 6px;
  object-fit: cover;
`;
const SCardTitleDiv = styled.div`
  width: 100%;
`;
const SCartDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  margin-top: 20px;
`;
const SCardBrandNameDiv = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  padding-left: 10px;
`;
const SCartImgDiv = styled.div``;

const Bestsellerimages = [
  "/asset/img-bestseller1.png",
  "/asset/img-bestseller2.png",
  "/asset/img-bestseller3.png",
  "/asset/img-bestseller4.png",
  "/asset/img-bestseller5.png",
  "/asset/img-bestseller6.png",
];

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
          <Link to="/bestseller">
            <Btn2 title="View More" />
          </Link>
          <Slider {...settings}>
            {Bestsellerimages.map((image) => {
              return (
                <div key={uuid()}>
                  <SCardDiv>
                    <SCardImg src={image} alt="상품썸네일" />
                    <SCardTitleDiv>
                      <SCardBrand>Converse All Star </SCardBrand>
                      <SCardBrandNameDiv>1970s Hi</SCardBrandNameDiv>
                    </SCardTitleDiv>
                    <SCartDiv>
                      <Link to="/cart">
                        <SCartImgDiv>
                          <SCartImg src="asset/icn-basket.svg" alt="장바구니" />
                        </SCartImgDiv>
                      </Link>
                      <SPriceText> ₩ 60,000</SPriceText>
                    </SCartDiv>
                  </SCardDiv>
                </div>
              );
            })}
          </Slider>
        </div>
        <BgImg1 src="/asset/bg-Ellipse3.svg" />
        <BgImg2 src="/asset/bg-star.svg" />
      </Slayout>
    );
  }
}
