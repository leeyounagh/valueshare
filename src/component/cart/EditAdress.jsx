/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
import Btn2 from "component/button/Btn2";
import { useDispatch } from "react-redux";
import { setNoneMemberInfo } from "slice/UserAddressSlice";

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
function EditAdress({ setIsOpen }) {
  const [data, setData] = useState({
    customerName: "",
    phoneNumber: "",
    address: "",
    memo: "",
    email: "",
  });

  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;

    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };
  const handleAddress = () => {
    dispatch(setNoneMemberInfo(data));
  };
  return (
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
              value={data.customerName}
              name="customerName"
              placeholder="이름"
            />
          </SInputDiv>
        </SItemDiv>
        <SItemDiv>
          <SInfoTitle>연락처</SInfoTitle>
          <SInputDiv>
            <SInfoInput
              value={data.phoneNumber}
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
              value={data.address}
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
              value={data.address}
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
              value={data.email}
              onChange={handleChange}
              name="email"
              placeholder=" elice@elice.com"
            />
          </SInputDiv>
        </SItemDiv>
        <SButtonDiv>
          <SInnerButtonDiv
            onClick={() => {
              handleAddress();
              setIsOpen(false);
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
  );
}

export default EditAdress;
