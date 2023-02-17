import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: 100%;
  background-color: ${color.gray2};
  height: 390px;
  object-fit: cover;

  h2 {
    margin-top: 100px;
    text-align: center;
    position: absolute;
    top: 30%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
`;

const AddImg = styled.img`
  width: 100%;
  height: 100%;
`;

function Add() {
  return (
    <SlayOut>
      <h2>특별한 날의 명품이 아니라 일상의 명품을 누리세요</h2>
      <AddImg src="/asset/img-add.png" />
    </SlayOut>
  );
}

export default Add;
