import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  padding: 0 1%;
  h3 {
    text-align: center;
  }
  p {
    font-size: 20px;
    color: ${color.gray3};
    text-align: center;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 600px;
  border-radius: 30px 0 30px 30px;
  object-fit: cover;
`;

function Card3() {
  return (
    <SlayOut>
      <CardImg src="/asset/img-lookbook3.png" />
      <h3>Louis Vuitton</h3>
      <p>Coussin MM</p>
    </SlayOut>
  );
}

export default Card3;
