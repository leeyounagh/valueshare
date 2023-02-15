import React from "react";
import styled from "styled-components";
import color from "../../styles/color";

const { gray4 } = color;

const SlayOut = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${gray4};
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
  margin-top: 10px;
`;
const STitle = styled.div`
  text-align: center;
  width: 120px;
  height: 100%;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SItemDiv = styled.div`
  width: 20px;
  height: 100%;
  font-size: 40px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SProductTitle = styled.div`
  white-space: nowrap;
  width: 257px;
  height: 100%;
  font-family: Montserrat;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
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
function Navbar() {
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
        <STitle>Category</STitle>
        <SItemDiv>
          <SIconImg src="asset/Chevrons_chevron-right.svg" />
        </SItemDiv>
        <SProductTitle>Mylockme Chain Bag</SProductTitle>
      </SLayoutInnerDiv>
    </SlayOut>
  );
}

export default Navbar;
