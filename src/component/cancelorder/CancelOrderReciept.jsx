import React from "react";
import styled from "styled-components";
import color from "styles/color";

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
  width: 100%;
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
const SReturnButton = styled.button`
  font-size: 16px;
  font-weight: normal;

  line-height: normal;

  text-align: center;
  color: ${gray4};
  width: 15%;
  height: 30%;
  border-radius: 10px;
  border: solid 1px ${gray4};
  background-color: ${gray6};
  margin-right: 20px;
`;
const SCancelButton = styled.button`
  border: solid 1px ${gray3};
  width: 15%;
  height: 30%;

  font-size: 16px;
  font-weight: normal;

  line-height: normal;

  text-align: center;
  color: #000;
  background-color: ${white};
  border-radius: 10px;
  margin-right: 50px;
`;
function CancelOrderReciept() {
  return (
    <SLayout>
      <SCancelTitle>주문 취소하기</SCancelTitle>
      <SCancelReasonTitle> 취소 사유</SCancelReasonTitle>
      <SCancelTextArea placeholder="취소 사유를 적어주세요." />
      <SOrderDetailDiv>
        <SOrderDetailTitle>Order Details</SOrderDetailTitle>
        <SReceiveItemDiv>
          <SReceiveTitle> 받는 사람</SReceiveTitle>
          <SReceiveTextDiv> 이수연</SReceiveTextDiv>
        </SReceiveItemDiv>
        <SReceiveItemDiv>
          <SReceiveTitle> 연락처</SReceiveTitle>
          <SReceiveTextDiv> 010-0000-0000</SReceiveTextDiv>
        </SReceiveItemDiv>
        <SReceiveItemDiv>
          <SReceiveTitle> 배송지</SReceiveTitle>
          <SReceiveTextDiv>
            서울시 엘리스랩 엘리스동 엘리스로 122-12
          </SReceiveTextDiv>
        </SReceiveItemDiv>
        <SReceiveItemDiv>
          <SReceiveTitle> 배송메모</SReceiveTitle>
          <SReceiveTextDiv>배송 후 연락 주세요</SReceiveTextDiv>
        </SReceiveItemDiv>
        <SLineDiv />
      </SOrderDetailDiv>
      <SOrderTitalDiv>
        <STotalTextDiv> 합계</STotalTextDiv>
        <STotalPriceDiv> ₩240,000</STotalPriceDiv>
      </SOrderTitalDiv>
      <SButtonDiv>
        <SReturnButton>반품신청</SReturnButton>
        <SCancelButton>주문취소</SCancelButton>
      </SButtonDiv>
    </SLayout>
  );
}

export default CancelOrderReciept;
