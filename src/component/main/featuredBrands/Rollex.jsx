import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    top: 10%;
    left: 66%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  p {
    position: absolute;
    top: 45%;
    left: 59%;
    width: 100%;
    color: ${color.gray3};
    z-index: 1;
  }
  a {
    text-decoration: none;
    color: ${color.gray1};
    overflow: hidden;
  }
`;
const Button = styled.button`
  position: absolute;
  width: 136px;
  height: 46px;
  border-radius: 10px 10px 10px 0;
  border: 1px solid ${color.gray2};
  top: 230px;
  right: 23%;
  background-color: ${color.gray5};
  cursor: pointer;
  z-index: 1;
`;

const RollexImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    scale: 1.1;
  }
`;

function Rollex() {
  return (
    <SlayOut>
      <Link to="/product?categories=all&brand=Balenciaga">
        <h2>Rollex</h2>
        <p>1%를 위한 기술, 성공의 상징 되다</p>
        <Button>view detail</Button>
        <RollexImg src="/asset/img-rollex.png" />
      </Link>
    </SlayOut>
  );
}

export default Rollex;
