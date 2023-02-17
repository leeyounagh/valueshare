import React from "react";
import styled from "styled-components";

const SlayOut = styled.div`
  width: calc(100% / 4);
  height: 780px;

  h2 {
    margin-top: 100px;
    position: absolute;
    position: absolute;
    top: 40%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
`;
const GucciImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Gucci() {
  return (
    <SlayOut>
      <h2>GUCCI</h2>
      <GucciImg src="/asset/img-gucci.png" />
    </SlayOut>
  );
}

export default Gucci;
