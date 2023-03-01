import React, { useEffect } from "react";
import Navbar from "../../component/Navbar";
import Preparation from "../Preparation";

function LookBook() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Preparation />
    </div>
  );
}

export default LookBook;
