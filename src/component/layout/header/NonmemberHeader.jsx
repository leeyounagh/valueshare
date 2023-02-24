import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import color from "../../../styles/color";

const { white, gray4 } = color;

const SlayOut = styled.header`
  width: 100%;
  height: 140px;
  padding: 35px 0 0;
  background-color: ${white};
  border-bottom: 1px solid ${gray4};
  display: flex;
  a {
    text-decoration: none;
    border: black;
  }
`;
const SLogoDiv = styled.div`
  width: 20%;
  height: 100%;
  color: black;
  white-space: nowrap;

  a {
    font-weight: bold;

    line-height: normal;

    text-align: left;
    color: black;
    font-family: "Rufina", serif;
    font-weight: 900;

    align-items: center;
  }
  h2 {
    font-family: "Rufina", serif;
    font-size: 60px;
    font-weight: 900;
  }
`;
const SBestSellerDiv = styled.div`
  height: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${color.black};
`;

const SProductDiv = styled.div`
  height: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${color.black};
`;

const SLookBookDiv = styled.div`
  height: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${color.black};
`;

const SMembershipDiv = styled.div`
  height: 100%;
  width: 130px;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${color.black};
`;
const SLineDiv = styled.div`
  width: 1px;
  height: 60px;
  transform: rotate(-180deg);
  background-color: ${color.gray4};
`;
const SLayoutInnerDiv = styled.div`
  display: flex;
  height: 67px;
  width: 100%;
  padding-left: 40px;
`;
const SLayoutMenuDiv = styled.div`
  width: 60%;
  height: 67px;
  display: flex;
  justify-content: flex-end;
  padding-top: 25px;
`;
const SLayoutIconDiv = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  width: 25%;
  padding-top: 18px;
  margin-left: 24px;
`;

const SBasketImg = styled.img`
  width: 46px;
  height: 40px;
  object-fit: contain;
`;

const SLayoutIconItem = styled.div`
  margin: 5px;
  height: 100%;
  width: 20%;
  position: relative;
`;
const SInnerItemDiv = styled.div`
  justify-content: space-between;
  width: 60%;
  height: 100%;
  display: flex;
`;
const SLayoutProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100%;
  margin-bottom: 20px;
`;
const SLayoutProfileInnerDiv = styled.div`
  font-size: 18px;
  padding-top: 16px;

  a {
    color: ${color.gray3} !important;
    padding: 0 10px;
  }
`;
const SBadageDiv = styled.div`
  position: absolute;
  top: -10px;
  left: 33px;
`;
function Header() {
  const cartQuantity = useSelector((state) => {
    return state.CartItemReducer;
  });
  console.log(cartQuantity, "확인");
  return (
    <SlayOut>
      <SLayoutInnerDiv>
        <SLogoDiv>
          <Link to="/">
            <h2>value shop</h2>
          </Link>
        </SLogoDiv>
        <SLayoutMenuDiv>
          <SInnerItemDiv>
            <Link to="/bestseller">
              <SBestSellerDiv>Best seller</SBestSellerDiv>
            </Link>
            <Link to="/product">
              <SProductDiv>Products</SProductDiv>
            </Link>
            <Link to="/lookbook">
              <SLookBookDiv>lookbook</SLookBookDiv>
            </Link>
            <Link to="/membership">
              <SMembershipDiv>Membership</SMembershipDiv>
            </Link>
          </SInnerItemDiv>
        </SLayoutMenuDiv>
        <SLayoutIconDiv>
          <SLayoutIconItem>
            <Link to="/cart">
              <SBasketImg src="/asset/icn-basket.svg" />
            </Link>
            <SBadageDiv>
              <Badge style={{ borderRadius: "10px" }} bg="warning">
                {cartQuantity.cartItem}
              </Badge>
            </SBadageDiv>
          </SLayoutIconItem>
          <SLineDiv />
          <SLayoutProfileDiv>
            <SLayoutProfileInnerDiv>
              <Link to="/login">Login</Link>
              <Link to="/myorder">My Order</Link>
            </SLayoutProfileInnerDiv>
          </SLayoutProfileDiv>
        </SLayoutIconDiv>
      </SLayoutInnerDiv>
    </SlayOut>
  );
}

export default Header;
