import React from "react";
import TopBtn from "component/button/TopBtn";
import BestSellerNavbar from "./BestSellerNavbar";
import BestSellerDetail from "./BestSellerDetail";

function BestSeller() {
  return (
    <div>
      <BestSellerNavbar />
      <BestSellerDetail />
      <TopBtn />
    </div>
  );
}

export default BestSeller;
