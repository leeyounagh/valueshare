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
      window.confirm("어드민 계정입니다.");
      navigate("/");
      // 백엔드에서 불리언값이 아닌 스트링으로 받고있어서 이런로직이 되었습니다.
    }
    if (!auth) {
      window.confirm("로그인해주세요");
      navigate("/login");
      // auth의 값이 없을때의 설정 입니다.
    }
  }, []);
  return <Component {...props} />;
};
