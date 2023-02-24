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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>
      <div>
        <span>Email</span>
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
      <button type="submit">LOGIN</button>
    </form>
  );
}

export default Login;
