import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import color from "styles/color";
import Navbar2 from "component/Navbar2";
import Btn1 from "component/button/Btn1";
import Btn2 from "component/button/Btn2";

const Slayout = styled.div`
  width: 100%;
  height: 1500px;
<<<<<<< HEAD
=======
  background-color: ${color.white};
>>>>>>> ccf00d4abd1ce891c0a5fe33cce47d739057333a
`;

const DetailLayout = styled.div`
  display: flex;
  h1 {
    font-size: 40px;
  }
  .slick-next {
<<<<<<< HEAD
    right: -145px;
=======
    right: -15%;
>>>>>>> ccf00d4abd1ce891c0a5fe33cce47d739057333a
  }
  .slick-next:before {
    background: url("/asset/icn-arrow-next.svg") no-repeat center center;
    color: transparent;
  }
  .slick-prev {
<<<<<<< HEAD
    left: 270px;
=======
    left: 35%;
>>>>>>> ccf00d4abd1ce891c0a5fe33cce47d739057333a
    z-index: 1;
  }
  .slick-list {
    border-radius: 15px;
    border: 1px solid ${color.gray4};
  }
  .slick-prev:before {
    background: url("/asset/icn-arrow-prev.svg") no-repeat center center;
    color: transparent;
  }
  .slick-slide {
    box-sizing: border-box;
  }
  .slick-slider {
    width: 50%;
  }
  .slick-initialized .slick-slide {
  }
  .slick-list {
    width: 90%;
    height: auto;
    left: 30%;
    top: 110px;
  }
  .slick-dots {
<<<<<<< HEAD
    width: 25%;
=======
    margin-left: 2%;
    width: 20%;
>>>>>>> ccf00d4abd1ce891c0a5fe33cce47d739057333a
    display: flex !important;
    flex-direction: column;
    height: 1090px;
    line-height: 3.4;
    padding-top: 90px;
  }
  .slick-dots li {
    width: 100%;
    height: auto;
  }
  li.slick-active {
    a{
      div{
        display: none;
      }
    }
  }
  }
`;
const ProductInfo = styled.div`
  width: 30%;
  position: relative;
  left: 12%;
`;
const ProductBrand = styled.div`
  margin-top: 100px;
  font-size: 18px;
  font-weight: bold;
  color: ${color.gray3};
`;
const ProductTitle = styled.div`
  margin-top: 12px;
  font-size: 40px;
  font-weight: bold;
`;

const ProductDescription = styled.div`
  margin-top: 50px;
  font-size: 18px;
  color: ${color.gray3};
`;

const ProductPrice = styled.div`
  width: 600px;
  font-size: 40px;
  color: ${color.main};
  position: absolute;
  bottom: 80px;
  text-align: right;
  right: 10px;
<<<<<<< HEAD
=======
  font-weight: 600;
>>>>>>> ccf00d4abd1ce891c0a5fe33cce47d739057333a
`;
const ProductImgLiDiv = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${color.gray4};
  position: absolute;
  border-radius: 15px;
  opacity: 0.5;
`;
const ProductImgLi = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 15px;
<<<<<<< HEAD
=======
  object-fit: cover;
>>>>>>> ccf00d4abd1ce891c0a5fe33cce47d739057333a
`;

const ProductImgDiv = styled.div`
  width: auto;
  height: 1080px;
  display: flex;
`;
const ProductImg = styled.img`
  width: 100%;
  height: 1090px;
  object-fit: cover;
`;

const ProductDetailInfo = styled.div`
  margin-top: 60px;
  color: ${color.gray1};
  p {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${color.gray4};
  margin-top: 80px;
`;

const BtnDiv = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  top: 1050px;

  div {
    margin: 20px 0;
  }
`;

function Detail() {
  const [productInformation, setProductInformation] = useState(null);

  const { productid } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/products/${productid}`)
      .then((res) => {
        setProductInformation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const settings = {
    /* eslint-disable */
    customPaging(i) {
      return (
        <a>
          <ProductImgLiDiv />
<<<<<<< HEAD
          <ProductImgLi src={productInformation?.result.productImage[i]} />
=======
          <ProductImgLi
            key={i}
            src={productInformation?.result.productImage[i]}
          />
>>>>>>> ccf00d4abd1ce891c0a5fe33cce47d739057333a
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slayout>
      <Navbar2 />
      <DetailLayout>
        <Slider {...settings}>
          <ProductImgDiv>
            <ProductImg
              src={productInformation?.result.productImage[0]}
              alt="0"
            />
          </ProductImgDiv>
          <ProductImgDiv>
            <ProductImg
              src={productInformation?.result.productImage[1]}
              alt="1"
            />
          </ProductImgDiv>
          <ProductImgDiv>
            <ProductImg
              src={productInformation?.result.productImage[2]}
              alt="2"
            />
          </ProductImgDiv>
          <ProductImgDiv>
            <ProductImg
              src={productInformation?.result.productImage[3]}
              alt="3"
            />
          </ProductImgDiv>
          <ProductImgDiv>
            <ProductImg
              src={productInformation?.result.productImage[4]}
              alt="4"
            />
          </ProductImgDiv>
        </Slider>
        <ProductInfo>
          <ProductBrand>
            {productInformation?.result.productBrand.brandName}
          </ProductBrand>
          <ProductTitle>{productInformation?.result.productTitle}</ProductTitle>
          <ProductDescription>
            {productInformation?.result.productDescription}
          </ProductDescription>
          <DivideLine />
          <ProductDetailInfo>
            <p>상세정보</p>
            {productInformation?.result.productDetail
              .split("\n")
              .map((line) => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
          </ProductDetailInfo>
          <BtnDiv>
            <Btn1 title="장바구니에 추가" />
            <Btn2 title="구매하기" />
          </BtnDiv>
          <ProductPrice>
            ₩{productInformation?.result.productPrice}
          </ProductPrice>
        </ProductInfo>
      </DetailLayout>
    </Slayout>
  );
}

export default Detail;
