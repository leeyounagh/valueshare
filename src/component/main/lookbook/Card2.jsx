import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import color from "../../../styles/color";

const SlayOut = styled.div`
  padding: 0 1%;
  h3 {
    text-align: center;
    margin-top: 16px;
    font-weight: 600;
    font-size: 20px;
    color: ${color.gray1};
  }
  p {
    font-size: 16px;
    color: ${color.gray3};
    text-align: center;
  }
  a {
    text-decoration: none;
    color: ${color.gray1};
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 30px;
  object-fit: cover;
`;

function Card2() {
  return (
    <SlayOut>
      <Link to="/lookbook">
        <CardImg src="/asset/img-lookbook2.png" />
        <h3>Louis Vuitton</h3>
        <p>Coussin MM</p>
      </Link>
    </SlayOut>
  );
}

export default Card2;
