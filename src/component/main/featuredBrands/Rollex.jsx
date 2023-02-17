import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: calc(100% / 2);
  background-color: ${color.gray4};
  height: 390px;

  h2 {
    margin-top: 100px;
    font-size: 2.5rem;
    text-align: center;
    position: absolute;
    top: 20%;
    left: 80%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
`;

const RollexImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function Rollex() {
  return (
    <SlayOut>
      <h2>Rollex</h2>
      <RollexImg src="/asset/img-rollex.png" />
    </SlayOut>
  );
}

export default Rollex;
