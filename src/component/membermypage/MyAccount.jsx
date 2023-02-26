/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { gray1, white, gray3, gray5 } = color;

const SLayout = styled.div`
  width: 80%;
  height: 40vh;
  border-radius: 10px;
  background-color: ${white};
`;
const STitleDiv = styled.div`
  display: flex;
  height: 20%;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  h2 {
    font-family: Montserrat;
    font-size: 26px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    color: ${gray1};
    width: 80%;
  }
`;
const SEditIconDiv = styled.div``;
const SEditImg = styled.img``;
const SProfileDiv = styled.div`
  height: 30%;
  display: flex;
  padding-left: 10px;
  margin-top: 20px;
`;
const SProfileImg = styled.img`
  width: 74px;
  height: 74px;
  padding-left: 5px;
`;
const SProfileInfoDiv = styled.div`
  height: 74px;
  margin-left: 10px;
`;
const SProfileNameDiv = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  height: 50%;
  display: flex;
  align-items: center;
`;
const SMemberDiv = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
  display: flex;
  align-items: center;
  height: 50%;
`;

const SLinDiv = styled.div`
  height: 1px;
  background-color: ${gray5};
  width: 95%;
  margin-left: 10px;
`;
const SInfoDiv = styled.div`
  height: 30%;
  padding-left: 10px;
`;
const SIfoItemDiv = styled.div`
  height: 50%;
  display: flex;
  margin-left: 10px;
`;
const SPhoneImg = styled.img`
  width: 24px;
  height: 24px;
`;
const SPhoneTextDiv = styled.div`
  display: flex;
  align-items: center;
`;
const SImgDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
function MyAccount() {
  return (
    <div>
      <SLayout>
        <STitleDiv>
          <h2> My Account</h2>
          <SEditIconDiv>
            <SEditImg src="/asset/정보수정아이콘.svg" />
          </SEditIconDiv>
        </STitleDiv>
        <SProfileDiv>
          <SProfileImg src="/asset/icn-profile.svg" />

          <SProfileInfoDiv>
            <SProfileNameDiv>한효정</SProfileNameDiv>
            <SMemberDiv> Member</SMemberDiv>
          </SProfileInfoDiv>
        </SProfileDiv>
        <SLinDiv />
        <SInfoDiv>
          <SIfoItemDiv>
            <SImgDiv>
              <SPhoneImg src="/asset/Call.png" />
            </SImgDiv>

            <SPhoneTextDiv>010-0000-0000</SPhoneTextDiv>
          </SIfoItemDiv>
          <SIfoItemDiv>
            <SImgDiv>
              <SPhoneImg src="/asset/Mail.png" />
            </SImgDiv>

            <SPhoneTextDiv> elice@elice.test</SPhoneTextDiv>
          </SIfoItemDiv>
        </SInfoDiv>
        <SLinDiv />
      </SLayout>
    </div>
  );
}

export default MyAccount;
