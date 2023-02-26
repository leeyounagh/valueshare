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

function EditCategory() {
  const [data, setData] = useState({
    changecategory: "",
    beforecategory: "",
  });

  const handleChangeCategory = async () => {
    const body = {
      categoryName: data.changecategory,
    };
    try {
      const response = await axios.patch(
        `http://localhost:5000/admin/categories/${data.beforecategory}`,
        body
      );
      setData({
        changecategory: "",
        beforecategory: "",
      });
      console.log(response);
      if (response.status === 200) {
        alert("카테고리 수정에 성공했습니다");
      }
    } catch (err) {
      if (err) {
        alert("카테고리 수정에 실패했습니다.");
      }
    }
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
          <h2>카테고리 수정</h2>
        </STitleDiv>
        <SInputDiv>
          <SInput
            onChange={handleChange}
            name="beforecategory"
            placeholder="수정할 카테고리를 입력해주세요"
          />
        </SInputDiv>
        <SInputDiv>
          <SInput
            onChange={handleChange}
            name="changecategory"
            placeholder="변경시킬 카테고리를 입력해주세요"
          />
        </SInputDiv>
        <SbuttonDiv>
          <SButton
            onClick={() => {
              handleChangeCategory();
            }}
          >
            수정
          </SButton>
        </SbuttonDiv>
      </SItemDiv>
    </SLayout>
  );
}

export default EditCategory;
