import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "slice/UserSlice";
import color from "../../../styles/color";

const SlayOut = styled.header`
  width: 100%;
  height: 140px;
  padding: 35px 0 0;
  background-color: ${color.white};
  border-bottom: 1px solid ${color.gray4};
  display: flex;
  a {
    text-decoration: none;
    border: black;
  }
`;
const SLogoDiv = styled.div`
  width: 20%;
  height: 100%;
  color: black;
  white-space: nowrap;

  a {
    font-weight: bold;

    line-height: normal;

    text-align: left;
    color: black;
    font-family: "Rufina", serif;
    font-weight: 900;

    align-items: center;
  }
  h2 {
    font-family: "Rufina", serif;
    font-size: 60px;
    font-weight: 900;
  }
`;
const SBestSellerDiv = styled.div`
  height: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${color.gray1};
`;

const SProductDiv = styled.div`
  height: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${color.gray1};
`;

const SLookBookDiv = styled.div`
  height: 100%;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${color.gray1};
`;

const SMembershipDiv = styled.div`
  height: 100%;
  width: 130px;

  font-size: 20px;
  font-weight: 500;

  line-height: normal;

  text-align: left;
  color: ${color.gray1};
`;

const SLayoutInnerDiv = styled.div`
  display: flex;
  height: 67px;
  width: 100%;
  padding-left: 40px;
`;
const SLayoutMenuDiv = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: flex-end;
  padding-top: 25px;
`;

const SLayoutIconItem = styled.button`
  height: 100%;
  width: 130px;
  background-color: white;
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  border: 0;
  outline: 0;

  a {
    text-decoration: none;
    color: ${color.gray1};
  }
`;
const SInnerItemDiv = styled.div`
  justify-content: space-between;
  width: 60%;
  height: 100%;
  display: flex;
`;

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    dispatch(setUserInfo(""));
    navigate("/login");
  };
  return (
    <SlayOut>
      <SLayoutInnerDiv>
        <SLogoDiv>
          <Link to="/">
            <h2>value share</h2>
          </Link>
        </SLogoDiv>
        <SLayoutMenuDiv>
          <SInnerItemDiv>
            <Link to="/bestseller">
              <SBestSellerDiv>Best seller</SBestSellerDiv>
            </Link>
            <Link to="/product">
              <SProductDiv>Products</SProductDiv>
            </Link>
            <Link to="/lookbook">
              <SLookBookDiv>lookbook</SLookBookDiv>
            </Link>
            <Link to="/membership">
              <SMembershipDiv>Membership</SMembershipDiv>
            </Link>
            <Link to="/admin">
              <SLayoutIconItem>Admin</SLayoutIconItem>
            </Link>
            <SLayoutIconItem
              onClick={() => {
                handleLogout();
              }}
            >
              Logout
            </SLayoutIconItem>
          </SInnerItemDiv>
        </SLayoutMenuDiv>
      </SLayoutInnerDiv>
    </SlayOut>
  );
}

export default Header;
