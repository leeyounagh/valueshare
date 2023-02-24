import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
import { Link } from "react-router-dom";

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
  margin: 60px 70px;
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

const BtnDiv = styled.div`
  width: 280px;
  height: auto;
  margin: auto;
`;

function Preparation() {
  return (
    <Slayout>
      <Modal>
        <NotfoundIcn src="/asset/icn-preparation.png" />
        <h2>서비스 준비중입니다.</h2>
        <BtnDiv>
          <Link to="/">
            <Btn1 title="메인으로 가기" />
          </Link>
        </BtnDiv>
      </Modal>
    </Slayout>
  );
}

export default Preparation;
