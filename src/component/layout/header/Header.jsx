import React from "react";
import styled from "styled-components";
import color from "../../../styles/color";

const { white } = color;

const SlayOut = styled.header`
  width: 1920px;
  height: 140px;
  margin: 0 0 16px;
  padding: 35px 0 0;
  background-color: ${white};
`;

function Header() {
  return <SlayOut>Header</SlayOut>;
}

export default Header;
