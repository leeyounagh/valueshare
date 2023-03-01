/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import AxiosInstance from "data/AxiosInstance";
import Btn1 from "component/button/Btn1";
import styled from "styled-components";
import color from "styles/color";

const { gray1, white, gray3, gray5, gray4 } = color;

const SLayout = styled.div`
  width: 100%;
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
const SEditIconDiv = styled.div`
  cursor: pointer;
`;
const SEditImg = styled.img``;
const SProfileDiv = styled.div`
  height: 86px;
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
  margin: 14px 0 0 10px;
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
const SInput = styled.input`
  width: 80%;
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
  flex-grow: 0;
  padding-left: 10px;
  border-radius: 15px;
  border: solid 1px ${gray4};
  background-color: ${white};
  outline-color: ${color.main};
`;
const SInputDiv = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  gap: 2%;
`;
const SBtnDiv = styled.div`
  width: 100px;
  margin-left: 5px;
`;
function MyAccount({ userInfo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [editEmail, setEditEmail] = useState("");

  async function handleEditEmail() {
    const body = {
      email: editEmail,
    };
    try {
      const response = await AxiosInstance.post(
        `/users/mypage/${userInfo[0]?._id}/email`,
        body
      );
      if (response.status === 200) {
        alert("이메일수정이 완료되었습니다.");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <SLayout>
        <STitleDiv>
          <h2> My Account</h2>
          <SEditIconDiv
            onClick={() => {
              setIsEdit(!isEdit);
            }}
          >
            <SEditImg src="/asset/정보수정아이콘.svg" />
          </SEditIconDiv>
        </STitleDiv>
        <SProfileDiv>
          <SProfileImg src="/asset/icn-profile.svg" />

          <SProfileInfoDiv>
            <SProfileNameDiv>{userInfo[0]?.name}</SProfileNameDiv>
            <SMemberDiv> Member</SMemberDiv>
          </SProfileInfoDiv>
        </SProfileDiv>
        <SLinDiv />
        <SInfoDiv>
          <SIfoItemDiv>
            <SImgDiv>
              <SPhoneImg src="/asset/Call.png" />
            </SImgDiv>

            <SPhoneTextDiv> {userInfo[0]?.phoneNumber}</SPhoneTextDiv>
          </SIfoItemDiv>
          <SIfoItemDiv>
            <SImgDiv>
              <SPhoneImg src="/asset/Mail.png" />
            </SImgDiv>

            <SPhoneTextDiv>
              {" "}
              {isEdit ? (
                <SInputDiv>
                  <SInput
                    value={editEmail}
                    onChange={(e) => {
                      setEditEmail(e.target.value);
                    }}
                    placeholder="Your Email"
                  />
                  <SBtnDiv
                    onClick={() => {
                      handleEditEmail();
                      setIsEdit(!isEdit);
                    }}
                  >
                    <Btn1 title="변경" />
                  </SBtnDiv>
                </SInputDiv>
              ) : (
                userInfo[0]?.email
              )}
            </SPhoneTextDiv>
          </SIfoItemDiv>
        </SInfoDiv>
        <SLinDiv />
      </SLayout>
    </div>
  );
}

export default MyAccount;
