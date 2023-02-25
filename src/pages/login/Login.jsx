/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styled from "styled-components";
import Btn1 from "component/button/Btn1";
import Btn2 from "component/button/Btn2";
import Input from "component/input/Input";

const SLayout = styled.div`
  width: auto;
  height: auto;

  /* form {
  max-width: 500px;
  margin: 100px auto;
}

form > div {
  margin: 50px auto;
} */

  h1 {
    font-weight: 100;
    color: #333333;
    text-align: center;
    padding-bottom: 25px;
    border-bottom: solid 1px #bdbdbd;
  }
  /* 
.form {
  background: #0e101c;
  max-width: 400px;
  margin: 0 auto;
} */

  p {
    color: #bf1650;
  }

  p::before {
    display: inline;
    content: "⚠";
  }

  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 10px;
    border: 1px solid rgb(220, 217, 217);
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  /* span {
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
} */

  button[type="submit"],
  input[type="submit"] {
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
  }

  button[type="submit"]:hover,
  input[type="submit"]:hover {
    background: #ffa200;
  }

  button[type="submit"]:active,
  input[type="button"]:active,
  input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }

  input:disabled {
    opacity: 0.4;
  }

  input[type="button"]:hover {
    transition: 0.3s all;
  }

  button[type="submit"],
  input[type="button"],
  input[type="submit"] {
    -webkit-appearance: none;
  }

  button[type="button"] {
    display: block;
    appearance: none;
    background: #333;
    color: white;
    border: none;
    text-transform: uppercase;
    padding: 10px 20px;
    border-radius: 4px;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(watch("email"));
  const password = useRef();
  password.current = watch("password");

  const onSubmit = (data) => {
    console.log("data", data);
    // eslint-disable-next-line no-unused-vars
    axios.post("/", data).then((res) => console.log("data", data));
  };

  return (
    <SLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div>
          <span>Email</span>
          <Input
            placeholder="e-mail"
            name="email"
            type="email"
            defaultValue="elice@valueshare.com"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <input
            name="email"
            type="email"
            defaultValue="elice@valueshare.com"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>이메일을 입력하세요.</p>}
          <span>Password</span>
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
        </div>
        <BtnDiv>
          <Btn1 title="Log in" type="submit" />
          <Btn2 title="Sign In" />
        </BtnDiv>
      </form>
    </SLayout>
  );
}

export default Login;
