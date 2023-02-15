import React from "react";
import styled from "styled-components";

const SLayout = styled.nav`
  border: 1px solid black;
  width: 100%;
  height: 233px;
  padding: 33px 0 0;
  background-color: var(--white);
`;

const SRootHomeDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  width: 50px;
  height: 100%;
`;
const SRootTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
`;
const SHomeImg = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;
const SRootTitle = styled.div``;
const SRootDiv = styled.div`
  border: 1px solid black;
  display: flex;
  width: 50%;
  height: 30%;
  margin-left: 54px;
`;
const SRootIconDiv = styled.div``;
const SRootIcontImg = styled.img`
  width: 36px;
  height: 30px;
  transform: rotate(-90deg);
  margin-top: 10px;
`;
const SCategoryDiv = styled.div``;
const SCategoryTitle = styled.div``;
const SPageTitleDiv = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 70%;
  margin-left: 54px;
  font-size: 80px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
function Navbar() {
  return (
    <SLayout>
      <SRootDiv>
        <SRootHomeDiv>
          <SHomeImg src="asset/icon-home.svg" />
        </SRootHomeDiv>
        <SRootTitleDiv>
          <SRootTitle>Home</SRootTitle>
        </SRootTitleDiv>
        <SRootIconDiv>
          <SRootIcontImg src="asset/Chevrons_chevron-right.svg" />
        </SRootIconDiv>
        <SCategoryDiv>
          <SCategoryTitle>Category</SCategoryTitle>
        </SCategoryDiv>
      </SRootDiv>

      <SPageTitleDiv>Products</SPageTitleDiv>
    </SLayout>
  );
}

export default Navbar;
