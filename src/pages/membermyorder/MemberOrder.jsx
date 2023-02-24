/* eslint-disable react/function-component-definition */
import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
import Btn2 from "component/button/Btn2";
import Navbar from "component/Navbar";

const { white, gray2, gray3 } = color;
const SLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SItemDiv = styled.div`
  width: 90%;
  height: 80%;
  border-radius: 10px;
  background-color: ${white};
`;
const STitleDiv = styled.div`
font-family: NotoSansKR;
font-size: 30px;
font-weight: bold;
font-stretch: normal;
font-style: normal;
line-height: 0.67;
letter-spacing: normal;
color: ${gray2};
height:20%;
display:flex;
justify-content:center;
align-items:center;
}
`;
const SNoticeTextDiv = styled.div`
  height: 20%;
`;
const SNoticeItemDiv = styled.div`
  font-family: NotoSansKR;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: normal;
  text-align: center;
  color: ${gray3};
  height: 50%;
`;
const SButtonItemDiv = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  align-center: center;
`;
const SButtonDiv = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const MemberOrder = () => {
  return (
    <div>
      <Navbar />
      <SLayout>
        <SItemDiv>
          <STitleDiv>
            <h2>주문 내역 조회</h2>
          </STitleDiv>
          <SNoticeTextDiv>
            <SNoticeItemDiv>
              회원일 경우, 로그인 하기로 확인 부탁드립니다.
            </SNoticeItemDiv>
            <SNoticeItemDiv>
              비회원은 비회원 주문 내역 조회로 따로 조회 가능합니다.
            </SNoticeItemDiv>
          </SNoticeTextDiv>
          <SButtonItemDiv>
            <SButtonDiv>
              <Btn1 title="로그인하기" />
            </SButtonDiv>
            <SButtonDiv>
              <Btn2 title=" 비회원 주문 내역 조회" />
            </SButtonDiv>
          </SButtonItemDiv>
        </SItemDiv>
      </SLayout>
    </div>
  );
};

export default MemberOrder;
