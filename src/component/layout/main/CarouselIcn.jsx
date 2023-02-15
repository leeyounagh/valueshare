import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";
import MainbannerIcn1 ''

const SlayOut = styled.div`
  width: 100%;
  height: auto;
  background-color: ${color.white};
  padding 0 5%;

  p{
    font-size:10px;
  }
  div{
    font-size:14px;
    font-weight: 600;
  }
`;

const SmainIcn = styled.img`
  width: 100%;
  height: 100%;
`;

function MainbannerImg1() {
  return (
    <SlayOut>
      <SmainIcn src="../asset/icn-main1.svg" />
      <p>Monthly unique visit </p>
      <div>30,254,699</div>
    </SlayOut>
  );
}

export default MainbannerImg1;
