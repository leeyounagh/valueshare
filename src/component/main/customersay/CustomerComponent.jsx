import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: 540px;
  height: 106px;
  background-color: ${color.white};
  border-radius: 50px;
  border: 1px solid ${color.gray4};
  display: flex;
  h4 {
    font-size: 18px;
    font-weight: 600;
    color: ${color.gray2};
  }
  p {
    color: ${color.gray3};
  }
`;

const Customer = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin: 21px 0 21px 42px;
`;

const CustomerText = styled.div`
  margin: 30px 15px;
`;

function CustomerComponent() {
  return (
    <SlayOut>
      <Customer src="/asset/img-customer.png" />
      <CustomerText>
        <h4>친구 결혼식때 요긴하게 잘 썼습니다.</h4>
        <p>@김상도</p>
      </CustomerText>
    </SlayOut>
  );
}

export default CustomerComponent;
