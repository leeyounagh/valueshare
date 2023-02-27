/* eslint-disable no-underscore-dangle */
import AxiosInstance from "data/AxiosInstance";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import color from "styles/color";
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
  font-family: NotoSansKR;
  font-size: 25px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
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
  font-family: NotoSans;
  font-size: 24px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${gray3};
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;
const SInfoInput = styled.input`
  width: 90%;
  height: 100%;
  font-family: Poppins;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
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
  z-index: 10;
`;
function OrderedEditAddress({ setIsOpen }) {
  const { pathname } = useLocation();
  const objectId = pathname.substr(9);
  const [orderData, setOrderData] = useState([]);

  const [data, setData] = useState({
    customerName: "",
    phoneNumber: "",
    address: "",
    memo: "",
    email: "",
  });

  useEffect(() => {
    async function handleMyOlder() {
      const response = await AxiosInstance.get(`/myorder/${objectId}`);
      const addressData = await response.data;
      setOrderData(addressData);
      console.log(response);
    }
    handleMyOlder();
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;

    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };
  console.log(data);
  const handleAddress = async () => {
    const body = {
      phone: data.phoneNumber,
      email: data.email,
      name: data.customerName,
      shipAdr: data.address,
      shipNote: data.memo,
    };
    try {
      const response = await AxiosInstance.patch(
        `/myorder/${orderData[0]._id}`,
        body
      );
      console.log(response);

      if (response.status === 200) {
        alert("주소지 수정에 성공하였습니다!");
        const getResponse = await AxiosInstance.get(`/myorder/${objectId}`);
        const addressData = await getResponse.data;
        setOrderData(addressData);
      }
    } catch (err) {
      if (err) {
        alert("수정에 실패했습니다.");
      }
    }
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
              name="customerName"
              placeholder="이름"
            />
          </SInputDiv>
        </SItemDiv>
        <SItemDiv>
          <SInfoTitle>연락처</SInfoTitle>
          <SInputDiv>
            <SInfoInput
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

export default OrderedEditAddress;
