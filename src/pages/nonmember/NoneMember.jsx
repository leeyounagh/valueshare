import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Input from "component/input/Input";

const { gray6, white, gray2, gray3, gray1 } = color;

const SLayout = styled.div`
  height: auto;
  background-color: ${gray6};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const SItemDiv = styled.div`
  width: 90%;
  height: 700px;
`;

const SOrderItemDiv = styled.div`
  background-color: ${white};
  border-radius: 10px;
  height: 750px;
`;
const STitleDiv = styled.div`
  font-size: 30px;
  font-weight: 600;
  line-height: 0.67;
  text-align: center;
  color: ${gray2};
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 140px;
`;
const SNoticeDiv = styled.div`
  font-size: 24px;
  font-weight: 400;
  line-height: 0.83;
  text-align: center;
  color: ${gray3};
  height: 10vh;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const SUserInfoDiv = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
`;
const SNameDiv = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  color: ${gray3};
  display: flex;
  justify-content: left;
  align-items: center;
  width: 10%;
`;

const SButtonDiv = styled.div`
  width: 280px;
  height: 20vh;
  margin: auto;
  padding: 70px 0;
`;
<<<<<<<<< Temporary merge branch 1
const SBtnDiv = styled.div`
  width: 20%;
`;
function NoneMember() {
  return (
    <div>
      <SLayout>
        <SItemDiv>
          <SOrderItemDiv>
            <STitleDiv>비회원 주문 내역 조회</STitleDiv>
            <SNoticeDiv>
              비회원의 경우, 주문사의 주문번호로 주문조회가 가능합니다.
            </SNoticeDiv>
            <SUserInfoDiv>
              <SNameDiv>주문자 이름</SNameDiv>
              <Input placeholder="이름" onChange="_onChange" />
            </SUserInfoDiv>
            <SUserInfoDiv>
              <SNameDiv> 주문자 이메일</SNameDiv>
              <Input placeholder="test@test.com" onChange="_onChange" />
            </SUserInfoDiv>
            <SUserInfoDiv>
              <SNameDiv>주문번호</SNameDiv>
              <Input placeholder="주문번호" onChange="_onChange" />
            </SUserInfoDiv>
            <SButtonDiv>
<<<<<<<<< Temporary merge branch 1
              <SBtnDiv>
                <Btn1 title="주문 내역 조회" />
              </SBtnDiv>
=========
              <Btn1 title="주문 내역 조회" />
>>>>>>>>> Temporary merge branch 2
            </SButtonDiv>
          </SOrderItemDiv>
        </SItemDiv>
      </SLayout>
    </div>
  );
}

export default NoneMember;
