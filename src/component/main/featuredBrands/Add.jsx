import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: 100%;
  background-color: ${color.gray2};
  height: 390px;
  object-fit: cover;

  p {
    margin-top: 100px;
    text-align: center;
    position: absolute;
    font-size: 30px;
    font-weight: 300;
    top: 30%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
    color: ${color.white};
  }
`;

const AddDiv = styled.div`
  width: 100% !important;
  height: 100%;
  background-color: ${color.gray4};
  opacity: 0.5;
`;

const AddImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Add() {
  return (
    <SlayOut>
      <p>특별한 날의 명품이 아니라 일상의 명품을 누리세요</p>
      <AddDiv>
        <AddImg src="/asset/video-add.gif" />
      </AddDiv>
    </SlayOut>
  );
}

export default Add;
