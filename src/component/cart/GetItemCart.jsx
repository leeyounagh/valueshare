/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import color from "styles/color";

const { gray1, gray3, gray4 } = color;

const Slayout = styled.div`
  width: 100%;
`;
const SCartTextDiv = styled.div`
  width: 95%;
  height: 104px;
  padding-top: 60px;
`;
const SCartItemDiv = styled.div`
  width: 90%;
  height: 170px;
  display: flex;
  align-items: center;
  margin: auto;
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
const STotalCheckBoxDiv = styled.div`
  margin-left: 50px;
  margin-right: 15px;
`;
const SCartOptionTextDiv = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;

  flex-grow: 0;

  font-size: 18px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray3};
  white-space: nowrap;
`;
const SQuantityText = styled.div`
  flex-grow: 0;
  display: flex;
  justify-content: center;
  width: 12%;

  font-family: NotoSans;

  font-size: 18px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray3};
`;
const SPriceText = styled.div`
  width: 20%;
  flex-grow: 0;
  display: flex;
  justify-content: center;

  font-size: 18px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray3};
  white-space: nowrap;
`;
const SItemImg = styled.img`
  width: 130px;
  height: 148px;
  margin-left: 21px;
  object-fit: cover;
  border-radius: 10px;
  border: solid 1px ${color.gray5};
`;
const SItemOptionBrandTitle = styled.div`
  font-size: 18px;
  font-weight: 600;

  line-height: normal;

  text-align: left;
  color: ${gray1};
`;
const SProductName = styled.div`
  margin-top: 2px;
  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${gray3};
`;

const SItemDiv = styled.div`
  width: 100%;
  height: 148px;
  display: flex;
  border-bottom: 1px solid ${gray4};
  align-items: center;
  justify-content: space-between;
  margin-left: 10px;
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
  font-size: 18px;
  font-weight: bold;

  line-height: normal;

  text-align: center;
  color: ${gray1};
  width: 40px;
  height: 40px;
  padding-top: 10px;
`;
const SQuantityNextImg = styled.img`
  width: 36px;
  height: 36px;
  object-fit: contain;
  transform: rotate(-90deg);
`;
const SItemPriceDiv = styled.div`
  width: 23%;
  display: flex;
  justify-content: center;

  font-size: 18px;
  font-weight: bold;

  line-height: normal;

  text-align: right;
  color: ${gray1};
`;
const SAllDeleteIconDiv = styled.div`
  height: 40px;
  width: 160px;

  font-size: 16px;
  font-weight: normal;

  line-height: normal;

  text-align: center;
  color: ${color.gray1};
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
  width: 160px;

  font-size: 16px;
  font-weight: normal;

  line-height: normal;

  text-align: center;
  color: ${color.gray1};
  border-radius: 10px;
  border: solid 1px ${gray3};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const SIconDiv = styled.div`
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20%;
`;
const SCheckInput = styled.input`
  pointer: cursor;
  width: 24px;
  height: 24px;
  border-radius: 10px;
  &::after {
    background-color: black;
  }
`;

function GetItemCart({ cartItems, setCartItems }) {
  const [isAllChecked, setIsAllChecked] = useState(false);

  // 전체 삭제
  const handleAllDeleteCartItems = () => {
    setCartItems([]);
    localStorage.removeItem("baskets");
    alert("상품이 삭제되었습니다.");
  };

  const handleAllChecked = (e) => {
    const { checked } = e.target;

    const newItems = cartItems.map((item) => ({ ...item, checked }));
    setIsAllChecked(checked);
    setCartItems(newItems);
  };

  const handleCheckedCartItem = (e) => {
    const { value } = e.target;
    const newItems = cartItems.map((item) =>
      item._id === value
        ? {
            ...item,
            checked: !item.checked,
          }
        : item
    );

    const isAllCheckedNewItems = newItems.every((item) => item.checked);
    setCartItems(newItems);
    setIsAllChecked(isAllCheckedNewItems);
  };

  // 선택 된 상품 삭제
  const handleDeleteCartItem = () => {
    const deleteItemIds = cartItems
      .filter((item) => item.checked)
      .map((item) => item._id);

    const newCartItems = cartItems.filter(
      (item) => !deleteItemIds.includes(item._id)
    );
    setCartItems(newCartItems);
    localStorage.setItem("baskets", JSON.stringify(newCartItems));
    alert("상품이 삭제되었습니다.");
  };

  const handlePlusQuantity = (itemId) => {
    const newCartItems = cartItems.map((item) =>
      item._id === itemId
        ? {
            ...item,
            quantity:
              item.quantity === item.productStock
                ? item.productStock
                : item.quantity + 1,
          }
        : item
    );

    setCartItems(newCartItems);
    localStorage.setItem("baskets", JSON.stringify(newCartItems));
  };

  const handleMinusQuantity = (itemId) => {
    const newCartItems = cartItems.map((item) =>
      item._id === itemId
        ? { ...item, quantity: item.quantity === 1 ? 1 : item.quantity - 1 }
        : item
    );

    setCartItems(newCartItems);
    localStorage.setItem("baskets", JSON.stringify(newCartItems));
  };

  return (
    <Slayout>
      <SCartTextDiv>
        <SCartTextInnerDiv>
          <STotalCheckBoxDiv>
            <SCheckInput
              type="checkbox"
              id="check"
              onChange={handleAllChecked}
              checked={isAllChecked}
            />
          </STotalCheckBoxDiv>
          {/* 장바구니 전체선택 체크박스 */}
          <SCartOptionTextDiv>상품/옵션 정보</SCartOptionTextDiv>
          <SQuantityText>수량</SQuantityText>
          <SPriceText>상품금액</SPriceText>
        </SCartTextInnerDiv>
      </SCartTextDiv>

      {cartItems
        ? cartItems.map((item) => {
            return (
              <SCartItemDiv key={item._id}>
                <SCheckInput
                  value={item._id}
                  type="checkbox"
                  id="check1"
                  checked={item.checked}
                  onChange={handleCheckedCartItem}
                />

                {/* 장바구니 부분체크박스 */}
                <SItemImg src={item.productImage[0]} />
                <SItemDiv>
                  <SProductTextDiv>
                    <SItemOptionBrandTitle>
                      {item.productBrand.brandName}
                    </SItemOptionBrandTitle>
                    <SProductName>{item.productTitle}</SProductName>
                  </SProductTextDiv>
                  <SIconDiv onClick={() => handleMinusQuantity(item._id)}>
                    <SQuantityPreviusImg
                      src="asset/Chevrons_chevron-right.svg"
                      alt="minus수량"
                    />
                  </SIconDiv>
                  <SIconDiv>
                    <SQuantityTextDiv>{item.quantity}</SQuantityTextDiv>
                  </SIconDiv>
                  <SIconDiv
                    onClick={() => {
                      handlePlusQuantity(item._id);
                    }}
                  >
                    <SQuantityNextImg
                      src="asset/Chevrons_chevron-right.svg"
                      alt="plus수량"
                    />
                  </SIconDiv>
                  <SItemPriceDiv> {item.productPrice}</SItemPriceDiv>
                </SItemDiv>
              </SCartItemDiv>
            );
          })
        : null}

      <SCartIconDiv>
        <SAllDeleteIconDiv
          onClick={() => {
            handleAllDeleteCartItems();
          }}
        >
          {" "}
          전체 상품 삭제
        </SAllDeleteIconDiv>
        <SSelectedDeleteIconDiv
          onClick={() => {
            handleDeleteCartItem();
          }}
        >
          선택 상품 삭제
        </SSelectedDeleteIconDiv>
      </SCartIconDiv>
    </Slayout>
  );
}

export default GetItemCart;
