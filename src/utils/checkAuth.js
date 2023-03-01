/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/function-component-definition
export const checkAuth = (Component) => (props) => {
  const navigate = useNavigate();
  const auth = useSelector((item) => {
    return item.UserInfoReducer?.userInfo?.[0]?.aud;
  });

  useEffect(() => {
    if (auth === "true") {
      alert("어드민 계정입니다.");
      navigate("/");
    } else if (auth === "false") {
      alert("로그인해주세요");
      navigate("/login");
    }
  }, []);
  return <Component {...props} />;
};
