import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Button1 from "./button1";
import Button2 from "./button2";

const Slayout = styled.div`
  width: 100%;
  background-color: ${color.main};
  height: 500px;

  p {
    padding-top: 60px;
    padding-bottom: 14px;
    color: ${color.gray5};
    text-align: center;
    letter-spacing: 10px;
  }

  h2 {
    font-family: "Rufina", serif;
    font-size: 50px;
    text-align: center;
    color: ${color.white};
  }

  h4 {
    padding-top: 22px;
    color: ${color.gray1};
    text-align: center;
  }
  div {
    display: flex;
    margin-top: 40px;
    margin-left: 20%;
    div {
      margin-left: 20px;
    }
  }
`;

const BgPattern = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  position: absolute;
  margin-top: -350px;
  opacity: 0.6;
`;

function Membership() {
  return (
    <Slayout>
      <p>SUBSCRIPTION</p>
      <h2>
        Membership
        <br />
        Subscribe to Value Share
      </h2>
      <h4>명품 구매하지 말고 구독으로 다양하게 즐기자!</h4>
      <div>
        <Button1 />
        <Button2 />
      </div>
      <BgPattern src="/asset/bg-pattern.svg" />
    </Slayout>
  );
}

export default Membership;
