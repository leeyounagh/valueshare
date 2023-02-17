import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: 30%;
  height: auto;
`;
const Btn1 = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px 0 10px 10px;
  background-color: ${color.gray1};
  color: ${color.white};
  border: 0px;
`;

function Button2() {
  return (
    <SlayOut>
      <Btn1>구독 신청하기 (₩ 400,000 / 1년)</Btn1>
    </SlayOut>
  );
}

export default Button2;
