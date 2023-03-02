import React, { useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
// eslint-disable-next-line no-unused-vars
import AxiosInstance from "data/AxiosInstance";
import { useNavigate } from "react-router-dom";

const { gray6, white, gray2, gray3, gray4 } = color;

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
  font-size: 18px;
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
const SBtnDiv = styled.div`
  width: 20%;
`;
function NoneMember() {
  const [nonmemberInfo, setNonmemberInfo] = useState({
    nomnmemberName: "",
    nonmemberEmail: "",
    orderNumber: "",
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newData = {
      ...nonmemberInfo,
      [name]: value,
    };
    setNonmemberInfo(newData);
  };
  const handleSearch = async () => {
    const { nonmemberEmail, orderNumber } = nonmemberInfo;

    const body = {
      email: nonmemberEmail,
    };
    try {
      const response = await AxiosInstance.post(
        `/users/orders/${orderNumber}`,
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
            </SButtonDiv>
          </SOrderItemDiv>
        </SItemDiv>
      </SLayout>
    </div>
  );
}

export default NoneMember;
