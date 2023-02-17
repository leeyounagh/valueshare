import React from "react";
import Navbar from "component/Navbar";
import styled from "styled-components";
import color from "styles/color";
import EmptyCart from "../../component/cart/EmptyCart";
import OrderPrice from "../../component/cart/OrderPrice";

// import GetItemCart from "../../component/cart/GetItemCart";

const { gray6, white } = color;

const SLayout = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 780px;
  padding: 0 0 200px;
  background-color: ${gray6};
  display: flex;
`;
const SCartDiv = styled.div`
  width: 60%;
  height: 595px;
  padding: 158px 413px 159px;
  background-color: ${white};
  border-radius: 10px;
  margin-top: 80px;
  margin-left: 70px;
`;
const SOrderPriceDiv = styled.div`
  margin-top: 80px;
  margin-left: 50px;
`;
function Cart() {
  // const [isItem, setIsItem] = useState(false);
  // 나중에 데이터길이가 1이상인지 아닌지 판별하는 로직 구현해야됨
  return (
    <div>
      <Navbar />
      <SLayout>
        {/* <SCartDiv>{isItem ? <GetItemCart /> : <EmptyCart />}</SCartDiv> */}
        <SCartDiv>
          <EmptyCart />
        </SCartDiv>
        <SOrderPriceDiv>
          <OrderPrice />
        </SOrderPriceDiv>
      </SLayout>
    </div>
  );
}

export default Cart;
