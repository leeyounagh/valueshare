import React from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";

const SLayout = styled.div`
  width: 100%;
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
`;

function Card() {
  return (
    <SLayout>
      <ProductCard />;
      {/* {Array.from({ length: 30 })
        .fill(0)
        .map(() => {
          return 
        })} */}
    </SLayout>
  );
}

export default Card;
