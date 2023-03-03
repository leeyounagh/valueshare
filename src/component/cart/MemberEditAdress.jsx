/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import color from "styles/color";
import AxiosInstance from "data/AxiosInstance";
import Btn1 from "component/button/Btn1";
import Btn2 from "component/button/Btn2";

const { white, gray3, gray4 } = color;

const Slayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: -143px;
  left: 0;
  z-index: 998;
`;

const SModal = styled.div`
  width: 60vw;
  height: 90vh;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${white};
  z-index: 9999;
  position: absolute;
  top: 150px;
  left: 20%;
  border: 1px solid ${gray3};
`;
const SCloseImg = styled.img`
  z-index: 100;
  cursor: pointer;
  width: 28px;
  height: 28px;
`;
const SCloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  margin-right: 20px;
`;
const STitleDiv = styled.div`
  flex-grow: 0;

  font-size: 25px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: #000;
  margin-left: 90px;
  margin-top: 30px;
  margin-bottom: 80px;
`;
const SItemDiv = styled.div`
  margin-left: 90px;
  margin-bottom: 30px;

  height: 8%;
  display: flex;
`;
const SInfoTitle = styled.div`
  width: 20%;

  font-size: 24px;
  font-weight: 500;

  line-height: normal;

  text-align: center;
  color: ${gray3};
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const SInfoInput = styled.input`
  width: 90%;
  height: 100%;
  font-size: 16px;
  font-weight: normal;

  line-height: 1.75;
  letter-spacing: 0.75px;
  text-align: left;
  color: ${gray3};
  height: 57px;
  flex-grow: 0;
  padding-left: 10px;
  border-radius: 10px;
  border: solid 1px ${gray4};
  background-color: ${white};
  outline-color: #ff985f;
`;
const SInputDiv = styled.div`
  width: 90%;
`;
const SButtonDiv = styled.div`
  width: 100%;
  margin-left: 90px;
  padding-right: 80px;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SInnerButtonDiv = styled.div`
  width: 20%;
  height: 50px;
  margin-right: 20px;
`;

function MemberEditAdress({ setIsOpen, userInfo }) {
  const [data, setData] = useState({
    customerName: "",
    phoneNumber: "",
    address: "",
    memo: "",
    email: "",
  });

  const handleInfoSubmit = async () => {
    const body = {
      name:
        data.customerName?.length === 0 ? userInfo[0].name : data.customerName,
      phoneNumber:
        data.phoneNumber?.length === 0
          ? userInfo[0].phoneNumber
          : data.phoneNumber,
      shipAdr: data.address?.length === 0 ? userInfo[0].shipAdr : data.address,
      shipNote: data.memo?.length === 0 ? userInfo[0].shipNote : data.memo,
      email: data.email?.length === 0 ? userInfo[0].email : data.email,
    };
    console.log(body);
    try {
      const response = await AxiosInstance.post(
        `/users/${userInfo[0]._id}/userInfo`,
        body
      );
      if (response.status === 200) {
        setIsOpen(false);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  return (
    <div>
      <Slayout>
        <SModal>
          <SCloseDiv>
            <SCloseImg
              onClick={() => {
                setIsOpen(false);
              }}
              src="/asset/모달삭제.svg"
            />
          </SCloseDiv>
          <STitleDiv>
            <h2>배송지 수정</h2>
          </STitleDiv>
          <SItemDiv>
            <SInfoTitle>받는사람</SInfoTitle>
            <SInputDiv>
              <SInfoInput
                onChange={handleChange}
                defaultValue={
                  userInfo[0]?.name ? userInfo[0].name : data.customerName
                }
                name="customerName"
                placeholder="이름"
              />
            </SInputDiv>
          </SItemDiv>
          <SItemDiv>
            <SInfoTitle>연락처</SInfoTitle>
            <SInputDiv>
              <SInfoInput
                defaultValue={
                  userInfo[0]?.phoneNumber
                    ? userInfo[0].phoneNumber
                    : data.phoneNumber
                }
                onChange={handleChange}
                name="phoneNumber"
                placeholder="010-0000-0000"
              />
            </SInputDiv>
          </SItemDiv>
          <SItemDiv>
            <SInfoTitle>배송지</SInfoTitle>
            <SInputDiv>
              <SInfoInput
                defaultValue={
                  userInfo[0]?.shipAdr ? userInfo[0].shipAdr : data.address
                }
                onChange={handleChange}
                name="address"
                placeholder="주소"
              />
            </SInputDiv>
          </SItemDiv>
          <SItemDiv>
            <SInfoTitle>배송메모</SInfoTitle>
            <SInputDiv>
              <SInfoInput
                defaultValue={
                  userInfo[0]?.shipNote ? userInfo[0].shipNote : data.memo
                }
                onChange={handleChange}
                name="memo"
                placeholder="배송 후 연락 부탁드립니다."
              />
            </SInputDiv>
          </SItemDiv>
          <SItemDiv>
            <SInfoTitle>이메일</SInfoTitle>
            <SInputDiv>
              <SInfoInput
                value={userInfo[0]?.email ? userInfo[0].email : data.email}
                onChange={handleChange}
                name="email"
                placeholder=" elice@elice.com"
              />
            </SInputDiv>
          </SItemDiv>
          <SButtonDiv>
            <SInnerButtonDiv
              onClick={() => {
                handleInfoSubmit();
              }}
            >
              <Btn1 title="확인" />
            </SInnerButtonDiv>
            <SInnerButtonDiv
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <Btn2 title="취소" />
            </SInnerButtonDiv>
          </SButtonDiv>
        </SModal>
      </Slayout>
    </div>
  );
}

export default MemberEditAdress;
