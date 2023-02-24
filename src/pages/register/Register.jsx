import axios from "axios";
import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import "./styles.css";

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

  const onSubmit = (data) => {
    console.log("data", data);

    axios.post("/", data).then((res) => console.log("data", data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
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

        <span>Confirm Password</span>
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

        <span>Name</span>
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

        <span>Phone Number</span>
        <input
          name="phoneNumber"
          type="phoneNumber"
          {...register("phoneNumber", {
            required: true,
          })}
        />
        {}
      </div>
      <button type="submit">CREATE ACCOUNT</button>
    </form>
  );
}

export default Register;
