import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const { white } = color;

const SlayOut = styled.header`
  border: 1px solid black;
  width: 100%;
  height: 140px;
  margin: 0 0 16px;
  padding: 35px 0 0;
  background-color: ${white};
  display: flex;
`;
const SLogoSpan = styled.span`
  width: 251px;
  height: 67px;
  margin: 0 169px 11px 44px;
  font-family: PlayfairDisplay;
  font-size: 50px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
const SBestSellerSpan = styled.span`
  width: 105px;
  height: 24px;
  margin: 30px 159px 24px 169px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const SProductSpan = styled.span`
  width: 92px;
  height: 24px;
  margin: 30px 140px 24px 159px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const SLookBookSpan = styled.span`
  width: 95px;
  height: 24px;
  margin: 30px 132px 24px 140px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;

const SMembershipSpan = styled.span`
  width: 95px;
  height: 24px;
  margin: 30px 132px 24px 140px;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
function Header() {
  return (
    <SlayOut>
      <SLogoSpan>Value shop</SLogoSpan>
      <SBestSellerSpan>Best seller</SBestSellerSpan>
      <SProductSpan>Products</SProductSpan>
      <SLookBookSpan>lookbook</SLookBookSpan>
      <SMembershipSpan>Membership</SMembershipSpan>
    </SlayOut>
  );
}

export default Header;
