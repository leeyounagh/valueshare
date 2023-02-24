/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useState } from "react";
import Input from "component/input/Input";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(undefined);

  const [data, setData] = useState(undefined);

  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    setIsLoading(true);
    setData(undefined);

    const body = {
      email,
      password,
    };

    axios
      .post("/endPoint", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        setError("에러");
      });
  };

  return (
    <div className="login">
      <div className="loginTitle">로그인</div>
      <form className="login-form">
        <div className="login-form-input">
          <Input
            name="email"
            type="text"
            value={email}
            placeholder="abc@valueshare.com"
            onChange={handleEmailChange}
          />
          <Input
            name="pwd"
            type="password"
            value={password}
            placeholder="password"
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
    </div>
  );
}
