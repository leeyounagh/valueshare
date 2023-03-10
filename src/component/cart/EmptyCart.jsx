import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { gray3 } = color;

const SEmptyCartImg = styled.img`
  width: 124px;
  height: 124px;
  flex-grow: 0;
  margin: 0 80px 90px;
  object-fit: contain;
`;
const SLayout = styled.div`
  width: 100%;
`;
const SEmptyTitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-grow: 0;

  font-size: 22px;
  font-weight: bold;

  line-height: 0.83;

  text-align: center;
  color: ${gray3};
  margin-bottom: 10px;
  white-space: nowrap;
`;
const SItemDiv = styled.div`
  width: 100%;
  height: 20%;
`;
const SImgDiv = styled.div`
  display: flex;
  justify-content: center;
`;
function EmptyCart() {
  return (
    <SLayout>
      <SItemDiv>
        <SImgDiv>
          <SEmptyCartImg src="/asset/emptycart.png" alt="빈장바구니 아이콘" />
        </SImgDiv>
      </SItemDiv>
      <SItemDiv>
        <SEmptyTitleDiv>장바구니에 상품이 없습니다.</SEmptyTitleDiv>
        <SEmptyTitleDiv>상품을 추가해보세요</SEmptyTitleDiv>
      </SItemDiv>
    </SLayout>
  );
}

export default EmptyCart;
