/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const SLayout = styled.form`
  max-width: 500px;
  margin: 100px auto;
  & > div {
    margin: 50px auto;
  }
`;
const SSpan = styled.span`
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
const SButton = styled.button`
  display: block;
  appearance: none;
  margin-top: 40px;
  border: 1px solid #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 4px;
`;

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log("data", data);

    axios.post("/", data).then((res) => console.log("data", data));
  };

  return (
    <SLayout onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <div>
        <SSpan>Email</SSpan>
        <input
          name="email"
          type="email"
          placeholder="elice@valueshare.com"
          defaultValue=""
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <p>이메일을 입력하세요.</p>}

        <SSpan>Password</SSpan>
        <input
          name="password"
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>비밀번호를 입력하세요.</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>비밀번호는 최소 6자 이상으로 입력해야합니다.</p>
        )}

        <SSpan>Confirm Password</SSpan>
        <input
          name="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password.current,
          })}
        />
        {errors.confirmPassword &&
          errors.confirmPassword.type === "required" && (
            <p>비밀번호를 입력하세요.</p>
          )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "validate" && (
            <p>비밀번호가 일치하지 않습니다.</p>
          )}

        <SSpan>Name</SSpan>
        <input
          name="name"
          type="name"
          {...register("name", { required: true, maxLength: 10 })}
        />
        {errors.name && errors.name.type === "required" && (
          <p>이름을 입력하세요.</p>
        )}
        {errors.name && errors.name.type === "maxLength" && (
          <p>최대길이를 초과하였습니다.</p>
        )}

        <SSpan>Phone Number</SSpan>
        <input
          name="phoneNumber"
          type="phoneNumber"
          {...register("phoneNumber", {
            required: true,
          })}
        />
        {}
      </div>
      <SButton type="submit">CREATE ACCOUNT</SButton>
    </SLayout>
  );
}

export default Register;
