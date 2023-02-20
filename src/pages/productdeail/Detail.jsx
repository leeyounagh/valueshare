import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";

const Slayout = styled.div`
  width: 100%;
  height: 200px;
  div {
    width: 500px;
    height: 100px;
  }
`;

function Detail() {
  const [productInformation, setProductInformation] = useState(null);
  const item = useSelector((state) => state.DetailReducer);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/products/:${item}`)
      .then((res) => {
        setProductInformation(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Slayout>
      <div>
        <h1>{productInformation?.name}</h1>
        <h1>{productInformation?.price}</h1>
        <h1>{productInformation?.description}</h1>
      </div>
    </Slayout>
  );
}

export default Detail;
