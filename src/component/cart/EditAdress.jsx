import React, { useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import { useDispatch } from "react-redux";
import { setNoneMemberInfo } from "slice/UserAddressSlice";

const { white, gray3, gray4, gray1 } = color;

const SLayout = styled.div`
  width: 60vw;
  height: 90vh;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${white};
  z-index: 50;
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
const SCheckButton = styled.button`
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background-color: ${gray1};
  color: ${white};
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  z-index: 50;
  cursor: pointer;
`;
const SCancelButton = styled.button`
  border: solid 1px ${gray1};
  background-color: ${white};
  border-radius: 10px;
  width: 100%;
  height: 100%;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${gray1};
  cursor: pointer;
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
    phonenumber: "",
    address: "",
    memo: "",
    eamil: "",
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
    <SLayout>
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
            name="phonenumber"
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
        <SInnerButtonDiv>
          <SCheckButton
            onClick={() => {
              handleAddress();
            }}
          >
            확인
          </SCheckButton>
        </SInnerButtonDiv>
        <SInnerButtonDiv>
          <SCancelButton
            onClick={() => {
              setIsOpen(false);
            }}
          >
            취소
          </SCancelButton>
        </SInnerButtonDiv>
      </SButtonDiv>
    </SLayout>
  );
}

export default EditAdress;
