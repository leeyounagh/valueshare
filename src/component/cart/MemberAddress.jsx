/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MemberEditAdress from "./MemberEditAdress";
import AxiosInstance from "data/AxiosInstance";
import styled from "styled-components";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
import Btn2 from "component/button/Btn2";

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
  display: flex;
`;
const SBtnItemDiv = styled.div`
  width: 50%;
  margin-left: 10px;
`;

function MemberAddress() {
  //  호출해서 유저정보 받기
  const [userInfo, setUserInfo] = useState([]);
  const [callAddress, setCallAddress] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const userId = useSelector((item) => {
    return item?.UserInfoReducer?.userInfo?.[0]?.user;
  });

  useEffect(() => {
    async function handleUserInfo() {
      try {
        const response = await AxiosInstance.get(`/users/mypage/${userId}`);
        const data = await response.data;
        setUserInfo(data);
      } catch (err) {
        console.log(err);
      }
    }
    handleUserInfo();
  }, []);

  return (
    <div>
      <SLayout>
        <SAddressTitle>Address</SAddressTitle>
        <SItemDiv>
          <SAdressTiltleDiv>받는사람</SAdressTiltleDiv>

          <SAddressText>
            {callAddress && userInfo[0]?.name
              ? `${userInfo[0].name}`
              : "성함을 입력해주세요"}
          </SAddressText>
        </SItemDiv>
        <SItemDiv>
          <SAdressTiltleDiv>연락처</SAdressTiltleDiv>
          <SAddressText>
            {" "}
            {callAddress && userInfo[0]?.phoneNumber
              ? `${userInfo[0].phoneNumber}`
              : "핸드폰번호를 입력해주세요"}
          </SAddressText>
        </SItemDiv>
        <SItemDiv>
          <SAdressTiltleDiv>배송지</SAdressTiltleDiv>
          <SAddressText>
            {" "}
            {callAddress && userInfo[0]?.shipAdr
              ? `${userInfo[0].shipAdr}`
              : "배송지를 입력해주세요"}
          </SAddressText>
        </SItemDiv>
        <SItemDiv>
          <SAdressTiltleDiv>배송메모</SAdressTiltleDiv>
          <SAddressText>
            {" "}
            {callAddress && userInfo[0]?.shipNote
              ? `${userInfo[0].shipNote}`
              : " 배송메모를 등록해주세요"}
          </SAddressText>
        </SItemDiv>
        <SItemDiv>
          <SAdressTiltleDiv>이메일</SAdressTiltleDiv>
          <SAddressText>
            {" "}
            {callAddress && userInfo[0]?.email
              ? `${userInfo[0].email}`
              : " email 등록해주세요"}
          </SAddressText>
        </SItemDiv>
        <SBtnDiv>
          <SBtnItemDiv
            onClick={() => {
              setCallAddress(!callAddress);
              // 유저데이터 바뀌는 로직
            }}
          >
            <Btn1 title="배송지 불러오기" />
          </SBtnItemDiv>
          <SBtnItemDiv
            onClick={() => {
              setIsOpen(!modalIsOpen);
            }}
          >
            <Btn2 title="배송지 수정" />
          </SBtnItemDiv>
        </SBtnDiv>
      </SLayout>
      {modalIsOpen ? (
        <MemberEditAdress setIsOpen={setIsOpen} userInfo={userInfo} />
      ) : null}
    </div>
  );
}

export default MemberAddress;
