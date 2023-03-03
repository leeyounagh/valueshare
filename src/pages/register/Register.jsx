import axios from "axios";
// import AxiosInstance from "data/AxiosInstance";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import color from "styles/color";
import Btn1 from "component/button/Btn1";
import { useNavigate } from "react-router-dom";

const Slayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin: auto;
  justify-content: center;

  p {
    width: 100%;
  }
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

const TitleDiv = styled.div`
  width: 100%;
  display: flex;
`;
const STitle = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: left;
  color: ${color.gray1};
  padding-bottom: 25px;
  border-bottom: solid 1px ${color.gray4};
`;

const SDiv = styled.div`
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
`;

const SLabel = styled.span`
  width: 50%;
  height: 22px;
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  color: ${color.gray1};
`;
const SInputDiv = styled.div`
  width: 48%;
  margin: 8px 10px 8px 0;
`;
const SInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(220, 217, 217);
  padding: 10px 15px;
  margin-bottom: 17px;
  margin-right: 10px;
  font-size: 14px;
  border-color: ${(props) => props["aria-invalid"]};
  outline-color: ${color.main};
`;

const SBigInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(220, 217, 217);
  padding: 10px 15px;
  margin: 8px 0 20px 0;
  margin-right: 10px;
  font-size: 14px;
  border-color: ${(props) => props["aria-invalid"]};
  outline-color: ${color.main};
`;

const SP = styled.p`
  color: red;
  &::before {
    display: inline;
    content: "⚠";
  }
`;

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm();

  const navigate = useNavigate();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://34.64.139.64/api/auth/register",
        data
      );

      if (res.status === 200) {
        alert("회원가입 성공");
        navigate("/register_complete");
      }
    } catch (err) {
      console.log(err);
      if (err.response.data === "Error: 동일한 이메일이 존재합니다") {
        alert("이미 가입된 이메일입니다.");
      }
    }
  };

  return (
    <Slayout>
      <ImgLayer>
        <SImg1 src="asset/img-sign1.png" alt="로그인이미지" />
        <SImg2 src="asset/img-login2.png" alt="로그인이미지2" />
      </ImgLayer>
      <LoginLayer>
        <SSection onSubmit={handleSubmit(onSubmit)}>
          <STitle>Sign Up</STitle>
          <SDiv>
            <TitleDiv>
              <SLabel>Name</SLabel>
              <SLabel>Phone Number</SLabel>
            </TitleDiv>
            <SInputDiv>
              <SInput
                name="name"
                type="name"
                placeholder="elice"
                aria-invalid={errors.name ? "#bf1616" : `${color.gray4}`}
                {...register("name", {
                  required: true,
                  pattern: /^[가-힣a-zA-Z]{2,10}$/,
                })}
              />
              {errors.name && errors.name.type === "required" && (
                <SP>이름을 입력하세요.</SP>
              )}
              {errors.name && errors.name.type === "pattern" && (
                <SP>이름은 2~10자 입니다.</SP>
              )}
            </SInputDiv>
            <SInputDiv>
              <SInput
                name="phoneNumber"
                type="phoneNumber"
                placeholder="000-0000-0000"
                MaxLength="11"
                onChange={(e) => {
                  e.target.value
                    .replace(/[^0-9]/g, "")
                    .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
                }}
                aria-invalid={errors.phoneNumber ? "#bf1616" : `${color.gray4}`}
                {...register("phoneNumber", {
                  required: true,
                  pattern: /^\d{3}-\d{4}-\d{4}$/,
                })}
              />

              {errors.phoneNumber && errors.phoneNumber.type === "required" && (
                <SP>전화번호를 입력하세요.</SP>
              )}
              {errors.phoneNumber && errors.phoneNumber.type === "pattern" && (
                <SP>전화번호를 형식에 맞게 입력하세요.</SP>
              )}
            </SInputDiv>
            <SLabel>Email</SLabel>
            <SBigInput
              name="email"
              placeholder="elice@valueshare.com"
              aria-invalid={errors.email ? "red" : `${color.gray4}`}
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
            <TitleDiv>
              <SLabel>Password</SLabel>
              <SLabel>Confirm Password</SLabel>
            </TitleDiv>
            <SInputDiv>
              <SInput
                name="password"
                type="password"
                placeholder="영문 소문자, 숫자 포함 4~12자"
                aria-invalid={errors.password ? "#bf1616" : "#dadada"}
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
                  비밀번호는 4~12자 이며 영문 소문자, 숫자를 모두 포함해야
                  합니다.
                </SP>
              )}
            </SInputDiv>
            <SInputDiv>
              <SInput
                name="confirmPassword"
                type="password"
                placeholder="영문 소문자, 숫자 포함 4~12자"
                aria-invalid={
                  errors.confirmPassword ? "#bf1616" : `${color.gray4}`
                }
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password.current,
                })}
              />

              {errors.confirmPassword &&
                errors.confirmPassword.type === "required" && (
                  <SP>비밀번호를 입력하세요.</SP>
                )}
              {errors.confirmPassword &&
                errors.confirmPassword.type === "validate" && (
                  <SP>비밀번호가 일치하지 않습니다.</SP>
                )}
            </SInputDiv>
          </SDiv>
          <Btn1
            name="button"
            type="submit"
            title="Creat Account"
            disabled={!isDirty && !isValid}
          />
        </SSection>
      </LoginLayer>
    </Slayout>
  );
}

export default Register;
