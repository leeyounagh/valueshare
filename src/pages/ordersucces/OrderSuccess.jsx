/* eslint-disable no-underscore-dangle */
import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Navbar from "component/Navbar";
import Btn1 from "component/button/Btn1";
// eslint-disable-next-line no-unused-vars
import Btn2 from "component/button/Btn2";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const { gray6, white, gray2, gray3 } = color;

const SLayout = styled.div`
  width: 100%;
  height: 90vh;
  background-color: ${gray6};
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

const SItemDiv = styled.div`
  width: 80%;
  height: 90%;
  border-radius: 10px;
  background-color: ${white};
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;
const SItemInnerDiv = styled.div`
  width: 50%;
  height: 100%;
`;
const SWalletImg = styled.img`
  width: 124px;
  height: 124px;
`;
const SCompleteLetter = styled.div`
  font-size: 30px;
  font-weight: bold;

  line-height: 0.67;

  text-align: center;
  color: ${gray2};
  margin-top: 5%;
`;
const SOrderNumberTextDiv = styled.div`
  font-size: 24px;
  font-weight: normal;

  line-height: 0.83;

  text-align: center;
  color: ${gray3};
  margin-top: 50px;
`;
const SOrderNumberDiv = styled.div`
  font-size: 40px;
  color: ${color.main};
  display: flex;
  justify-content: center;
`;
const SOrderGuideItemDiv = styled.div`
  font-size: 24px;
  font-weight: normal;

  line-height: 0.83;

  text-align: center;
  color: ${gray3};
  margin-bottom: 2%;
`;
const SImgDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
`;
const SOrderGuideDiv = styled.div`
  margin-top: 50px;
`;
const SbuttonDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 7%;
  margin-top: 60px;
`;
const SBtnDiv = styled.div`
  width: 50%;
  margin-right: 10px;
`;
function OrderSuccess() {
  const orderItem = useSelector((state) => {
    return state.OrderListReducer.orderList;
  });

  return (
    <div>
      <Navbar />
      <SLayout>
        <SItemDiv>
          <SItemInnerDiv>
            <SImgDiv>
              <SWalletImg src="/asset/지갑.png" />
            </SImgDiv>
            <SCompleteLetter>고객님, 주문이 완료되었습니다.</SCompleteLetter>
            <SOrderNumberTextDiv>
              고객님이 주문하신 주문번호는
            </SOrderNumberTextDiv>
            <SOrderNumberDiv>
              {orderItem[0]?.result.orderNumber}입니다.
            </SOrderNumberDiv>
            <SOrderGuideDiv>
              <SOrderGuideItemDiv>
                비회원의 주문내역 확인은 상단의
              </SOrderGuideItemDiv>
              <SOrderGuideItemDiv>
                “My order” 페이지에서 하실 수 있습니다.
              </SOrderGuideItemDiv>
            </SOrderGuideDiv>
            <SbuttonDiv>
              <SBtnDiv>
                <Link to={`/myorder/${orderItem[0]?.result._id}`}>
                  <Btn1 title="주문 내역 조회"> 주문 내역 조회 </Btn1>
                </Link>
              </SBtnDiv>

              <SBtnDiv>
                <Link to={`/myorder/cancel/${orderItem[0]?.result._id}`}>
                  <Btn2 title="주문 취소 요청" />
                </Link>
              </SBtnDiv>
            </SbuttonDiv>
          </SItemInnerDiv>
        </SItemDiv>
      </SLayout>
    </div>
  );
}

export default OrderSuccess;
