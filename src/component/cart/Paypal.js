/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line import/no-extraneous-dependencies
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setOrderInfo } from "slice/OrderSlice";

function Paypal({ total, cartItems, setCartItems }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ShipInfo = useSelector((state) => {
    return state.UserAddressReducer;
  });

  const initialOptions = {
    "client-id":
      "AT3NE7EKYDtLHJ2q0nRqQqpTOPcycfmadei97OuSt2CKBtvY6y_oEiK7M5uFL9LQ2D9o3lp87AGth6fS",
    currency: "USD",
    intent: "capture",
  };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: `${total}`,
          },
        },
      ],
    });
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        createOrder={(data, actions) => onCreateOrder(data, actions)}
        onApprove={(data, actions) => {
          actions.order.capture().then(async () => {
            console.log(ShipInfo, data, "들어오기전");
            const newData = {
              // eslint-disable-next-line prettier/prettier
              phone: ShipInfo.phonenumber,
              email: ShipInfo.email,
              name: ShipInfo.customerName,
              products: cartItems,
              shipStatus: "주문접수",
              shipAdr: ShipInfo.address,
              shipNote: ShipInfo.memo,
              totalPrice: total,
            };

            try {
              const response = await axios.post(
                "http://localhost:5000/checkout",
                newData
              );

              const orderData = await response.data;
              dispatch(setOrderInfo(orderData));
              localStorage.removeItem("baskets");
              navigate("/ordersuccess");
              alert("결제에 성공했습니다!!");
              setCartItems([]);
            } catch (err) {
              if (err) {
                console.log(err);
                console.log(ShipInfo, "확인");
                alert("주문접수에 실패했습니다.");
              }
            }
          });
        }}
      />
    </PayPalScriptProvider>
  );
}

export default Paypal;
