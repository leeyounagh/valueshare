import React, { useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import Input from "component/input/Input";
import Btn1 from "component/button/Btn1";
// eslint-disable-next-line no-unused-vars
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { gray6, white, gray2, gray3 } = color;

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

function NoneMember() {
  const [nonmemberInfo, setNonmemberInfo] = useState({
    nomnmemberName: "",
    nonmemberEmail: "",
    orderNumber: "",
  });
  const navigate = useNavigate();
  console.log(nonmemberInfo);
  const handleChange = (event) => {
    const { name, value } = event.target;

    const newData = {
      ...nonmemberInfo,
      [name]: value,
    };
    setNonmemberInfo(newData);
  };
  const handleSearch = async () => {
    console.log("클릭");
    const { nonmemberEmail, orderNumber } = nonmemberInfo;

    const body = {
      email: nonmemberEmail,
    };
    try {
      const response = await axios.post(
        `http://localhost:5000/users/orders/${orderNumber}`,
        body
      );

      if (response.status === 200) {
        navigate(`/myorder/${response.data.result}`);
      }
      console.log(response.data.result);
    } catch (err) {
      if (err) {
        if (err) {
          alert("주문번호혹은 이메일을 확인해주세요");
        }
      }
    }
  };
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
<<<<<<< HEAD
              <SInputDiv>
                <SInput
                  name="nomnmemberName"
                  onChange={handleChange}
                  placeholder="이름"
                />
              </SInputDiv>
            </SUserInfoDiv>
            <SUserInfoDiv>
              <SNameDiv> 주문자 이메일</SNameDiv>
              <SInputDiv>
                <SInput
                  name="nonmemberEmail"
                  onChange={handleChange}
                  placeholder="test@test.com"
                />
              </SInputDiv>
            </SUserInfoDiv>
            <SUserInfoDiv>
              <SNameDiv>주문번호</SNameDiv>
              <SInputDiv>
                <SInput
                  name="orderNumber"
                  onChange={handleChange}
                  placeholder="주문번호"
                />
              </SInputDiv>
            </SUserInfoDiv>
            <SButtonDiv>
              <SBtnDiv
                onClick={() => {
                  handleSearch();
                }}
              >
                <Btn1 title="주문 내역 조회" />
              </SBtnDiv>
=======
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
              <Btn1 title="주문 내역 조회" />
>>>>>>> ab461bcb25cd53860aed9f6dbff26743e4e16436
            </SButtonDiv>
          </SOrderItemDiv>
        </SItemDiv>
      </SLayout>
    </div>
  );
}

export default NoneMember;
