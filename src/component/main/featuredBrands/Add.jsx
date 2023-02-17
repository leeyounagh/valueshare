import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: 100%;
  background-color: ${color.gray2};
  height: 390px;

  h2 {
    margin-top: 100px;
    font-size: 50px;
    text-align: center;
  }
`;

function Add() {
  return (
    <SlayOut>
      <h2>특별한 날의 명품이 아니라 일상의 명품을 누리세요</h2>
    </SlayOut>
  );
}

export default Add;
