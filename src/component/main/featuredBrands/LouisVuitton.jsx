import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: calc(100% / 4);
  background-color: ${color.gray2};
  height: 390px;

  h2 {
    margin-top: 100px;
    font-size: 50px;
    text-align: center;
  }
`;

function LouisVuitton() {
  return (
    <SlayOut>
      <h2>LOUIS VUITTON</h2>
    </SlayOut>
  );
}

export default LouisVuitton;
