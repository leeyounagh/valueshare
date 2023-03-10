import React from "react";
import styled from "styled-components";
import CustomerComponent from "./CustomerComponent";

const Slayout = styled.div`
  margin-left: -5%;
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
  padding: 15px 0;
  div {
    padding: 0 20px;
    div {
      padding: 0;
    }
  }
`;

function CustomerLine2() {
  return (
    <Slayout>
      <CardList>
        {Array.from({ length: 6 }).map(() => {
          return (
            <div key={Math.random()}>
              <CustomerComponent />
            </div>
          );
        })}
      </CardList>
    </Slayout>
  );
}

export default CustomerLine2;
