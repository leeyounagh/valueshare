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
  border: solid 1px ${color.gray4};
  background-color: ${color.gray6};
  color: ${color.gray4};

  border-radius: 10px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
`;

function DisableBtn({ title }) {
  return (
    <Slayout>
      <SBtn2>{title}</SBtn2>
    </Slayout>
  );
}

export default DisableBtn;
