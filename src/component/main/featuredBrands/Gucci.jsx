import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "styles/color";

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

  a {
    text-decoration: none;
    color: ${color.gray1};
    overflow: hidden;
  }
`;
const GucciImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    scale: 1.1;
  }
`;

function Gucci() {
  return (
    <SlayOut>
      <Link to="/product?categories=all&brand=Gucci">
        <h2>GUCCI</h2>
        <GucciImg src="/asset/img-gucci.png" />
      </Link>
    </SlayOut>
  );
}

export default Gucci;
