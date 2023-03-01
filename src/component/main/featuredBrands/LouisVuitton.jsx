import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
    top: 60%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }
  a {
    text-decoration: none;
    color: ${color.gray1};
    overflow: hidden;
  }
`;
const LouisVuittonImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    scale: 1.1;
  }
`;

function LouisVuitton() {
  return (
    <SlayOut>
      <Link to="/product?categories=all&brand=Louis+Vuitton">
        <h2>LOUIS VUITTON</h2>
        <LouisVuittonImg src="/asset/img-louisvuitton.png" />
      </Link>
    </SlayOut>
  );
}

export default LouisVuitton;
