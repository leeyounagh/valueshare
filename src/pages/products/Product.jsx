import React, { useEffect, Suspense } from "react";
import styled from "styled-components";
import color from "styles/color";
import Navbar from "component/Navbar";
import Brands from "component/produts/Brands";
// import Card from "component/produts/Card";
import Categories from "component/produts/Categories";
import TopBtn from "component/button/TopBtn";
import { useSearchParams } from "react-router-dom";

const Card = React.lazy(() => import("component/produts/Card"));

const SLayout = styled.div`
  width: 100%;
  background-color: ${color.white};
`;

const SCategoryDiv = styled.div`
  width: 17%;
`;

const SCardDiv = styled.div`
  padding-top: 100px;
  margin-left: 5%;
  width: 80%;
`;
const SItemInnerDiv = styled.div`
  display: flex;
`;

function Product() {
  const [searchParams, setSearchParams] = useSearchParams({
    categories: "all",
    brand: "all",
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <SLayout>
      <Navbar />
      <SItemInnerDiv>
        <SCategoryDiv>
          <Categories
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <Brands
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </SCategoryDiv>
        <SCardDiv>
          <Suspense fallback={<div>Loading...</div>}>
            <Card />
          </Suspense>
        </SCardDiv>
      </SItemInnerDiv>
      <TopBtn />
    </SLayout>
  );
}

export default Product;
