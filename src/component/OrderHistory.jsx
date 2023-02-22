/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
import React from "react";
import color from "styles/color";
import styled from "styled-components";
import { useSelector } from "react-redux";

const { white, gray1, gray3, gray4 } = color;

const SLayout = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${white};
  margin-left: 80px;
  padding-bottom: 50px;
`;
const SHistoryTitle = styled.div`
  font-family: Montserrat;
  font-size: 40px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  height: 15vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SItemDiv = styled.div`
  width: 100%;
  height: 20vh;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;
`;
const OrderNumberDiv = styled.div`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  height: 30%;
`;
const OrderPriceDiv = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
`;
const ItemQuantityDiv = styled.div`
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
  margin-top: 6px;
`;
const LineDiv = styled.div`
width: 100%;
height: 1px;
margin: 23px 0 0;
background-color: ${gray4};
}
`;
const SProductStatusDiv = styled.div`
  width: 25%;

  height: 30%;
  position: absolute;
  top: 10%;
  left: 65%;
`;
const SStatusTopDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;
const SStatusImgDiv = styled.div``;
const SStatusImg = styled.img`
  width: 28px;
  height: 28px;
`;
const SStatusText = styled.div`
  font-family: NotoSans;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ff985f;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5px;
`;
const SStatusIconDiv = styled.div`
  width: 100%;
  height: 50%;
`;
const SStatusIcon = styled.img`
  width: 100%;
  height: 50%;
  margin-top: 5px;
`;
function OrderHistory() {
  const orderItem = useSelector((state) => {
    return state.OrderListReducer.orderList;
  });
  console.log(orderItem);
  return (
    <SLayout>
      <SHistoryTitle>Order History</SHistoryTitle>
      <SItemDiv>
        {orderItem.map((item) => {
          return (
            <div>
              <OrderNumberDiv>{item.result._id}</OrderNumberDiv>
              <OrderPriceDiv>₩63,000</OrderPriceDiv>
              <ItemQuantityDiv>
                {" "}
                {item.result.products.length} Items
              </ItemQuantityDiv>
              <LineDiv />
              <SProductStatusDiv>
                <SStatusTopDiv>
                  <SStatusImgDiv>
                    <SStatusImg src="/asset/상품준비중아이콘.png" />
                  </SStatusImgDiv>

                  <SStatusText>상품 이동중</SStatusText>
                </SStatusTopDiv>
                <SStatusIconDiv>
                  <SStatusIcon src="/asset/상품준비중바.png" />
                </SStatusIconDiv>
              </SProductStatusDiv>
            </div>
          );
        })}
      </SItemDiv>
    </SLayout>
  );
}

export default OrderHistory;
