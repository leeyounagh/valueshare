import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Navbar from "component/Navbar";

const { gray6, white } = color;

const SLayout = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${gray6};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SItemDiv = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 10px;
  background-color: ${white};
`;

function NoneMember() {
  return (
    <SLayout>
      <Navbar />
      <SItemDiv>afsdadsf</SItemDiv>
    </SLayout>
  );
}

export default NoneMember;
