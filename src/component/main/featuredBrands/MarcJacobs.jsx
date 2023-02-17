import React from "react";
import styled from "styled-components";

const SlayOut = styled.div`
  width: 60%;
  height: 390px;

  h2 {
    margin-top: 100px;
    font-size: 2.5rem;
    text-align: center;
    position: absolute;
    top: 30%;
    left: 30%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
`;

const MarcJacobsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function MarcJacobs() {
  return (
    <SlayOut>
      <h2>MarcJacobs</h2>
      <MarcJacobsImg src="/asset/img-marcjacobs.png" />
    </SlayOut>
  );
}

export default MarcJacobs;
