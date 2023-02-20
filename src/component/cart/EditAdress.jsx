import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { white } = color;

const SLayout = styled.div`
  width: 80%;
  height: 60vh;
  flex-grow: 0;
  border-radius: 10px;
  background-color: ${white};
  z-index: 50;
`;

function EditAdress() {
  return <SLayout>어드레스</SLayout>;
}

export default EditAdress;
