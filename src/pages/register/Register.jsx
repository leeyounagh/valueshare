import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const SSection = styled.form`
  max-width: 500px;
  margin: 100px auto;
`;

const STitle = styled.h1`
  font-weight: 100;
  color: #333333;
  text-align: center;
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
  margin-bottom: 10px;
  font-size: 14px;
`;

const SSignUpBtn = styled.button`
  width: 100%;
  background: #ffaf54;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  border-radius: 10px;
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
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <SP>이메일을 입력하세요.</SP>}

        <SLabel>Password</SLabel>
        <SInput
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 12 })}
        />
        {errors.password && errors.password.type === "required" && (
          <SP>비밀번호를 입력하세요.</SP>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <SP>비밀번호는 최소 12자 이상으로 입력해야합니다.</SP>
        )}

        <SLabel>Confirm Password</SLabel>
        <SInput
          name="confirmPassword"
          type="password"
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
          {...register("name", { required: true, maxLength: 10 })}
        />
        {errors.name && errors.name.type === "required" && (
          <SP>이름을 입력하세요.</SP>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <SP>최대길이를 초과하였습니다.</SP>
        )}

        <SLabel>Phone Number</SLabel>
        <SInput
          name="phoneNumber"
          type="phoneNumber"
          {...register("phoneNumber", {
            required: true,
          })}
        />
        {}
      </SDiv>
      <SSignUpBtn type="submit">CREATE ACCOUNT</SSignUpBtn>
    </SSection>
  );
}

export default Register;
