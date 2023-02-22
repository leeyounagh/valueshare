import React from "react";
import styled from "styled-components";
import Navbar from "component/Navbar";
import color from "styles/color";
import OrderHistory from "component/OrderHistory";
import CancelOrderReciept from "component/cancelorder/CancelOrderReciept";

const { gray6 } = color;

const SLayout = styled.div`
  background-color: ${gray6};
  padding-top: 80px;
  display: flex;
`;
const SOrderHistoryDiv = styled.div`
  width: 30%;
  margin-right: 100px;
`;
function CancelOrder() {
  return (
    <div>
      <Navbar />
      <SLayout>
        <SOrderHistoryDiv>
          <OrderHistory />
        </SOrderHistoryDiv>

        <CancelOrderReciept />
      </SLayout>
    </div>
  );
}

export default CancelOrder;
