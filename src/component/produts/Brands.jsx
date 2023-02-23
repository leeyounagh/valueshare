import React from "react";
import styled from "styled-components";
import color from "styles/color";
import BrandName from "data/BrandName";
import { useSearchParams } from "react-router-dom";

const { white, gray4, gray1 } = color;
const SLayout = styled.div`
  width: 100%;
  height: 420px;
  margin-left: 30px;
  border-bottom: 1px solid ${gray4};
  position: relative;
`;
const SBrandTitleDiv = styled.div`
  width: 109px;
  height: 37px;
  margin: 50px 91px 34px 44px;

  font-size: 30px;
  font-weight: 600;

  line-height: normal;

  text-align: left;
  color: #000;
`;

const SBrandListDiv = styled.div`
  height: 246px;
  margin: 34px 0 49px 44px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: ${white};
  }
  &::-webkit-scrollbar-thumb {
    height: 10px;
    background: ${gray1};
    border-radius: 6px;
  }
`;
const SBrandNameDiv = styled.div`
  height: 24px;
  display: flex;
  margin-bottom: 5px;
`;
const SCheckboxDiv = styled.div`
  margin-right: 5px;

  & > input {
    width: 18px;
    height: 18px;
    border-radius: 4px;
    margin-right: 4px;
  }
`;
const SBrandLineDiv = styled.div`
  width: 88%;
  height: 1px;
  background-color: ${gray4};
  position: absolute;
  top: 360px;
  left: 30px;
`;

function Brands() {
  const [searchParams, setSearchParams] = useSearchParams({
    categories: "all",
    brandId: "all",
  });
  const categories = searchParams.get("categories");
  const brandId = searchParams.get("brandId");
  console.log(categories, brandId);

  return (
    <SLayout>
      <SBrandTitleDiv>Brands</SBrandTitleDiv>
      <SBrandListDiv key={BrandName.key}>
        {BrandName.map((item) => {
          return (
            <SBrandNameDiv>
              <SCheckboxDiv>
                <input
                  type="checkbox"
                  disabled={item.disabled}
                  checked={item.checked}
                  onChange={() => {
                    setSearchParams({ categories, brandId: `${item.value}` });
                  }}
                />
              </SCheckboxDiv>
              <SCheckboxDiv>{item.value}</SCheckboxDiv>
            </SBrandNameDiv>
          );
        })}
        <SBrandLineDiv />
      </SBrandListDiv>
    </SLayout>
  );
}

export default Brands;
