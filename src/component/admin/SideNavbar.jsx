/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ff985f;
`;
const STitle = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;
const SItemDiv = styled.div`
  width: 100%;
  height: 50%;
  display: grid;
  margin-top: 50px;
  a {
    text-decoration: none;
    color: white;
  }
`;

function SideNavbar() {
  return (
    <div>
      <SLayout>
        <STitle>
          <h2>메뉴</h2>
        </STitle>
        <SItemDiv>
          <Link to="/admin/orederlist">
            {" "}
            <SText>회원 주문내역 조회</SText>
          </Link>
          <Link to="/admin/product">
            {" "}
            <SText>상품조회</SText>
          </Link>
          <Link to="/admin/category/addproduct">
            {" "}
            <SText>상품등록</SText>
          </Link>
          <Link to="/admin/deleteproduct">
            {" "}
            <SText>상품삭제</SText>
          </Link>
          <Link to="/admin/category/editproduct">
            {" "}
            <SText>브랜드명 수정</SText>
          </Link>
          <Link to="/admin/category/editcategory">
            {" "}
            <SText>카테고리수정</SText>
          </Link>

          <Link to="/admin/addcategory">
            {" "}
            <SText>카테고리추가</SText>
          </Link>
          <Link to="/admin/category/editcategory">
            {" "}
            <SText>카테고리수정</SText>
          </Link>

          <Link to="/admin/category">
            {" "}
            <SText>카테고리조회</SText>
          </Link>
        </SItemDiv>
      </SLayout>
    </div>
  );
}

export default SideNavbar;
