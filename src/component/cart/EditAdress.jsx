import React, { useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
import Btn2 from "component/button/Btn2";
import { useDispatch } from "react-redux";
import { setNoneMemberInfo } from "slice/UserAddressSlice";
import Input from "component/input/Input";

const { white, gray3 } = color;

const Slayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998;
`;

const SModal = styled.div`
  width: 60vw;
  height: 80vh;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${white};
  z-index: 9999;
  position: fixed;
  top: 52px;
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
  font-size: 18px;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  color: ${color.gray1};
  margin-left: 9%;
  margin-top: 30px;
  margin-bottom: 80px;
`;

const SInfoTitle = styled.div`
  width: 100px;
  font-size: 20px;
  font-weight: 400;
  line-height: 2.5;
  color: ${gray3};
  align-items: center;
`;
const SInputDiv = styled.div`
  width: 70%;
`;
const SItemDiv = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;

  input {
    width: 100%;
  }
`;
const SButtonDiv = styled.div`
  width: 100%;
  margin: auto;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;

const SInnerButtonDiv = styled.div`
  width: 20%;
  height: 50px;
  margin-right: 20px;
  z-index: 10;
`;
function EditAdress({ setIsOpen }) {
  const [data, setData] = useState({
    customerName: "",
    phoneNumber: "",
    address: "",
    memo: "",
    email: "",
  });
  console.log(data);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
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
            <Input
              value={data.customerName}
              onChange={handleChange}
              name="customerName"
              placeholder="이름"
            />
          </SInputDiv>
        </SItemDiv>
        <SItemDiv>
          <SInfoTitle>연락처</SInfoTitle>
          <SInputDiv>
            <Input
              onChange={handleChange}
              name="phoneNumber"
              placeholder="010-0000-0000"
              value={data.phoneNumber}
            />
          </SInputDiv>
        </SItemDiv>
        <SItemDiv>
          <SInfoTitle>배송지</SInfoTitle>
          <SInputDiv>
            <Input
              onChange={handleChange}
              name="address"
              placeholder="주소"
              value={data.address}
            />
          </SInputDiv>
        </SItemDiv>
        <SItemDiv>
          <SInfoTitle>배송메모</SInfoTitle>
          <SInputDiv>
            <Input
              onChange={handleChange}
              name="memo"
              placeholder="배송 후 연락 부탁드립니다."
              value={data.memo}
            />
          </SInputDiv>
        </SItemDiv>
        <SItemDiv>
          <SInfoTitle>이메일</SInfoTitle>
          <SInputDiv>
            <Input
              onChange={handleChange}
              name="email"
              placeholder=" elice@elice.com"
              value={data.email}
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
