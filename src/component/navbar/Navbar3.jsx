import React from "react";
import * as Styled from "./Navbar2.styled";

function Navbar() {
  return (
    <Styled.Layout>
      <Styled.RootDiv>
        <Styled.RootHomeDiv>
          <Styled.HomeImg src="asset/icon-home.svg" />
        </Styled.RootHomeDiv>
        <Styled.RootTitleDiv>
          <Styled.RootTitle>Home</Styled.RootTitle>
        </Styled.RootTitleDiv>
        <Styled.RootIconDiv>
          <Styled.RootIcontImg src="asset/Chevrons_chevron-right.svg" />
        </Styled.RootIconDiv>
        <Styled.CategoryDiv>
          <Styled.CategoryTitle>Category</Styled.CategoryTitle>
        </Styled.CategoryDiv>
      </Styled.RootDiv>

      <Styled.PageTitleDiv>Products</Styled.PageTitleDiv>
    </Styled.Layout>
  );
}

export default Navbar;
