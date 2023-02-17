import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: calc(100% / 4);
  background-color: ${color.gray3};
  height: 780px;

  h2 {
    margin-top: 100px;
    font-size: 50px;
    text-align: center;
  }
`;

function Gucci() {
  return (
    <SlayOut>
      <h2>GUCCI</h2>
    </SlayOut>
  );
}

export default Gucci;
