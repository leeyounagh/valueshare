import React from "react";
import styled from "styled-components";
import Btn1 from "component/button/Btn1";
import color from "styles/color";
import { Link } from "react-router-dom";

const Slayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: auto;
  justify-content: center;
`;
const ImgLayer = styled.div`
  width: 30%;
  height: auto;
  margin: 44px 50px 44px 0;
`;

const SImg1 = styled.img`
  z-index: 0;
`;

const SImg2 = styled.img`
  position: relative;
  width: auto;
  z-index: -2;
  margin-top: -1100px;
  margin-left: -20px;
`;

const LoginLayer = styled.div`
  width: 60%;
  hieght: auto;
  padding: 40px 0;
  background: ${color.white};
  border-radius: 10px;
  margin: 44px 0;
  padding: 50px 30px;

  p {
    width: 100%;
    text-align: center;
  }

  a {
    display: block;
    width: 280px;
    margin: auto;
    padding: 80px 0;
  }
`;

const SIconImg = styled.img`
  width: auto;
  height: auto;
  display: block;
  margin: auto;
  padding: 80px 0;
`;

const STitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: ${color.gray1};
  padding-bottom: 25px;
`;

function RegisterComplete() {
  return (
    <Slayout>
      <ImgLayer>
        <SImg1 src="asset/img-sign2.png" alt="가입완료이미지" />
        <SImg2 src="asset/img-login2.png" alt="가입완료이미지2" />
      </ImgLayer>
      <LoginLayer>
        <SIconImg src="asset/icn-complete.png" alt="" />
        <STitle>Thanks for Sign Up!</STitle>
        <p>다양한 명품을 부담없이 누려보세요.</p>
        <Link to="/">
          <Btn1 title="메인으로 가기" />
        </Link>
      </LoginLayer>
    </Slayout>
  );
}

export default RegisterComplete;
