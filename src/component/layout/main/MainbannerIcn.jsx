import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const SlayOut = styled.div`
  display: flex;
  width: 30%;
  height: auto;
  background-color: ${color.white};

  p {
    font-size: 12px;
  }
  div {
    font-size: 16px;
    font-weight: 600;
    padding-right: 30px;
  }
`;

const SmainIcn = styled.img`
  width: 100%;
  height: 100%;
`;

function MainbannerIcn() {
  return (
    <SlayOut>
      <div>
        <SmainIcn src="../asset/icn-main1.svg" />
        <p>Monthly unique visit </p>
        <div>30,254,699</div>
      </div>
      <div>
        <SmainIcn src="../asset/icn-main2.svg" />
        <p>Active customers </p>
        <div>33 Million</div>
      </div>
      <div>
        <SmainIcn src="../asset/icn-main3.svg" />
        <p>Products for any need</p>
        <div>100k</div>
      </div>
    </SlayOut>
  );
}

export default MainbannerIcn;
