import React from "react";
import styled from "styled-components";
import Navbar from "component/Navbar";
import Brands from "component/produts/Brands";
import Card from "component/produts/Card";
import Filters from "component/produts/Categories";

const SLayout = styled.div`
  width: 100%;
`;

const SCategoryDiv = styled.div`
  width: 17%;
`;

const SCardDiv = styled.div`
  padding-top: 100px;
  padding-left: 50px;
  width: 80%;
`;
const SItemInnerDiv = styled.div`
  display: flex;
`;

function Product() {
  return (
    <SLayout>
      <Navbar />
      <SItemInnerDiv>
        <SCategoryDiv>
          <Filters />
          <Brands />
        </SCategoryDiv>
        <SCardDiv>
          <Card />
        </SCardDiv>
      </SItemInnerDiv>
    </SLayout>
  );
}

export default Product;
