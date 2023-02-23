import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { gray6, white, gray2, gray3, gray4, gray1 } = color;

const SLayout = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${gray6};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SOrderItemDiv = styled.div`
  width: 80vw;
  height: 80vh;
  background-color: ${white};
  border-radius: 10px;
`;
const STitleDiv = styled.div`
  font-size: 30px;
  font-weight: bold;

  line-height: 0.67;

  text-align: center;
  color: ${gray2};
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
`;
const SNoticeDiv = styled.div`
  font-size: 24px;
  font-weight: normal;

  line-height: 0.83;

  text-align: center;
  color: ${gray3};
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SUserInfoDiv = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
`;
const SNameDiv = styled.div`
  font-size: 24px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray3};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;
const SInput = styled.input`
  border-radius: 10px;
  background-color: ${white};
  width: 414px;
  height: 57px;
  padding-left: 10px;
  border-radius: 16px;
  border: solid 1px ${gray4};
  background-color: ${white};
  outline-color: #ff985f;
`;

const SItemDiv = styled.div``;
const SInputDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
`;
const SButtonDiv = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Sbutton = styled.button`
  width: 274px;
  height: 49px;
  border-radius: 10px;
  background-color: ${gray1};

  font-size: 18px;
  font-weight: 500;

  line-height: normal;

  text-align: center;
  color: ${white};
  white-space: nowrap;
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
              <SInputDiv>
                <SInput placeholder="이름" />
              </SInputDiv>
            </SUserInfoDiv>
            <SUserInfoDiv>
              <SNameDiv> 주문자 이메일</SNameDiv>
              <SInputDiv>
                <SInput placeholder="test@test.com" />
              </SInputDiv>
            </SUserInfoDiv>
            <SUserInfoDiv>
              <SNameDiv>주문번호</SNameDiv>
              <SInputDiv>
                <SInput placeholder="주문번호" />
              </SInputDiv>
            </SUserInfoDiv>
            <SButtonDiv>
              <Sbutton> 주문 내역 조회</Sbutton>
            </SButtonDiv>
          </SOrderItemDiv>
        </SItemDiv>
      </SLayout>
    </div>
  );
}

export default NoneMember;
