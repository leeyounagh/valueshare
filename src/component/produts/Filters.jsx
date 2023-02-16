import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { gray4 } = color;

const SLayout = styled.div`
  width: 20%;
  height: 600px;
  position: relative;
`;
const SFilterTitleDiv = styled.div`
  width: 100%;
  height: 30%;
  padding-bottom: 20px;
`;
const SFilterTitle = styled.div`
  width: 97px;
  height: 37px;
  position: absolute;
  top: 70px;
  left: 30px;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
`;
const SLineDiv = styled.div`
  width: 90%;
  height: 1px;
  position: absolute;
  top: 150px;
  left: 30px;
  background-color: ${gray4};
`;
const SFilterDiv = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const SCategoryDiv = styled.div`
  border: 1px solid black;
  width: 90%;
  height: 75%;
  position: absolute;
  top: 50px;
  left: 30px;
`;
function Filters() {
  return (
    <SLayout>
      <SFilterTitleDiv>
        <SFilterTitle>Filters</SFilterTitle>
        <SLineDiv />
      </SFilterTitleDiv>
      <SFilterDiv>
        <SCategoryDiv />
      </SFilterDiv>
    </SLayout>
  );
}

export default Filters;
