/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
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
  const { pathname } = useLocation();
  const objectId = pathname.substr(16);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    async function handleMyOlder() {
      const response = await axios.get(
        `http://localhost:5000/myorder/${objectId}`
      );
      const data = await response.data;
      setOrderData(data);
      console.log(response);
    }
    handleMyOlder();
  }, []);
  console.log(orderData, objectId);
  return (
    <div>
      <Navbar />
      <SLayout>
        <SOrderHistoryDiv>
          <OrderHistory orderData={orderData} />
        </SOrderHistoryDiv>

        <CancelOrderReciept orderData={orderData} />
      </SLayout>
    </div>
  );
}

export default CancelOrder;
