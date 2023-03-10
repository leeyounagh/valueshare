/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosInstance from "data/AxiosInstance";
import styled from "styled-components";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
import DisableBtn from "component/button/DisableBtn";

const { white, gray3, gray4, gray1, gray6 } = color;

const SLayout = styled.div`
  width: 60%;
  margin-left: 60px;
  border-radius: 10px;
  background-color: ${white};
  padding-left: 50px;
`;
const SCancelTitle = styled.div`
  width: 30%;
  white-space: nowrap;
  font-size: 40px;
  font-weight: 600;

  line-height: normal;

  text-align: left;
  color: #000;
  margin-top: 50px;
  height: 10vh;
`;
const SCancelReasonTitle = styled.div`
  font-size: 24px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray3};
`;
const SCancelTextArea = styled.textarea`
  margin: 19px 0 60px;
  padding: 41px 857px 40px 24px;
  border-radius: 16px;
  border: solid 1px ${gray4};
  background-color: ${white};
  white-space: nowrap;
  outline-color: #ff985f;
`;

const SOrderDetailDiv = styled.div``;
const SOrderDetailTitle = styled.div`
  font-size: 40px;
  font-weight: 600;

  line-height: normal;

  text-align: left;
  color: #000;
  height: 10vh;
`;
const SReceiveTitle = styled.div`
  width: 15%;

  font-size: 24px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray3};
`;
const SReceiveItemDiv = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const SReceiveTextDiv = styled.div`
  font-size: 24px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray1};
`;

const SLineDiv = styled.div`
  background-color: ${gray4};
  width: 95%;
  height: 1px;
  margin: 59px 0 19px 1px;
`;
const SOrderTitalDiv = styled.div`
  height: 10vh;
  display: flex;
`;
const STotalTextDiv = styled.div`
  font-size: 24px;
  font-weight: bold;

  line-height: normal;

  text-align: left;
  color: #000;
  width: 20%;
`;
const STotalPriceDiv = styled.div`
  width: 90%;

  font-size: 24px;
  font-weight: bold;

  line-height: normal;

  color: ${gray1};
  display: flex;
  justify-content: flex-end;
  margin-right: 70px;
`;
const SButtonDiv = styled.div`
  height: 15vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const SBtnDiv = styled.div`
  width: 18%;
  height: 30%;

  margin-right: 50px;
`;
function CancelOrderReciept({ orderData }) {
  const [cancelReason, setCancelReason] = useState("");
  const { pathname } = useLocation();
  const objectId = pathname.substr(16);
  const navigate = useNavigate();
  const handleCancel = async () => {
    try {
      const response = await AxiosInstance.patch(`/myorder/${objectId}`, {
        cancelNote: cancelReason,
      });
      if (response.status === 200) {
        alert("????????? ??????????????????.");
        navigate("/");
      }
    } catch (err) {
      alert("????????? ??????????????????.");
      console.log(err);
    }
  };

  console.log(orderData[0]);

  return (
    <SLayout>
      <SCancelTitle>?????? ????????????</SCancelTitle>
      <SCancelReasonTitle> ?????? ??????</SCancelReasonTitle>
      <SCancelTextArea
        value={cancelReason}
        onChange={(e) => {
          setCancelReason(e.target.value);
        }}
        placeholder="?????? ????????? ???????????????."
      />
      <SOrderDetailDiv>
        <SOrderDetailTitle>Order Details</SOrderDetailTitle>
        <SReceiveItemDiv>
          <SReceiveTitle> ?????? ??????</SReceiveTitle>
          <SReceiveTextDiv> {orderData[0]?.name}</SReceiveTextDiv>
        </SReceiveItemDiv>
        <SReceiveItemDiv>
          <SReceiveTitle> ?????????</SReceiveTitle>
          <SReceiveTextDiv> {orderData[0]?.phoneNumber}</SReceiveTextDiv>
        </SReceiveItemDiv>
        <SReceiveItemDiv>
          <SReceiveTitle> ?????????</SReceiveTitle>
          <SReceiveTextDiv>{orderData[0]?.shipAdr}</SReceiveTextDiv>
        </SReceiveItemDiv>
        <SReceiveItemDiv>
          <SReceiveTitle> ????????????</SReceiveTitle>
          <SReceiveTextDiv>{orderData[0]?.shipNote}</SReceiveTextDiv>
        </SReceiveItemDiv>
        <SLineDiv />
      </SOrderDetailDiv>
      <SOrderTitalDiv>
        <STotalTextDiv> ??????</STotalTextDiv>
        <STotalPriceDiv> ???{orderData[0]?.totalPrice * 1000}</STotalPriceDiv>
      </SOrderTitalDiv>
      <SButtonDiv>
        <SBtnDiv>
          <DisableBtn title="????????????" />
        </SBtnDiv>

        <SBtnDiv
          onClick={() => {
            handleCancel();
          }}
        >
          <Btn1 title="????????????" />
        </SBtnDiv>
      </SButtonDiv>
    </SLayout>
  );
}

export default CancelOrderReciept;
