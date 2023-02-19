import React, { useState, useEffect } from "react";
import styled from "styled-components";
import color from "styles/color";
// import handlePlusStock from "utils/handlePlusStock";

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
  cursor: pointer;
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
  width: 13%;
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
const SIconDiv = styled.div`
  cursor: pointer;
`;
function GetItemCart() {
  const [cartItems, setCartItems] = useState();
  const [isAllChecked, setIsAllCecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkedIndex, setCeckedIndex] = useState([]);
  const basketsItem = JSON.parse(localStorage.getItem("baskets"));
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    console.log(cartItems, quantity);
    setCartItems(basketsItem);
  }, []);
  console.log(basketsItem[0].quantity);
  const handleDeleteAllItem = () => {
    localStorage.removeItem("baskets");
  };
  const handleDeleteCheckedItem = () => {
    checkedIndex.forEach((index) => {
      basketsItem.splice(index, 1);

      if (basketsItem.length === 0) {
        localStorage.removeItem("baskets");
      }
    });
  };
  const handleAllItemCheck = () => {
    setIsAllCecked(!isAllChecked);
  };
  const handleMinusStock = (item) => {
    if (item.quantity === 1) {
      return;
    }
    item.quantity -= 1;
    setQuantity(item.quantity);
    localStorage.setItem("baskets", JSON.stringify(basketsItem));
  };
  const handlePlusStock = (item) => {
    if (item.productStock === item.quantity) {
      return;
    }
    item.quantity += 1;
    setQuantity(item.quantity);
    localStorage.setItem("baskets", JSON.stringify(basketsItem));
  };

  const handleItemCheck = (index) => {
    setIsChecked(!isChecked);
    const sameIndex = checkedIndex.findIndex((item) => item === index);
    console.log(sameIndex);
    if (sameIndex === -1 && isChecked === true) {
      setCeckedIndex((prev) => {
        const newCheckedItem = [...prev];
        newCheckedItem.push(index);
        return newCheckedItem;
      });
    }

    // basketsItem.splice(index, 1);
    // localStorage.setItem("baskets", JSON.stringify(basketsItem));
    // if (basketsItem.length === 0) {
    //   localStorage.removeItem("baskets");
    // }
  };

  return (
    <Slayout>
      <SCartTextDiv>
        <SCartTextInnerDiv>
          <STotalCheckBoxDiv onClick={handleAllItemCheck}>
            {isAllChecked ? (
              <STotalChecBoxImg
                src="/asset/checkbox.svg"
                alt="장바구니체크박스"
              />
            ) : (
              <STotalChecBoxImg
                src="/asset/beforecheckbox.svg"
                alt="장바구니체크박스"
              />
            )}
          </STotalCheckBoxDiv>
          <SCartOptionTextDiv>상품/옵션 정보</SCartOptionTextDiv>
          <SQuantityText>수량</SQuantityText>
          <SPriceText>상품금액</SPriceText>
        </SCartTextInnerDiv>
      </SCartTextDiv>
      {basketsItem
        ? basketsItem.map((item, index) => {
            return (
              <SCartItemDiv>
                {isAllChecked ? (
                  <STotalChecBoxImg
                    src="/asset/checkbox.svg"
                    alt="장바구니체크박스"
                  />
                ) : (
                  <STotalChecBoxImg
                    onClick={() => {
                      handleItemCheck(index);
                    }}
                    src="/asset/beforecheckbox.svg"
                    alt="장바구니체크박스"
                  />
                )}
                <SItemImg src={item.productImage[0]} />
                <SProductTextDiv>
                  <SItemOptionBrandTitle>
                    {item.productBrand}
                  </SItemOptionBrandTitle>
                  <SProductName>{item.productTitle}</SProductName>
                </SProductTextDiv>
                <SIconDiv
                  onClick={() => {
                    handleMinusStock(item, index);
                  }}
                >
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
                    handlePlusStock(item, index);
                  }}
                >
                  <SQuantityNextImg
                    src="asset/Chevrons_chevron-right.svg"
                    alt="plus수량"
                  />
                </SIconDiv>

                <SItemPriceDiv> {item.productPrice}</SItemPriceDiv>
              </SCartItemDiv>
            );
          })
        : null}

      <SCartIconDiv>
        <SAllDeleteIconDiv
          onClick={() => {
            handleDeleteAllItem();
          }}
        >
          {" "}
          전체 상품 삭제
        </SAllDeleteIconDiv>
        <SSelectedDeleteIconDiv onClick={() => handleDeleteCheckedItem()}>
          선택 상품 삭제
        </SSelectedDeleteIconDiv>
      </SCartIconDiv>
    </Slayout>
  );
}

export default GetItemCart;
