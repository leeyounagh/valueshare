import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import color from "../styles/color";

const { gray4 } = color;

const SLayout = styled.nav`
  width: 100%;
  height: 100px;
  padding: 33px 0 0;
  background-color: var(--white);
  border-bottom: 1px solid ${gray4};
`;

const SRootHomeDiv = styled.div`
  display: flex;
  align-items: center;
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
  display: flex;
  width: 50%;
  height: 30%;
  margin-left: 54px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
const SRootIconDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const SRootIcontImg = styled.img`
  width: 36px;
  height: 30px;
  transform: rotate(-90deg);
  margin-top: 10px;
`;
const SCategoryDiv = styled.div``;
const SCategoryTitle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const SPageTitleDiv = styled.div`
  width: 100%;
  height: 70%;
  margin-left: 54px;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
function Navbar2() {
  const text = useSelector((state) => {
    return state.pageTitleReducer;
  });

  const [productInformation, setProductInformation] = useState(null);
  const { productid } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/products/${productid}`)
      .then((res) => {
        console.log(res);
        setProductInformation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <SLayout>
      <SRootDiv>
        <SRootHomeDiv>
          <SHomeImg src="../../public/asset/icon-home.svg" />
        </SRootHomeDiv>
        <SRootTitleDiv>
          <SRootTitle>Home</SRootTitle>
        </SRootTitleDiv>
        <SRootIconDiv>
          <SRootIcontImg src="asset/Chevrons_chevron-right.svg" />
        </SRootIconDiv>
        <SCategoryDiv>
          <SCategoryTitle>{text.rootTitle}</SCategoryTitle>
        </SCategoryDiv>
        <SRootIconDiv>
          <SRootIcontImg src="asset/Chevrons_chevron-right.svg" />
        </SRootIconDiv>
        <SPageTitleDiv>{text.currentTitle}</SPageTitleDiv>
        <SPageTitleDiv>{productInformation?.result.productTitle}</SPageTitleDiv>
      </SRootDiv>
    </SLayout>
  );
}

export default Navbar2;
