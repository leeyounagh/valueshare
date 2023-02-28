/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
// eslint-disable-next-line import/no-extraneous-dependencies
import { decodeToken } from "react-jwt";
import { setUserInfo } from "slice/UserSlice";
import SetAuthorizationToken from "utils/SetAuthorizationToken";
// import AxiosInstance from "data/AxiosInstance";
import axios from "axios";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
import Btn2 from "component/button/Btn2";

const Slayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: auto;
  justify-content: center;
`;

const ImgLayer = styled.div`
  width: 30%;
  height: auto;
  margin: 44px 50px 44px 0;
`;

const SImg1 = styled.img`
  z-index: 0;
`;

const SImg2 = styled.img`
  position: relative;
  width: auto;
  z-index: -2;
  margin-top: -1100px;
  margin-left: -20px;
`;

const LoginLayer = styled.div`
  width: 60%;
  hieght: auto;
  padding: 40px 0;
  background: ${color.white};
  border-radius: 10px;
  margin: 44px 0;
  padding: 50px 30px;
`;

const SSection = styled.form`
  max-width: 500px;
  margin: 100px auto;
`;

const STitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  letter-spacing: normal;
  font-stretch: normal;
  text-align: left;

  color: ${color.gray1};
  padding-bottom: 25px;
  border-bottom: solid 1px ${color.gray5};
`;
const SDiv = styled.div`
  margin: 50px auto;
`;

const SLabel = styled.span`
  width: 56px;
  height: 22px;
  margin: 76px 280px 7px 2px;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${color.gray1};
`;

const SInput = styled.input`
  border-radius: 10px;
  background-color: ${color.white};
  width: 100%;
  height: 50px;
  padding-left: 24px;
  border-radius: 16px;
  border: solid 1px ${color.gray4};
  background-color: ${color.white};
  outline-color: ${color.main};
  margin-top: 10px;
  margin-bottom: 30px;
`;

const SP = styled.p`
  color: red;

  &::before {
    display: inline;
    content: "⚠";
  }
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  a {
    width: 100%;
  }
`;

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    console.log("data", data);

    try {
      const res = await axios.post("http://34.64.139.64/auth/login", data);
      console.log("data", res);
      if (res.status === 200) {
        alert("로그인 성공");
      }
      const token = await res.data.user;
      localStorage.setItem("jwtToken", token);
      SetAuthorizationToken(token);
      dispatch(setUserInfo(decodeToken(token)));
      navigate("/");
      console.log("data", res.data.user, decodeToken(token));
    } catch (err) {
      alert("아이디 혹은 비밀번호가 잘못되었습니다.");
      console.log(err);
    }
  };

  return (
    <Slayout>
      <ImgLayer>
        <SImg1 src="asset/img-login1.png" alt="로그인이미지" />
        <SImg2 src="asset/img-login2.png" alt="로그인이미지2" />
      </ImgLayer>
      <LoginLayer>
        <SSection onSubmit={handleSubmit(onSubmit)}>
          <STitle>Login</STitle>
          <SDiv>
            <SLabel>Email</SLabel>
            <SInput
              name="email"
              placeholder="elice@valueshare.com"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              })}
            />
            {errors.email && errors.email.type === "required" && (
              <SP>이메일을 입력하세요.</SP>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <SP>올바른 이메일 형식이 아닙니다.</SP>
            )}

            <SLabel>Password</SLabel>
            <SInput
              name="password"
              type="password"
              placeholder="영문 대/소문자, 숫자, 특수문자 포함 4~12자"
              {...register("password", {
                required: true,
                pattern: /(?=.*\d{1,50})(?=.*[a-z]{1,50}).{4,12}$/,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <SP>비밀번호를 입력하세요.</SP>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <SP>
                비밀번호는 4~12자 이며 영문 대/소문자, 숫자, 특수문자를 모두
                포함해야 합니다.
              </SP>
            )}
          </SDiv>
          <BtnDiv>
            <Btn1 type="submit" title="Log in" />
            <Link to="/register">
              <Btn2 title="Sign up" />
            </Link>
          </BtnDiv>
        </SSection>
      </LoginLayer>
    </Slayout>
  );
}

export default Login;
