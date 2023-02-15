import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

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

function MainbannerIcn1() {
  return (
    <SlayOut>
      <div>
        <SmainIcn src="../asset/icn-main1.svg" />
        <p>Monthly unique visit </p>
        <div>30,254,699</div>
      </div>
    </SlayOut>
  );
}

export default MainbannerIcn1;
