/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import color from "styles/color";

const Slayout = styled.div`
  width: 100%;
  text-align: center;
  background-color: ${color.gray6};

  h2 {
    padding-top: 80px;
    padding-bottom: 50px;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    margin-bottom: 100px;
  }
`;

const Modal = styled.div`
  background-color: ${color.white};
  border-radius: 10px;
  padding-bottom: 100px;
`;

const NotfoundIcn = styled.img`
  margin-top: 170px;
  width: auto;
  height: auto;
  object-fit: contain;
`;

function Preparation() {
  return (
    <Slayout>
      <Modal>
        <NotfoundIcn src="/asset/icn-preparation.png" />
        <h2>서비스 준비중입니다.</h2>
      </Modal>
    </Slayout>
  );
}

export default Preparation;
