import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { white, gray3, gray1, gray4 } = color;

const Slayout = styled.div`
  width: 90%;
  margin-top: 50px;
  height: 604px;
  flex-grow: 0;
  padding: 60px 30px;
  border-radius: 10px;
  background-color: ${white};
`;

const STitleDiv = styled.div`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
const SinfoItmeDiv = styled.div`
  height: 10%;
  margin-top: 20px;
  display: flex;
`;
const SInfoTitleDiv = styled.div`
  font-family: NotoSans;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
  width: 15%;
  display: flex;
  align-items: center;
`;
const SInfoDiv = styled.div`
  font-family: NotoSans;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  display: flex;
  align-items: center;
`;
const SLine = styled.div`
  background-color: ${gray4};
  height: 1px;
  margin: 59px 0 19px 1px;
`;
const STotalDiv = styled.div`
  width: 100%;
  height: 20%;
  border: 1px solid black;
`;
function AddressDetail({ orderData }) {
  console.log(orderData);
  return (
    <Slayout>
      <STitleDiv> Order Details</STitleDiv>
      <SinfoItmeDiv>
        <SInfoTitleDiv> 받는 사람</SInfoTitleDiv>
        <SInfoDiv>이수연</SInfoDiv>
      </SinfoItmeDiv>
      <SinfoItmeDiv>
        <SInfoTitleDiv>연락처</SInfoTitleDiv>
        <SInfoDiv>010-0000-0000</SInfoDiv>
      </SinfoItmeDiv>
      <SinfoItmeDiv>
        <SInfoTitleDiv>배송지</SInfoTitleDiv>
        <SInfoDiv> 서울시 엘리스랩 엘리스동 엘리스로 122-12</SInfoDiv>
      </SinfoItmeDiv>
      <SinfoItmeDiv>
        <SInfoTitleDiv>배송메모</SInfoTitleDiv>
        <SInfoDiv> 배송 후 연락 주세요</SInfoDiv>
      </SinfoItmeDiv>
      <SLine />
      <STotalDiv>adfads</STotalDiv>
    </Slayout>
  );
}

export default AddressDetail;
