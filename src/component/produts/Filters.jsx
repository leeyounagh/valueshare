/* eslint-disable no-unused-expressions */
import React from "react";
import styled from "styled-components";
import color from "styles/color";
import Continent from "data/Continent";
import { useSearchParams } from "react-router-dom";

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

const SCategory2Div = styled.div`
  width: 90%;
  height: 80px;
  cursor: pointer;
  color: ${color.gray2};
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
`;
const SCategoryOuterDiv = styled.div`
  position: absolute;
  width: 98%;
  height: 50px;
  border-radius: 10px;
  border: solid 1px ${gray3};
  top: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SBottomLineDiv = styled.div`
  width: 90%;
  height: 1px;
  position: absolute;
  top: 490px;
  left: 30px;
  background-color: ${gray4};
`;
function Filters() {
  const filterItem = Continent.filter((item) => item.key !== 0 && item.key < 7);
  const filterItem2 = Continent.filter((item) => item.key >= 7);
  const [searchParams, setSearchParams] = useSearchParams({
    categories: "all",
    brand: "all",
  });
  const categories = searchParams.get("categories");
  const brand = searchParams.get("brand");
  console.log(categories, brand);

  return (
    <SLayout>
      <SFilterTitleDiv>
        <SFilterTitle>Filters</SFilterTitle>
        <SLineDiv />
      </SFilterTitleDiv>
      <SFilterDiv>
        <SCategoryDiv key={filterItem.key}>
          {filterItem.map((item) => {
            return (
              <SCategoryItemDiv
                onClick={() =>
                  setSearchParams({ categories: `${item.value}`, brand })
                }
              >
                {item.value}
              </SCategoryItemDiv>
            );
          })}
          <SCategory2Div key={filterItem2.key}>
            {filterItem2.map((item) => {
              return (
                <SCategoryOuterDiv
                  onClick={() =>
                    setSearchParams({ categories: `${item.value}` })
                  }
                >
                  {item.value}
                </SCategoryOuterDiv>
              );
            })}
          </SCategory2Div>
        </SCategoryDiv>
      </SFilterDiv>
      <SBottomLineDiv />
    </SLayout>
  );
}

export default Filters;
