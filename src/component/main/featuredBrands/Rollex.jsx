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
    top: 0%;
    left: 66%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  p {
    position: absolute;
    top: 45%;
    left: 60%;
    width: 100%;
    color: ${color.gray3};
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
      <p>1%를 위한 기술, 성공의 상징 되다</p>
      <RollexImg src="/asset/img-rollex.png" />
    </SlayOut>
  );
}

export default Rollex;
