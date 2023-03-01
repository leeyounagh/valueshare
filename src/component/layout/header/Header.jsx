import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../../styles/color";
import Dropdown from "./Dropdown";

const SlayOut = styled.header`
  width: 100%;
  height: 140px;
  padding: 35px 0 0;
  background-color: ${color.white};
  border-bottom: 1px solid ${color.gray4};
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
  text-align: left;
`;

const SProductDiv = styled.div`
  height: 100%;
  font-size: 20px;
  text-align: left;
`;

const SLookBookDiv = styled.div`
  height: 100%;
  font-size: 20px;
  text-align: left;
`;

const SMembershipDiv = styled.div`
  height: 100%;
  width: 130px;
  font-size: 20px;
  text-align: left;
`;
const SLineDiv = styled.div`
  width: 1px;
  height: 60px;
  transform: rotate(-180deg);
  background-color: #ccd1d8;
`;
const SLayoutInnerDiv = styled.div`
  display: flex;
  height: 67px;
  width: 100%;
  padding-left: 3%;
`;
const SLayoutMenuDiv = styled.div`
  width: 90%;
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
const SProfileImg = styled.img`
  width: 70px;
  height: 60px;
`;
const SProfileMenuImg = styled.img`
  width: 26px;
  height: 30px;
  margin-left: 10px;
  margin-top: 15px;
  object-fit: contain;
  cursor: pointer;
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

  a {
    color: ${color.gray1};
    font-weight: 500;
    &:hover {
      color: ${color.main} !important;
      font-weight: 600;
    }
  }
`;
const SLayoutProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 100%;
  margin-bottom: 20px;
`;

const SLayoutProfileInnerDiv = styled.div`
  .rotate {
    transform: rotate(180deg);
  }
`;
function Header() {
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

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
          </SLayoutIconItem>

          <SLineDiv />
          <SLayoutProfileDiv>
            <SLayoutProfileInnerDiv>
              <SProfileImg src="/asset/icn-profile.svg" />
            </SLayoutProfileInnerDiv>
            <SLayoutProfileInnerDiv
              onClick={() => setDropdownVisibility(!dropdownVisibility)}
            >
              <SProfileMenuImg
                className={dropdownVisibility ? "rotate" : null}
                src="/asset/Chevrons_chevron-right.svg"
              />
              {dropdownVisibility ? <Dropdown /> : null}
            </SLayoutProfileInnerDiv>
          </SLayoutProfileDiv>
        </SLayoutIconDiv>
      </SLayoutInnerDiv>
    </SlayOut>
  );
}

export default Header;
