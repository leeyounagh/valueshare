import React from "react";
import styled from "styled-components";
import color from "../../styles/color";

const Slayout = styled.div`
  width: 100%;
  height: 50px;
`;

const SBtn2 = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${color.white};
  color: ${color.gray1};
  border-color: ${color.gray1};
  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
<<<<<<< HEAD
=======
  cusor: pointer;
>>>>>>> ccf00d4abd1ce891c0a5fe33cce47d739057333a
`;

function Btn2({ title }) {
  return (
    <Slayout>
      <SBtn2>{title}</SBtn2>
    </Slayout>
  );
}

export default Btn2;
