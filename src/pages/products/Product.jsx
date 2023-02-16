import React from "react";
import styled from "styled-components";
import Navbar from "component/Navbar";
import Brands from "component/produts/Brands";
import Card from "component/produts/Card";
import Filters from "component/produts/Filters";

const SLayout = styled.div`
  border: 1px solid black;
  width: 100%;
`;

const SCategoryDiv = styled.div``;

const SCardDiv = styled.div``;
const SItemInnerDiv = styled.div`
  border: 1px solid black;
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
