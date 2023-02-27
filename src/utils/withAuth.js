/* eslint-disable import/prefer-default-export */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/function-component-definition
export const withAuth = (Component) => (props) => {
  const navigate = useNavigate();
  const auth = useSelector((item) => {
    return item.UserInfoReducer.auth;
  });
  useEffect(() => {
    if (auth === false) {
      alert("일반회원은 접근할수 없는 페이지 입니다.");
      navigate("/");
    }
  }, []);
  return <Component {...props} />;
};
