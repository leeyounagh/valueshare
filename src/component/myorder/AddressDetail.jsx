/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-underscore-dangle */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import color from "styles/color";
// eslint-disable-next-line no-unused-vars
import Btn1 from "component/button/Btn1";
import Btn2 from "component/button/Btn2";
import DisableBtn from "component/button/DisableBtn";
import OrderedEditAddress from "./OrderedEditAddress";

const { white, gray3, gray1, gray4 } = color;

const Slayout = styled.div`
  width: 100%;
  height: 850px;
  margin-top: 50px;
  a {
    text-decoration: none;
  }
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
  height: 8%;
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
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: flex-end;
`;

const SEditAddressDiv = styled.div``;
const SBtnDiv = styled.div`
  width: 160px;
  height: 90%;
  margin-right: 10px;
`;

function AddressDetail({ orderData }) {
  const [modalIsOpen, setIsOpen] = useState(false);

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
        <SInfoTitleDiv>이메일</SInfoTitleDiv>
        <SInfoDiv>{orderData[0]?.email}</SInfoDiv>
      </SinfoItmeDiv>
      <SinfoItmeDiv>
        <SInfoTitleDiv>배송지</SInfoTitleDiv>
        <SInfoDiv> {orderData[0]?.shipAdr}</SInfoDiv>
      </SinfoItmeDiv>
      <SinfoItmeDiv>
        <SInfoTitleDiv>배송메모</SInfoTitleDiv>
        <SInfoDiv> {orderData[0]?.shipNote}</SInfoDiv>
      </SinfoItmeDiv>
      <SLine />
      <STotalDiv>
        <STotalTitle>합계</STotalTitle>
        <STotalNumberDiv> ₩{orderData[0]?.totalPrice * 1000}</STotalNumberDiv>
      </STotalDiv>
      <SButtonDiv>
        <SBtnDiv>
          {" "}
          <DisableBtn title="반품 신청" />
        </SBtnDiv>

        <Link to={`/myorder/cancel/${orderData[0]?._id}`}>
          <SBtnDiv>
            <Btn2 title="취소 신청" />
          </SBtnDiv>
        </Link>
        <SEditAddressDiv
          onClick={() => {
            setIsOpen(!modalIsOpen);
          }}
        >
          <SBtnDiv>
            <Btn1 title="주소지 수정" />
          </SBtnDiv>
        </SEditAddressDiv>
      </SButtonDiv>
      {modalIsOpen ? <OrderedEditAddress setIsOpen={setIsOpen} /> : null}
    </Slayout>
  );
}

export default AddressDetail;
