/* eslint-disable react/function-component-definition */
import React from "react";
import styled from "styled-components";
import Preparation from "component/mobile/MobilePreparation";

const SLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const DitectMobile = () => {
  return (
    <SLayout>
      <Preparation />
    </SLayout>
  );
};

export default DitectMobile;
