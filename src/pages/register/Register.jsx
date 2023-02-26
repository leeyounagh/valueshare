import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

<<<<<<< HEAD
const SSection = styled.form`
=======
const SLayout = styled.form`
>>>>>>> ab461bcb25cd53860aed9f6dbff26743e4e16436
  max-width: 500px;
  margin: 100px auto;
`;

const STitle = styled.h1`
  font-family: Montserrat;
  font-size: 50px;
  font-weight: bold;
  letter-spacing: nomal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: center;

  color: #333333;
  padding-bottom: 25px;
  border-bottom: solid 1px #bdbdbd;
`;

const SDiv = styled.div`
  margin: 50px auto;
`;

const SLabel = styled.span`
  width: 56px;
  height: 22px;
  margin: 76px 280px 7px 2px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #333333;
`;

const SInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgb(220, 217, 217);
  padding: 10px 15px;
  margin-bottom: 17px;
  font-size: 14px;
  border-color: ${(props) => props["aria-invalid"]};
`;

const SSignUpBtn = styled.button`
  width: 100%;
  background: #ffaf54;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 15px;
  padding: 20px;
  font-family: Montserrat;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 7px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: center;
  border-radius: 10px;

  background: ${(props) => props["aria-invalid"]};
`;

const SP = styled.p`
  color: #bf1616;

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
    formState: { errors },
  } = useForm();

  // console.log(watch("email"));
  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    console.log("data", data);

    try {
      const res = await axios.post("/register", data);
      console.log("data", res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SSection onSubmit={handleSubmit(onSubmit)}>
      <STitle>Sign Up</STitle>
      <SDiv>
        <SLabel>Email</SLabel>
        <SInput
          name="email"
          type="email"
          placeholder="elice@valueshare.com"
          aria-invalid={errors.email ? "#bf1616" : "#dadada"}
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
          placeholder="영문 대/소문자, 숫자, 특수문자 포함 12~50자"
          aria-invalid={errors.password ? "#bf1616" : "#dadada"}
          {...register("password", {
            required: true,
            pattern:
              /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-z]{1,50})(?=.*[A-Z]{1,50}).{12,50}$/,
          })}
        />
        {errors.password && errors.password.type === "required" && (
          <SP>비밀번호를 입력하세요.</SP>
        )}
        {errors.password && errors.password.type === "pattern" && (
          <SP>
            비밀번호는 12~50자 이며 영문 대/소문자, 숫자, 특수문자를 모두
            포함해야 합니다.
          </SP>
        )}

        <SLabel>Confirm Password</SLabel>
        <SInput
          name="confirmPassword"
          type="password"
          aria-invalid={errors.confirmPassword ? "#bf1616" : "#dadada"}
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

        <SLabel>Name</SLabel>
        <SInput
          name="name"
          type="name"
          placeholder="elice"
          aria-invalid={errors.name ? "#bf1616" : "#dadada"}
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

        <SLabel>Phone Number</SLabel>
        <SInput
          name="phoneNumber"
          type="phoneNumber"
          placeholder="000-0000-0000"
          aria-invalid={errors.phoneNumber ? "#bf1616" : "#dadada"}
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
      </SDiv>
      <SSignUpBtn
        name="button"
        type="submit"
        // disabled={!isDirty && !isValid}
        aria-invalid={errors.button ? "#808080" : "#dadada"}
      >
        CREATE ACCOUNT
      </SSignUpBtn>
    </SSection>
  );
}

export default Register;
