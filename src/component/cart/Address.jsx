/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Btn1 from "component/button/Btn1";
import styled from "styled-components";
import color from "styles/color";
import EditAdress from "./EditAdress";

const { white, gray3, gray1 } = color;

const SLayout = styled.div`
  width: 100%;
  padding-left: 30px;
  height: 462px;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${white};
  margin-bottom: 20px;
  z-index: 10;
`;
const SAddressTitle = styled.div`
  width: 90%;
  height: 20%;
  margin-bottom: 40px;
  margin-left: 15px;
  display: flex;
  align-items: flex-end;
  flex-grow: 0;
  font-size: 40px;
  font-weight: 600;

  line-height: normal;

  text-align: left;
  color: #000;
`;
const SAdressTiltleDiv = styled.div`
  width: 30%;
  font-size: 18px;
  font-weight: 400;

  line-height: 1.8;

  text-align: left;
  color: ${gray3};
`;
const SAddressText = styled.div`
  flex-grow: 0;
  font-size: 18px;
  font-weight: 400;

  line-height: 1.5;

  text-align: left;
  color: ${gray1};
`;
const SItemDiv = styled.div`
  width: 90%;
  display: flex;
  height: auto;
  margin-top: 5px;
  margin-left: 15px;
`;

const SEditAdress = styled.div`
  width: 90%;
  margin-top: 50px;
  margin-left: 13px;
  height: 50px;
  border-radius: 10px;
  background-color: ${gray1};
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;

  line-height: normal;

  text-align: center;
  color: ${white};
  cursor: pointer;
`;
const SBtnDiv = styled.div`
  width: 90%;
  height: 50px;
  margin-top: 50px;
`;
function Address() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const adress = useSelector((state) => {
    return state.UserAddressReducer;
  });
  console.log(adress);
  return (
    <div>
      <SLayout>
        <SAddressTitle>Address</SAddressTitle>
        <SItemDiv>
          <SAdressTiltleDiv>받는사람</SAdressTiltleDiv>
          <SAddressText>
            {adress.customerName.length > 0
              ? `${adress.customerName}`
              : "성함을 입력해주세요"}
          </SAddressText>
        </SItemDiv>
        <SItemDiv>
          <SAdressTiltleDiv>연락처</SAdressTiltleDiv>
          <SAddressText>
            {adress.phoneNumber.length > 0
              ? `${adress.phoneNumber}`
              : "핸드폰번호를 입력해주세요"}
          </SAddressText>
        </SItemDiv>
        <SItemDiv>
          <SAdressTiltleDiv>배송지</SAdressTiltleDiv>
          <SAddressText>
            {adress.address.length >= 14
              ? `${adress.address.substr(0, 14)}...`
              : adress.address.length > 0
              ? `${adress.address}`
              : "배송지를 입력해주세요"}
          </SAddressText>
        </SItemDiv>
        <SItemDiv>
          <SAdressTiltleDiv>배송메모</SAdressTiltleDiv>
          <SAddressText>
            {adress.memo.length > 0
              ? `${adress.memo}`
              : "배송메모를 등록해주세요"}
          </SAddressText>
        </SItemDiv>
        <SItemDiv>
          <SAdressTiltleDiv>이메일</SAdressTiltleDiv>
          <SAddressText>
            {" "}
            {adress.email.length > 0
              ? `${adress.email}`
              : "email을 등록해주세요"}
          </SAddressText>
        </SItemDiv>
        <SBtnDiv
          onClick={() => {
            setIsOpen(!modalIsOpen);
          }}
        >
          <Btn1 title="배송지 수정" />
        </SBtnDiv>
      </SLayout>
      {modalIsOpen ? (
        <EditAdress adress={adress} setIsOpen={setIsOpen} />
      ) : null}
    </div>
  );
}

export default Address;
