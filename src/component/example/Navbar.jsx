import React from "react";
import {
  SLayout,
  SRootDiv,
  SRootHomeDiv,
  SHomeImg,
  SRootTitleDiv,
  SRootTitle,
  SRootIconDiv,
  SRootIcontImg,
  SCategoryDiv,
  SCategoryTitle,
  SPageTitleDiv,
} from "./Navbar.styled";

function Navbar() {
  return (
    <SLayout>
      <SRootDiv>
        <SRootHomeDiv>
          <SHomeImg src="asset/icon-home.svg" />
        </SRootHomeDiv>
        <SRootTitleDiv>
          <SRootTitle>Home</SRootTitle>
        </SRootTitleDiv>
        <SRootIconDiv>
          <SRootIcontImg src="asset/Chevrons_chevron-right.svg" />
        </SRootIconDiv>
        <SCategoryDiv>
          <SCategoryTitle>Category</SCategoryTitle>
        </SCategoryDiv>
      </SRootDiv>

      <SPageTitleDiv>Products</SPageTitleDiv>
    </SLayout>
  );
}

export default Navbar;
