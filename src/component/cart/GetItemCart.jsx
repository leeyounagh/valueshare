import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { gray1, gray3, gray4 } = color;

const Slayout = styled.div`
  width: 100%;
`;
const SCartTextDiv = styled.div`
  width: 100%;
  height: 104px;
  padding-top: 60px;
`;
const SCartItemDiv = styled.div`
  height: 170px;
  display: flex;
  align-items: center;
  margin-left: 50px;
  border-bottom: 1px solid ${gray4};
`;
const SCartIconDiv = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
`;
const SCartTextInnerDiv = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
`;
const STotalChecBoxImg = styled.img`
  width: 24px;
  height: 24px;
`;
const STotalCheckBoxDiv = styled.div`
  margin-left: 50px;
`;
const SCartOptionTextDiv = styled.div`
  margin: 0 344px 19px 274px;
  flex-grow: 0;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
  white-space: nowrap;
`;
const SQuantityText = styled.div`
  flex-grow: 0;
  width: 200px;
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
const SPriceText = styled.div`
  flex-grow: 0;
  display: flex;
  justify-content: center;
  font-family: NotoSans;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
  white-space: nowrap;
`;
const SItemImg = styled.img`
  height: 80%;
  margin-left: 21px;
`;
const SItemOptionBrandTitle = styled.div`
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
const SProductName = styled.div`
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
const SProductTextDiv = styled.div`
  margin-left: 21px;
  white-space: nowrap;
  width: 50%;
`;
const SQuantityPreviusImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  transform: rotate(90deg);
`;
const SQuantityTextDiv = styled.div`
  font-family: Montserrat;
  padding: 4px 4px 4px 5px;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: ${gray1};
`;
const SQuantityNextImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  transform: rotate(-90deg);
`;
const SItemPriceDiv = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: ${gray1};
  margin-left: 120px;
`;
const SAllDeleteIconDiv = styled.div`
  height: 40px;
  width: 15%;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  height: 40px;
  border-radius: 10px;
  border: solid 1px ${gray3};
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const SSelectedDeleteIconDiv = styled.div`
  height: 40px;
  width: 15%;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  border-radius: 10px;
  border: solid 1px ${gray3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const SIconDiv = styled.div``;
function GetItemCart() {
  return (
    <Slayout>
      <SCartTextDiv>
        <SCartTextInnerDiv>
          <STotalCheckBoxDiv>
            <STotalChecBoxImg
              src="/asset/beforecheckbox.svg"
              alt="장바구니체크박스"
            />
          </STotalCheckBoxDiv>
          <SCartOptionTextDiv>상품/옵션 정보</SCartOptionTextDiv>
          <SQuantityText>수량</SQuantityText>
          <SPriceText>상품금액</SPriceText>
        </SCartTextInnerDiv>
      </SCartTextDiv>
      {Array.from({ length: 10 })
        .fill(0)
        .map(() => {
          return (
            <SCartItemDiv>
              <STotalChecBoxImg
                src="asset/beforecheckbox.svg"
                alt="장바구니체크박스"
              />
              <SItemImg src="asset/테스트가방.png" />
              <SProductTextDiv>
                <SItemOptionBrandTitle>Louis Vuitton</SItemOptionBrandTitle>
                <SProductName> 트위스트 MM 핸드백</SProductName>
              </SProductTextDiv>
              <SIconDiv>
                <SQuantityPreviusImg src="asset/Chevrons_chevron-right.svg" />
              </SIconDiv>
              <SIconDiv>
                <SQuantityTextDiv>999</SQuantityTextDiv>
              </SIconDiv>
              <SIconDiv>
                <SQuantityNextImg src="asset/Chevrons_chevron-right.svg" />
              </SIconDiv>

              <SItemPriceDiv> ₩60,000</SItemPriceDiv>
            </SCartItemDiv>
          );
        })}

      <SCartIconDiv>
        <SAllDeleteIconDiv> 전체 상품 삭제</SAllDeleteIconDiv>
        <SSelectedDeleteIconDiv> 선택 상품 삭제</SSelectedDeleteIconDiv>
      </SCartIconDiv>
    </Slayout>
  );
}

export default GetItemCart;
