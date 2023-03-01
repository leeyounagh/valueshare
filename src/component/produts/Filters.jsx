/* eslint-disable no-unused-expressions */
import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Continent from "data/Continent";

const { gray3, gray4 } = color;

const SLayout = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-left: 30px;
`;
const SFilterTitleDiv = styled.div`
  width: 100%;
  height: 25%;
  padding-bottom: 20px;
`;
const SFilterTitle = styled.div`
  width: 97px;
  height: 37px;
  position: absolute;
  top: 100px;
  left: 30px;
  font-size: 30px;
  font-weight: 600;

  line-height: normal;

  text-align: left;
  color: ${color.gray2};
`;
const SLineDiv = styled.div`
  width: 90%;
  height: 1px;
  position: absolute;
  top: 160px;
  left: 30px;
  background-color: ${gray4};
`;
const SFilterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const SCategoryDiv = styled.div`
  width: 90%;
  height: auto;
  position: absolute;
  top: 60px;
  left: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  font-size: 18px;
  font-weight: normal;

  line-height: normal;

  text-align: center;
  color: ${color.gray2};
  cursor: pointer;
  overflow: hidden;
`;

const SCategoryItemDiv = styled.div`
  width: 95%;
  height: 50px;
  border-radius: 10px;
  border: solid 1px ${gray3};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  overflow: hidden;

  &.active {
    background-color: ${color.main};
    color: ${color.white};
  }

  &.odd-item {
    grid-column: 1 / span 2;
  }
`;

const SBottomLineDiv = styled.div`
  width: 90%;
  height: 1px;
  position: absolute;
  top: 490px;
  left: 30px;
  background-color: ${gray4};
`;

function Categories({ searchParams, setSearchParams }) {
  const selectedCategory = searchParams.get("categories");
  const continentSize = Continent.length;

  const handleClickCategory = (category) => {
    searchParams.set("categories", category);
    setSearchParams(searchParams);
  };

  return (
    <SLayout>
      <SFilterTitleDiv>
        <SFilterTitle>Filters</SFilterTitle>
        <SLineDiv />
      </SFilterTitleDiv>
      <SFilterDiv>
        <SCategoryDiv>
          {Continent.map((categoryData, index) => {
            return (
              <SCategoryItemDiv
                key={categoryData.index}
                value={categoryData.value}
                className={`${
                  selectedCategory === categoryData.value ? "active" : ""
                }${
                  continentSize % 2 === 1 && index === continentSize - 1
                    ? " odd-item"
                    : ""
                }`}
                onClick={() => handleClickCategory(categoryData.value)}
              >
                {categoryData.value}
              </SCategoryItemDiv>
            );
          })}
        </SCategoryDiv>
      </SFilterDiv>
      <SBottomLineDiv />
    </SLayout>
  );
}

export default Categories;
