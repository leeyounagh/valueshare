import React from "react";
import styled from "styled-components";

const SLayout = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SItemDiv = styled.div`
  width: 60%;
  height: 80%;
  background-color: white;
`;
const STitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;
const SInput = styled.input`
  width: 60%;
  height: 20%;
  border-radius: 10px;
`;

const SInputDiv = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SbuttonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SButton = styled.button`
  width: 30%;
  height: 60px;
`;

function EditCategory() {
  return (
    <SLayout>
      <SItemDiv>
        <STitleDiv>
          <h2>카테고리 수정</h2>
        </STitleDiv>
        <SInputDiv>
          <SInput placeholder="수정할 카테고리를 입력해주세요" />
        </SInputDiv>
        <SInputDiv>
          <SInput placeholder="변경시킬 카테고리를 입력해주세요" />
        </SInputDiv>
        <SbuttonDiv>
          <SButton>수정</SButton>
        </SbuttonDiv>
      </SItemDiv>
    </SLayout>
  );
}

export default EditCategory;
