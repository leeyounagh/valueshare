import React from "react";
import Navbar from "component/Navbar";
import OrderHistory from "component/OrderHistory";
import OrderProduct from "component/myorder/OrderProduct";
import styled from "styled-components";
import color from "styles/color";

const { gray6 } = color;
const SLayout = styled.div`
  width: 100%;
  background-color: ${gray6};
  padding-top: 100px;
  display: flex;
`;

function MyOrder() {
  return (
    <div>
      <Navbar />
      <SLayout>
        <OrderHistory>adfadf</OrderHistory>

        <OrderProduct>adsfasd</OrderProduct>
      </SLayout>
    </div>
  );
}

export default MyOrder;
