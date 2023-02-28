/* eslint-disable react/function-component-definition */
import AxiosInstance from "data/AxiosInstance";
import React, { useState } from "react";
import styled from "styled-components";
import { withAuth } from "utils/withAuth";

const SLayout = styled.div`
  width: 100%;
  height: 90vh;
`;
const STitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;
const SItemDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 30%;
`;
const SInput = styled.input`
  width: 50%;
  height: 20%;
`;
const SButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SButton = styled.button`
  width: 40%;
  height: 30%;
  background-color: white;
`;
const AddCategory = () => {
  const [category, setCategory] = useState("");
  console.log(category);

  const handleCategory = async () => {
    try {
      const response = await AxiosInstance.post("/admin/categories", {
        categoryName: category,
      });
      alert("카테고리 등록에 성공했습니다.");
      window.location.reload();
      console.log(response);
    } catch (err) {
      if (err) {
        alert("카테고리 수정에  실패했습니다.");
      }
    }
  };
  return (
    <SLayout>
      <STitle>
        <h2>카테고리 추가</h2>
      </STitle>
      <SItemDiv>
        <SInput
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder="추가할 카테고리를 입력해주세요"
        />
      </SItemDiv>
      <SButtonDiv>
        <SButton
          onClick={() => {
            handleCategory();
          }}
        >
          추가
        </SButton>
      </SButtonDiv>
    </SLayout>
  );
};

export default withAuth(AddCategory);
