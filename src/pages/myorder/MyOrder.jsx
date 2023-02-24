/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Navbar from "component/Navbar";
import OrderHistory from "component/OrderHistory";
import OrderProduct from "component/myorder/OrderProduct";
import AddressDetail from "component/myorder/AddressDetail";
import styled from "styled-components";
import color from "styles/color";

const { gray6 } = color;
const SLayout = styled.div`
  width: 100%;
  background-color: ${gray6};
  padding-top: 100px;
  display: flex;
  position: relative;
`;

const SOrderHistoryDiv = styled.div`
  width: 30%;

  margin-right: 20px;
`;
const SCustomerInfoDiv = styled.div`
  width: 60%;
  display: grid;
  padding-left: 200px;
  padding-bottom: 100px;
`;
function MyOrder() {
  const { pathname } = useLocation();
  const objectId = pathname.substr(9);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    async function handleMyOlder() {
      const response = await axios.get(
        // `http://localhost:5000/myorder/${objectId}`
        "http://localhost:5000/myorder/63f6ca4ee81e1aa8283bb500"
      );
      const data = await response.data;
      setOrderData(data);
      console.log(response);
    }
    handleMyOlder();
  }, []);
  console.log(orderData);
  return (
    <div>
      <Navbar />
      <SLayout>
        <SOrderHistoryDiv>
          <OrderHistory orderData={orderData} />
        </SOrderHistoryDiv>
        <SCustomerInfoDiv>
          <OrderProduct orderData={orderData} />
          <AddressDetail orderData={orderData} />
        </SCustomerInfoDiv>
      </SLayout>
    </div>
  );
}

export default MyOrder;
