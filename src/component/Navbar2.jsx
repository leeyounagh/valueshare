import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AxiosInstance from "data/AxiosInstance";
import styled from "styled-components";
import color from "../styles/color";

const SLayout = styled.nav`
  width: 100%;
  height: 100px;
  padding: 33px 0 0;
  background-color: var(--white);
  border-bottom: 1px solid ${color.gray4};
  background-color: ${color.white};
`;

const SRootHomeDiv = styled.div`
  align-items: center;
  width: 50px;
  height: 100%;
  margin: 0 10px;
`;
const SRootTitleDiv = styled.div`
  justify-content: center;
  align-items: center;
  width: 60px;
  margin: 0 10px;
`;
const SHomeImg = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;
const SRootTitle = styled.div``;
const SRootDiv = styled.div`
  display: flex;
  width: auto;
  height: 30%;
  margin-left: 54px;
  font-size: 24px;
  font-weight: normal;
  line-height: normal;
  text-align: left;
  margin: 0 10px;
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
  align-items: center;
`;
const SPageTitleDiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  text-align: left;
`;
function Navbar2() {
  const text = useSelector((state) => {
    return state.pageTitleReducer;
  });
  const [productInformation, setProductInformation] = useState(null);
  const { productid } = useParams();

  useEffect(() => {
    AxiosInstance.get(`/admin/products/${productid}`)
      .then((res) => {
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
          <SHomeImg src="../asset/icon-home.svg" />
        </SRootHomeDiv>
        <SRootTitleDiv>
          <SRootTitle>Home</SRootTitle>
        </SRootTitleDiv>
        <SRootIconDiv>
          <SRootIcontImg src="../asset/Chevrons_chevron-right.svg" />
        </SRootIconDiv>
        <SCategoryDiv>
          <SCategoryTitle>{text.rootTitle}</SCategoryTitle>
        </SCategoryDiv>
        <SRootIconDiv>
          <SRootIcontImg src="../asset/Chevrons_chevron-right.svg" />
        </SRootIconDiv>
        <SCategoryTitle>{text.currentTitle}</SCategoryTitle>
        <SRootIconDiv>
          <SRootIcontImg src="../asset/Chevrons_chevron-right.svg" />
        </SRootIconDiv>
        <SPageTitleDiv>{productInformation?.result.productTitle}</SPageTitleDiv>
      </SRootDiv>
    </SLayout>
  );
}

export default Navbar2;
