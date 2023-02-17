import React from "react";
import Navbar from "component/Navbar";
import styled from "styled-components";
import color from "styles/color";

const { gray6 } = color;

const SLayout = styled.div`
  width: 100%;
  height: 1702px;
  padding: 0 0 200px;
  background-color: ${gray6};
`;

function Cart() {
  return (
    <div>
      <Navbar />
      <SLayout>adsfads</SLayout>
    </div>
  );
}

export default Cart;
