import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import color from "styles/color";
import OrderedEditAddress from "./OrderedEditAddress";

const { white, gray3, gray1, gray4, gray6 } = color;

const Slayout = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 50px;
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
  white-space: nowrap;
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
  display: flex;
`;
const STotalTitle = styled.div`
  font-family: NotoSansKR;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  display: flex;
  align-items: center;
  height: 100%;
  width: 10%;
`;
const STotalNumberDiv = styled.div`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: ${gray1};
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const SButtonDiv = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ScanCleButton = styled.button`
  width: 160px;
  height: 40px;
  padding: 8px 12.2px 9px 14.5px;
  border-radius: 10px;
  border: solid 1px ${gray3};
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  background-color: white;
  margin-left: 20px;
`;
const SReturnButton = styled.button`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${gray4};
  width: 160px;
  height: 40px;
  padding: 8px 12.2px 9px 14.5px;
  border-radius: 10px;
  border: solid 1px ${gray4};
  background-color: ${gray6};
`;
const SEditAddressDiv = styled.div``;
const SEditButton = styled.button`
  width: 160px;
  height: 40px;
  padding: 8px 12.2px 9px 14.5px;
  border-radius: 10px;
  border: solid 1px ${gray3};
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: white;
  margin-left: 20px;
  background-color: ${gray1};
`;
function AddressDetail({ orderData }) {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState(false);
  console.log(orderData);

  return (
    <Slayout>
      <STitleDiv> Order Details</STitleDiv>
      <SinfoItmeDiv>
        <SInfoTitleDiv> 받는 사람</SInfoTitleDiv>
        <SInfoDiv>{orderData[0]?.name}</SInfoDiv>
      </SinfoItmeDiv>
      <SinfoItmeDiv>
        <SInfoTitleDiv>연락처</SInfoTitleDiv>
        <SInfoDiv>{orderData[0]?.phone}</SInfoDiv>
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
      <STotalDiv>
        <STotalTitle>합계</STotalTitle>
        <STotalNumberDiv> ₩240,000</STotalNumberDiv>
      </STotalDiv>
      <SButtonDiv>
        <SReturnButton>반품 신청</SReturnButton>
        <ScanCleButton
          onClick={() => {
            navigate("/cancleorder");
          }}
        >
          취소 신청
        </ScanCleButton>
        <SEditAddressDiv>
          <SEditButton
            onClick={() => {
              setIsOpen(!modalIsOpen);
            }}
          >
            주소지 수정
          </SEditButton>
        </SEditAddressDiv>
      </SButtonDiv>
      {modalIsOpen ? (
        <OrderedEditAddress orderData={orderData} setIsOpen={setIsOpen} />
      ) : null}
    </Slayout>
  );
}

export default AddressDetail;
