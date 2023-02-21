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

const SOrderHistoryDiv = styled.div`
  width: 30%;
  margin-right: 20px;
`;
function MyOrder() {
  return (
    <div>
      <Navbar />
      <SLayout>
        <SOrderHistoryDiv>
          <OrderHistory />
        </SOrderHistoryDiv>

        <OrderProduct />
      </SLayout>
    </div>
  );
}

export default MyOrder;
