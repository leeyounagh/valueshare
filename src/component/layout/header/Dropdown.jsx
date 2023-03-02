import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserInfo } from "slice/UserSlice";

import color from "styles/color";

const DropdownAnimation = keyframes`
0%{
  transform: translateY(-50%);
  height:0;
}
100%{
  transform: translateY(0);
  height:100px;
}
`;
const Slayout = styled.div`
  width: 150px;
  height: 100px;
  background-color: ${color.white};
  position: absolute;
  top: 120px;
  right: 0;
  z-index: 2;
  border-radius: 10px;
  animation: ${DropdownAnimation} 0.5s ease-in-out;
  box-shadow: 6px 8px 10px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;

  ul {
    margin: auto;
    list-style: none;
    padding-top: 20px;
    line-height: 2;

    a {
      color: ${color.gray1};
    }
  }
`;

const Sbtn = styled.button`
  color: ${color.gray1};
  background-color: ${color.white};
  border: none;
`;
function Dropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    dispatch(setUserInfo(""));
    navigate("/login");
  };
  return (
    <Slayout>
      <ul>
        <Link to="/membermypage">Mypage</Link>
        <li>
          <Sbtn
            type="button"
            onClick={() => {
              handleLogout();
            }}
          >
            logout{" "}
          </Sbtn>
        </li>
      </ul>
    </Slayout>
  );
}

export default Dropdown;
