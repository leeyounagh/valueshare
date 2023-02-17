import React from "react";
import styled from "styled-components";
import CustomerComponent from "./CustomerComponent";

const Slayout = styled.div`
  width: 100%;
  height: auto;

  h2 {
    padding-top: 100px;
    font-family: "Rufina", serif;
    font-size: 50px;
    text-align: center;
  }
`;

const CardList = styled.div`
  width: 100%;
  width: auto;
  height: auto;
  display: flex;
  background-color: #f5e5c7;
  padding: 45px 0;
`;

function CustomerLine() {
  return (
    <Slayout>
      <CardList>
        <CustomerComponent />
        <CustomerComponent />
        <CustomerComponent />
      </CardList>
    </Slayout>
  );
}

export default CustomerLine;
