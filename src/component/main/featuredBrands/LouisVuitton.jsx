import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: calc(100% / 4);
  background-color: ${color.gray2};
  height: 390px;

  h2 {
    margin-top: 100px;
    font-size: 2.5rem;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
`;
const LouisVuittonImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function LouisVuitton() {
  return (
    <SlayOut>
      <h2>LOUIS VUITTON</h2>
      <LouisVuittonImg src="/asset/img-louisvuitton.png" />
    </SlayOut>
  );
}

export default LouisVuitton;
