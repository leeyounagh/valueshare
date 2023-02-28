import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: 40%;
  background-color: ${color.gray4};
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

const VersaceImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    scale: 1.1;
  }
`;

function Versace() {
  return (
    <SlayOut>
      <Link to="/product?categories=all&brand=Miu+Miu">
        <h2>VERSACE</h2>
        <VersaceImg src="/asset/img-versace.png" />
      </Link>
    </SlayOut>
  );
}

export default Versace;
