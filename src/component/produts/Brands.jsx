import React from "react";
import styled from "styled-components";
import color from "styles/color";
import BrandName from "data/BrandName";

const { white, gray4, gray1 } = color;
const SLayout = styled.div`
  width: 100%;
  height: 420px;
  margin-left: 30px;
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
function Brands({ searchParams, setSearchParams }) {
  const selectedBrandNames = searchParams.get("brand");

  const isCheckedBrand = (brandName) => {
    return (
      selectedBrandNames === "all" ||
      selectedBrandNames.split(",").includes(brandName)
    );
  };

  const handleChangeBrand = (e) => {
    const { value: brandName } = e.target;

    const isSelectedBrand = isCheckedBrand(brandName);
    const selectedBrandNamesArray =
      selectedBrandNames === "all"
        ? [brandName]
        : selectedBrandNames.split(",");

    if (selectedBrandNames === "all") {
      searchParams.set("brand", brandName);
    } else if (isSelectedBrand) {
      const newSelectedBrandNames = selectedBrandNamesArray.filter(
        (brand) => brand !== brandName
      );

      searchParams.set(
        "brand",
        newSelectedBrandNames.length === 0
          ? "all"
          : newSelectedBrandNames.join(",")
      );
    } else {
      searchParams.set(
        "brand",
        [...selectedBrandNamesArray, brandName].join(",")
      );
    }

    setSearchParams(searchParams);
  };

  return (
    <SLayout>
      <SBrandTitleDiv>Brands</SBrandTitleDiv>
      <SBrandListDiv>
        {BrandName.map((item) => {
          return (
            <SBrandNameDiv key={item.index}>
              <SCheckboxDiv>
                <input
                  type="checkbox"
                  value={item.value}
                  disabled={item.disabled}
                  checked={isCheckedBrand(item.value)}
                  onChange={handleChangeBrand}
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
