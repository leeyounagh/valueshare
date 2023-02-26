/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import styled from "styled-components";
import SideNavbar from "component/admin/SideNavbar";

const SLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;
const SSideBarDiv = styled.div`
  width: 20vw;
  height: 100vh;
  color: white;
`;

const SMainDiv = styled.div`
  width: 80%;
  display: grid;
  justify-content: center;
  padding-top: 100px;
`;
const SItemDiv = styled.div``;
const SImg = styled.img``;
function Admin() {
  return (
    <SLayout>
      <SSideBarDiv>
        <SideNavbar />
      </SSideBarDiv>
      <SMainDiv>
        <SItemDiv>
          <h2>value shop 어드민페이지에 오신걸 환영합니다.</h2>
        </SItemDiv>
        <SItemDiv>
          <SImg
            src="/asset/Rectangle 40.png"
            width="60%"
            height="80%"
            style={{ marginLeft: "100px" }}
          />
        </SItemDiv>
      </SMainDiv>
    </SLayout>
  );
}

export default Admin;
