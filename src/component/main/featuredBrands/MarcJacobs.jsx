import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: calc(100% / 2);
  background-color: ${color.gray2};
  height: 390px;

  h2 {
    margin-top: 100px;
    font-size: 50px;
    text-align: center;
  }
`;

function MarcJacobs() {
  return (
    <SlayOut>
      <h2>MarcJacobs</h2>
    </SlayOut>
  );
}

export default MarcJacobs;
