import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: 60%;
  height: 390px;

  h2 {
    margin-top: 100px;
    font-size: 2.5rem;
    text-align: center;
    position: absolute;
    top: 15%;
    left: 24%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  p {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 100%;
    color: ${color.gray3};
  }
  a {
    text-decoration: none;
    color: ${color.gray1};
  }
`;
const Button = styled.button`
  position: absolute;
  width: 136px;
  height: 46px;
  border-radius: 10px 10px 10px 0;
  border: 1px solid ${color.main};
  background-color: ${color.white};
  top: 258px;
  left: 10%;
  color: ${color.main};
  cursor: pointer;
`;

const MarcJacobsImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function MarcJacobs() {
  return (
    <SlayOut>
      <Link to="/product?categories=all&brand=Chanel">
        <h2>MarcJacobs</h2>
        <p>독특하고 강렬한 마크 제이콥스로 매력을 어필하세요 </p>
        <Button>View detail</Button>
        <MarcJacobsImg src="/asset/img-marcjacobs.png" />
      </Link>
    </SlayOut>
  );
}

export default MarcJacobs;
