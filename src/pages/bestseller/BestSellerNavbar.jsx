import React from "react";
import styled from "styled-components";
// import color from "../../styles/color";
import color from "styles/color";

const SlayOut = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${color.gray4};
  background-color: ${color.white};
`;
const SHomeImg = styled.img`
  width: 28px;
  height: 28px;
  margin: 3px 6px 5px 0;
  object-fit: contain;
`;
const SIconImg = styled.img`
  width: 36px;
  height: 30px;
  transform: rotate(-90deg);
`;
const STitle = styled.div`
  text-align: center;
  width: auto;
  height: 100%;
  font-size: 22px;
  font-weight: 500;
  text-align: left;
  color: ${color.gray1};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

const SItemDiv = styled.div`
  width: 20px;
  height: 100%;
  font-size: 40px;
  font-weight: 500;
  text-align: left;
  color: ${color.gray1};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SLayoutInnerDiv = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  margin-left: 54px;
`;
function BestSellerNavbar() {
  return (
    <SlayOut>
      <SLayoutInnerDiv>
        <SItemDiv>
          <SHomeImg src="asset/icon-home.svg" />
        </SItemDiv>
        <STitle>Home</STitle>
        <SItemDiv>
          <SIconImg src="asset/Chevrons_chevron-right.svg" />
        </SItemDiv>
        <STitle>Best seller</STitle>
      </SLayoutInnerDiv>
    </SlayOut>
  );
}

export default BestSellerNavbar;
