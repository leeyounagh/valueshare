import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  width: calc(80% / 3);
  height: auto;
  padding: 0 20px;

  p {
    font-size: 20px;
    color: ${color.gray3};
  }
`;

const CardImg = styled.img`
  width: auto;
  height: 770px;
  border-radius: 30px;
`;

function Card2() {
  return (
    <SlayOut>
      <CardImg src="" />
      <h3>Louis Vuitton</h3>
      <p>Coussin MM</p>
    </SlayOut>
  );
}

export default Card2;
