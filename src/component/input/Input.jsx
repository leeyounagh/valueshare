import React from "react";
import styled from "styled-components";
import color from "styles/color";

const Slayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SInput = styled.input`
  border-radius: 10px;
  background-color: ${color.white};
  width: 410px;
  height: 50px;
  padding-left: 24px;
  border-radius: 16px;
  border: solid 1px ${color.gray4};
  background-color: ${color.white};
  outline-color: ${color.main};
`;

function Input({ placeholder, _onChange }) {
  return (
    <Slayout>
      <SInput placeholder={placeholder} onChange={_onChange} />
    </Slayout>
  );
}

export default Input;
