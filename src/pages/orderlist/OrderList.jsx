/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const SLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const STitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;
const STableDiv = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

function OrderList() {
  // eslint-disable-next-line no-unused-vars
  const [orderData, setOrderData] = useState();
  useEffect(() => {
    async function getOrderList() {
      const response = await axios.get("http://localhost:5000/admin/orders");
      setOrderData(response.data.result);
    }
    getOrderList();
  }, []);
  console.log(orderData);
  return (
    <div>
      <STitle>
        <h1>주문 리스트</h1>
      </STitle>
      <SLayout>
        <STableDiv>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>주문번호</th>
                <th>이름</th>
                <th>이메일</th>
                <th>주문삭제</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <Link to={`/admin/orderlist/${item._id}`}>
                      <td>{item._id}</td>
                    </Link>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                      <button type="submit">주문삭제</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </STableDiv>
      </SLayout>
    </div>
  );
}

export default OrderList;
