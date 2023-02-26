import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { white, gray1, gray3, gray5 } = color;

const SLayout = styled.div`
  width: 80%;
  border-radius: 10px;
  background-color: ${white};
  padding-top: 50px;
  position: relative;
  padding-bottom: 20px;
`;
const STitleDiv = styled.div`
  font-family: Montserrat;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  width: 80%;
`;
const SIconDiv = styled.div``;
const STitleItemDiv = styled.div`
  display: flex;
  height: 20%;
  align-items: center;
  padding-left: 20px;
`;
const SItemDiv = styled.div`
  padding-left: 20px;
  height: 120px;
`;
const SOrderNumberDiv = styled.div`
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
  margin-top: 20px;
`;
const SPriceDiv = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
  height: 30%;
`;
const SDateDiv = styled.div`
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
`;
const SLinDiv = styled.div`
  background-color: ${gray5};
  height: 1px;
  margin-bottom: 20px;
  width: 90%;
  margin-left: 20px;
`;
const SStatusDiv = styled.div`
  width: 40%;
  position: absolute;
  top: 40%;
  left: 63%;
`;
const SStatusImg = styled.img`
  width: 80%;
  height: 12px;
`;
const SStatusItemDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;
const SStatusIconImg = styled.img``;
const SStatusText = styled.div`
  white-space: nowrap;
  font-family: NotoSans;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ff985f;
  margin-left: 5px;
`;
function MemberMyOrder() {
  return (
    <SLayout>
      <STitleItemDiv>
        <STitleDiv> Your Orders</STitleDiv>
        <SIconDiv>넥스트</SIconDiv>
      </STitleItemDiv>
      <SItemDiv>
        <SOrderNumberDiv> #481293</SOrderNumberDiv>
        <SPriceDiv> ₩63,000</SPriceDiv>
        <SDateDiv>2023-02-23, at 3:30 PM</SDateDiv>
      </SItemDiv>
      <SLinDiv />
      <SStatusDiv>
        <SStatusItemDiv>
          <div>
            <SStatusIconImg src="/asset/배송중.png" />
          </div>

          <SStatusText> 상품 이동중</SStatusText>
        </SStatusItemDiv>
        <SStatusImg src="/asset/상품이동중바.png" />
      </SStatusDiv>
    </SLayout>
  );
}

export default MemberMyOrder;
