import React from "react";
import styled from "styled-components";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const Slayout = styled.div`
  width: 100%;
`;

const CardList = styled.div`
  width: 100%;
  width: auto;
  height: auto;
  display: flex;
`;

function Lookbooks() {
  return (
    <Slayout>
      <h2>This weeks Lookbook</h2>
      <CardList>
        <Card1 />
        <Card2 />
        <Card3 />
      </CardList>
    </Slayout>
  );
}

export default Lookbooks;
