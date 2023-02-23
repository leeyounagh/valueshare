/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SLayout = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SItemDiv = styled.div`
  width: 60%;
  height: 80%;
  background-color: white;
`;
const STitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;
const SInput = styled.input`
  width: 60%;
  height: 20%;
  border-radius: 10px;
`;

const SInputDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SbuttonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SButton = styled.button`
  width: 30%;
  height: 60px;
`;

function EditProduct() {
  const [data, setData] = useState({
    changeproduct: "",
    beforeproduct: "",
  });

  const handleChangeProduct = async () => {
    const body = {
      brandName: data.changeproduct,
    };
    const response = await axios.patch(
      `http://localhost:5000/admin/brands/${data.beforeproduct}`,
      body
    );
    console.log(response);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;

    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };

  return (
    <SLayout>
      <SItemDiv>
        <STitleDiv>
          <h2>상품 수정</h2>
        </STitleDiv>
        <SInputDiv>
          <SInput
            onChange={handleChange}
            name="beforeproduct"
            placeholder="수정할 상품명를 입력해주세요"
          />
        </SInputDiv>
        <SInputDiv>
          <SInput
            onChange={handleChange}
            name="changeproduct"
            placeholder="변경시킬 상품명를 입력해주세요"
          />
        </SInputDiv>
        <SbuttonDiv>
          <SButton
            onClick={() => {
              handleChangeProduct();
            }}
          >
            수정
          </SButton>
        </SbuttonDiv>
      </SItemDiv>
    </SLayout>
  );
}

export default EditProduct;
