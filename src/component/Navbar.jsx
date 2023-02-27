import React from "react";
import { useSelector } from "react-redux";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import urlState from "../data/atom";
import color from "../styles/color";

const SLayout = styled.nav`
  width: 100%;
  height: 233px;
  padding: 33px 0 0;
  background-color: var(--white);
  border-bottom: 1px solid ${color.gray4};
  background-color: ${color.white};
`;

const SRootHomeDiv = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  height: 100%;
`;
const SRootTitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
`;
const SHomeImg = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;
const SRootTitle = styled.div``;
const SRootDiv = styled.div`
  display: flex;
  width: 50%;
  height: 30%;
  margin-left: 54px;

  font-size: 24px;
  font-weight: normal;

  line-height: normal;

  text-align: left;
  color: ${color.black};
`;
const SRootIconDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const SRootIcontImg = styled.img`
  width: 36px;
  height: 30px;
  transform: rotate(-90deg);
  margin-top: 10px;
`;
const SCategoryDiv = styled.div``;
const SCategoryTitle = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const SPageTitleDiv = styled.div`
  width: 100%;
  height: 70%;
  margin-left: 54px;
  font-size: 80px;
  font-weight: bold;

  line-height: normal;

  text-align: left;
  color: ${color.black};
`;

function Navbar() {
  const text = useSelector((state) => {
    return state.pageTitleReducer;
  });

  const [url, setUrl] = useRecoilState(urlState);

  setUrl(text.rootTitle);

  console.log(setUrl);

  return (
    <SLayout>
      <SRootDiv>
        <SRootHomeDiv>
          <SHomeImg src="/asset/icon-home.svg" />
        </SRootHomeDiv>
        <SRootTitleDiv>
          <SRootTitle>Home</SRootTitle>
        </SRootTitleDiv>
        <SRootIconDiv>
          <SRootIcontImg src="/asset/Chevrons_chevron-right.svg" />
        </SRootIconDiv>
        <SCategoryDiv>
          <SCategoryTitle>
            {text.rootTitle}
            {url}
          </SCategoryTitle>
        </SCategoryDiv>
      </SRootDiv>

      <SPageTitleDiv>{text.currentTitle}</SPageTitleDiv>
    </SLayout>
  );
}

export default Navbar;
