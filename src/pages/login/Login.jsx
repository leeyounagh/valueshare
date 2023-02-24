/* eslint-disable import/no-extraneous-dependencies */
import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import "../register/styles.css";

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
    <div className="login">
      <div className="loginTitle">로그인</div>
      <form className="login-form">
        <div className="login-form-input">
          <input
            name="email"
            type="text"
            value={email}
            placeholder="abc@valueshare.com"
            onChange={handleEmailChange}
          />
          <input
            name="pwd"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {!password.length > 7 ? <p>비밀번호는 7자 이상입니다.</p> : ""}
        </div>
        <div className="loginSubmit">
          <button type="submit" onClick={handleClick}>
            Login
          </button>
        </div>
      </form>
      <div className="loginResult">
        {isLoading ? "로그인중입니다." : null}
        {data ? `안녕하세요. ${data.id}님.` : null}

        {error || null}
      </div>
      <button type="submit">LOGIN</button>
    </form>
  );
}

export default Login;
