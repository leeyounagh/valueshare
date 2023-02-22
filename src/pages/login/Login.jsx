import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    axios.post("/endPoint", body).then((res) => {
      console.log(res.data);
    });
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
      </div>
    </div>
  );
}
