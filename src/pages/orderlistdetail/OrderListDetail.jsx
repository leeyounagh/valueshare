import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AxiosInstance from "data/AxiosInstance";
import styled from "styled-components";
import color from "styles/color";

const { gray6 } = color;

const SLayout = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const STitle = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SOrderListDiv = styled.div`
  width: 80%;
  height: 600px;
  background-color: ${gray6};
  border-radius: 10px;
  display: grid;
`;
const SItemDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SButton = styled.button``;
function OrderListDetail() {
  const { pathname } = useLocation();
  const objectId = pathname.substr(17);
  // eslint-disable-next-line no-unused-vars
  const [orderData, setOrderData] = useState([]);
  const [shipSatatus, setShipStatus] = useState("");

  useEffect(() => {
    async function getOrderList() {
      const response = await AxiosInstance.get(`/admin/orders/${objectId}`);
      setOrderData([response.data.result[0]]);
    }
    getOrderList();
  }, []);

  const handleEditOrder = async () => {
    const body = {
      shipStatus: shipSatatus,
    };
    try {
      const response = await AxiosInstance.patch(
        `/admin/orders/${objectId}`,
        body
      );

      if (response.status === 200) {
        alert("카테고리 수정에 성공했습니다");
      }
    } catch (err) {
      if (err) {
        alert("카테고리 수정에 실패했습니다.");
      }
    }
  };

  return (
    <div>
      <STitle>
        <h2>{orderData[0]?.name}고객 주문내역서</h2>
      </STitle>
      <SLayout>
        <SOrderListDiv>
          <SItemDiv>주문번호: {orderData[0]?.orderNumber}</SItemDiv>
          <SItemDiv>핸드폰번호: {orderData[0].phoneNumber}</SItemDiv>
          <SItemDiv>배송지: {orderData[0]?.shipAdr}</SItemDiv>
          <SItemDiv>배송상태: {orderData[0]?.shipStatus}</SItemDiv>
          <SItemDiv>
            배송수정:
            <input
              value={shipSatatus}
              onChange={(e) => {
                setShipStatus(e.target.value);
              }}
            />
            <SButton
              onClick={() => {
                handleEditOrder();
                window.location.reload();
              }}
            >
              수정하기
            </SButton>
          </SItemDiv>
          <SItemDiv>주문일: {orderData[0]?.updatedAt}</SItemDiv>
          <SItemDiv>id: {orderData[0]?.userId}</SItemDiv>
          <SItemDiv>
            {orderData[0]?.products?.map((item) => {
              return (
                <div>
                  주문상품:
                  {item.productName}
                  {item.productQuantity}
                </div>
              );
            })}
          </SItemDiv>
        </SOrderListDiv>
      </SLayout>
    </div>
  );
}

export default OrderListDetail;
