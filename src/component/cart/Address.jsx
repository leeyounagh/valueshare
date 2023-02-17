import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { white, gray3, gray1 } = color;

const SLayout = styled.div`
  width: 100%;
  padding-left: 30px;
  height: 462px;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${white};
  margin-bottom: 20px;
`;
const SAddressTitle = styled.div`
  width: 100%;
  height: 20%;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-end;
  flex-grow: 0;
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
const SAdressTiltleDiv = styled.div`
  width: 30%;
  flex-grow: 0;
  font-family: NotoSans;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
`;
const SAddressText = styled.div`
  flex-grow: 0;
  font-family: NotoSans;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
`;
const SItemDiv = styled.div`
  display: flex;
  height: 10%;
  margin-top: 5px;
`;

const SEditAdress = styled.div`
  width: 90%;
  margin-top: 10px;
  margin-left: 13px;
  height: 50px;
  border-radius: 10px;
  background-color: ${gray1};
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${white};
  cursor: pointer;
`;
function Address() {
  return (
    <SLayout>
      <SAddressTitle>Address</SAddressTitle>
      <SItemDiv>
        <SAdressTiltleDiv>받는사람</SAdressTiltleDiv>
        <SAddressText>이수연</SAddressText>
      </SItemDiv>
      <SItemDiv>
        <SAdressTiltleDiv>연락처</SAdressTiltleDiv>
        <SAddressText>010-0000-0000</SAddressText>
      </SItemDiv>
      <SItemDiv>
        <SAdressTiltleDiv>배송지</SAdressTiltleDiv>
        <SAddressText>서울시 엘리스랩 엘리스동...</SAddressText>
      </SItemDiv>
      <SItemDiv>
        <SAdressTiltleDiv>배송메모</SAdressTiltleDiv>
        <SAddressText>배송 후 연락 주세요</SAddressText>
      </SItemDiv>
      <SItemDiv>
        <SAdressTiltleDiv>이메일</SAdressTiltleDiv>
        <SAddressText> elice@test.com</SAddressText>
      </SItemDiv>
      <SEditAdress> 배송지 수정</SEditAdress>
    </SLayout>
  );
}

export default Address;
