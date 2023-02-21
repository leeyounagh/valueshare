import React from "react";
import styled from "styled-components";

const SLayout = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Register() {
  return (
    <SLayout>
      <form>
        <div style={{ marginBottom: "50px" }}>
          <input placeholder="이메일을 입력해주세요" />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <input placeholder="비밀번호를 입력해주세요" />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <input placeholder="비밀번호 확인" />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <button type="submit">회원가입하기</button>
        </div>
      </form>
    </SLayout>
  );
}

export default Register;
