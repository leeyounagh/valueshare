import React from "react";
import * as S from "./Navbar2.styled";

function Navbar() {
  return (
    <S.Layout>
      <S.RootDiv>
        <S.RootHomeDiv>
          <S.HomeImg src="asset/icon-home.svg" />
        </S.RootHomeDiv>
        <S.RootTitleDiv>
          <S.RootTitle>Home</S.RootTitle>
        </S.RootTitleDiv>
        <S.RootIconDiv>
          <S.RootIcontImg src="asset/Chevrons_chevron-right.svg" />
        </S.RootIconDiv>
        <S.CategoryDiv>
          <S.CategoryTitle>Category</S.CategoryTitle>
        </S.CategoryDiv>
      </S.RootDiv>

      <S.PageTitleDiv>Products</S.PageTitleDiv>
    </S.Layout>
  );
}

export default Navbar;
