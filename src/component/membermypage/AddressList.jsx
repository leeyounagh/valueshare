/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from "react";
import styled from "styled-components";
import color from "styles/color";
import AddressModal from "./AddressModal";

const { white, gray1, gray3, gray5 } = color;

const SLayout = styled.div`
  width: 100%;
  margin-top: 50px;
  border-radius: 10px;
  background-color: ${white};
  padding-bottom: 20px;
`;
const STitleDiv = styled.div`
  padding-top: 40px;
  padding-left: 30px;
  height: 100px;
  h2 {
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
  }
`;
const SAddressDiv = styled.div`
  padding-left: 30px;
`;
const SIconDiv = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  white-space: nowrap;
`;
const SImg = styled.img`
  width: 28px;
  height: 28px;
`;
const SMainAddressDiv = styled.div`
  margin-left: 20px;
`;
const SAddressTextDiv = styled.div`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray3};
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const SLine = styled.div`
  background-color: ${gray5};
  height: 1px;
  margin-bottom: 20px;
  width: 90%;
  margin-left: 20px;
`;
const SAddAddressDiv = styled.button`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ff985f;
  padding-left: 30px;
  border:0;
  outline:0;
  background-color:white;
}

`;
function AddressList({ userInfo }) {
  const [isModal, setIsModal] = useState(false);

  return (
    <SLayout>
      <STitleDiv>
        <h2> Address List</h2>
      </STitleDiv>
      <SAddressDiv>
        <SIconDiv>
          <SImg src="/asset/map-pin.png" />
          <SMainAddressDiv> Main Address</SMainAddressDiv>
        </SIconDiv>
      </SAddressDiv>
      <SAddressTextDiv>
        {userInfo?.map((item) => {
          return <>{item?.shipAdr}</>;
        })}
      </SAddressTextDiv>
      <SLine />
      <SAddAddressDiv
        onClick={() => {
          setIsModal(!isModal);
        }}
      >
        + Add New Address
      </SAddAddressDiv>
      {isModal ? (
        <AddressModal userInfo={userInfo} setIsOpen={setIsModal} />
      ) : null}
    </SLayout>
  );
}

export default AddressList;
