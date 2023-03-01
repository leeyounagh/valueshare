import React from "react";
import styled from "styled-components";
import color from "styles/color";

const { white, gray1 } = color;

const SLayout = styled.div`
  margin-top: 30px;
  width: 90%;
  height: 238px;
  padding: 30px 30px 64.2px 29px;
  border-radius: 10px;
  background-color: ${white};
`;
const STitleDiv = styled.div`
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
`;
const SEmailItmeDiv = styled.div`
  display: flex;
  margin-top: 30px;
`;
const SEmailImg = styled.img`
  margin-right: 10px;
`;
const SEmailText = styled.div`
  color: ${gray1};
  display: flex;
`;
const SSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${color.main};
  margin-left: 10px;
`;
const SConnectSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: ${gray1};
`;
function Help() {
  return (
    <SLayout>
      <STitleDiv> Help & Support</STitleDiv>
      <SEmailItmeDiv>
        {" "}
        <SEmailImg src="/asset/Mail.png" />
        <SEmailText>
          {" "}
          <span> Email to</span>
          <SSpan> support@elice.com</SSpan>
        </SEmailText>
      </SEmailItmeDiv>
      <SEmailItmeDiv>
        {" "}
        <SEmailImg src="/asset/icn-comment.svg" />
        <SEmailText>
          {" "}
          <SConnectSpan> Connect Value Share</SConnectSpan>
        </SEmailText>
      </SEmailItmeDiv>
    </SLayout>
  );
}

export default Help;
