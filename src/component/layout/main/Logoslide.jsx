import React from "react";
import styled from "styled-components";

const SlayOut = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: auto;
  padding 0 5%;
`;

const Logoimg = styled.img`
  width: auto;
  height: auto;
`;

function LogoSlide() {
  return (
    <SlayOut>
      <Logoimg src="../asset/img-logo1.png" />
      <Logoimg src="../asset/img-logo2.png" />
      <Logoimg src="../asset/img-logo3.png" />
      <Logoimg src="../asset/img-logo4.png" />
      <Logoimg src="../asset/img-logo1.png" />
      <Logoimg src="../asset/img-logo2.png" />
      <Logoimg src="../asset/img-logo3.png" />
      <Logoimg src="../asset/img-logo4.png" />
    </SlayOut>
  );
}

export default LogoSlide;
