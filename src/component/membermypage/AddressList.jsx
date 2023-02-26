import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { white, gray1, gray3, gray5 } = color;

const SLayout = styled.div`
  width: 80%;
  margin-top: 50px;
  border-radius: 10px;
  background-color: ${white};
`;
const STitleDiv = styled.div`
  padding-top: 40px;
  padding-left: 20px;
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
  padding-left: 20px;
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
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
const SLine = styled.div`
  background-color: ${gray5};
  height: 1px;
  margin-bottom: 20px;
`;
function AddressList() {
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
      <SAddressTextDiv> 엘리스시 엘리스동 엘리스로</SAddressTextDiv>
      <SLine />
    </SLayout>
  );
}

export default AddressList;
