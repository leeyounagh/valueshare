import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: 100%;
  height: auto;
  margin-right: 50px;

  a {
    width: 100%;
  }
`;
const Btn1 = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px 10px 10px 0;
  background-color: ${color.gray1};
  color: ${color.white};
  border: 0px;
  cursor: pointer;
`;

function Button1() {
  return (
    <SlayOut>
      <Link to="/membership">
        <Btn1>구독 신청하기 (₩ 50,000 / 1개월)</Btn1>
      </Link>
    </SlayOut>
  );
}

export default Button1;
