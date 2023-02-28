/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import AxiosInstance from "data/AxiosInstance";
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function handleMyOlder() {
      const response = await AxiosInstance.get(`/myorder/${objectId}`);
      const data = await response.data;
      setOrderData([data[0]]);
      setProducts([data[1]]);
    }
    handleMyOlder();
  }, []);

  return (
    <div>
      <Navbar />
      <SLayout>
        <SOrderHistoryDiv>
          <OrderHistory orderData={orderData} />
        </SOrderHistoryDiv>
        <SCustomerInfoDiv>
          <OrderProduct orderData={orderData} products={products[0]} />
          <AddressDetail orderData={orderData} />
        </SCustomerInfoDiv>
      </SLayout>
    </div>
  );
}

export default MyOrder;
