/* eslint-disable no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable array-callback-return */
/* eslint-disable react/self-closing-comp */
import AxiosInstance from "data/AxiosInstance";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { withAuth } from "utils/withAuth";

const SLayout = styled.div`
  width: 100%;
`;
const STitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;
const SItemDiv = styled.div`
  display: grid;
  place-items: center;
`;

const SButton = styled.button`
  width: 100px;
  height: 50px;
  margin-left: 50px;
`;
// eslint-disable-next-line react/function-component-definition
const Category = () => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState([]);
  // eslint-disable-next-line prettier/prettier

  useEffect(() => {
    async function handleCategory() {
      const response = await AxiosInstance.get("/admin/categories");

      const data = await response.data.result;
      setCategory(data);
      console.log(data);
    }
    handleCategory();
  }, []);

  const handleDeleteCategory = async (item) => {
    try {
      const response = await AxiosInstance.delete(
        `/admin/categories/${item._id}`
      );
      if (response.status === 200) {
        alert("카테고리가 삭제되었습니다.");
        window.location.reload();
      }
      console.log(response);
    } catch (err) {
      console.log(err);
      alert("삭제에 실패했습니다.");
    }
  };

  return (
    <SLayout>
      <STitle>
        <h2>카테고리 조회</h2>
      </STitle>
      <SItemDiv>
        {category?.map((item) => {
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                height: "100px",
              }}
            >
              {" "}
              {item.categoryName}
              <SButton
                onClick={() => {
                  handleDeleteCategory(item);
                }}
              >
                삭제
              </SButton>
            </div>
          );
        })}
      </SItemDiv>
    </SLayout>
  );
};

export default withAuth(Category);
