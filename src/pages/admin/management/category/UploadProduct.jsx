import React, { useState } from "react";
import UploadImage from "./uploadimage/UploadImage";
import Continent from "./uploadimage/data/Continent";
import Brand from "./uploadimage/data/Brand";
const UploadProduct = () => {
  const [data, setData] = useState({
    title: "",
    stock: "",
    price: "",
    category: "",
    brand: "",
    image: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form
      style={{
        width: "100vw",
        height: "80vh",
        marginTop: "100px",
        display: "grid",
        placeItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <input
          name="title"
          onChange={handleChange}
          placeholder="상품명을 입력하세요"
        />
      </div>
      <div>
        <input name="stock" onChange={handleChange} placeholder="재고"></input>
      </div>
      <div>
        <input name="price" onChange={handleChange} placeholder="가격"></input>
      </div>

      <UploadImage handleChange={handleChange}></UploadImage>

      <div>
        <select
          onChange={handleChange}
          value={Continent}
          name={Continent[0].id}
        >
          {Continent.map((item) => {
            return (
              <>
                <option
                  style={{ textAlignLast: "center" }}
                  value={item.value}
                  key={item.key}
                >
                  {item.value}
                </option>
              </>
            );
          })}
        </select>
      </div>

      <div>
        <select onChange={handleChange} name={Brand[0].id} value={Brand}>
          {Brand.map((item) => {
            return (
              <>
                <option
                  style={{ textAlignLast: "center" }}
                  value={item.key}
                  key={item.key}
                >
                  {item.value}
                </option>
              </>
            );
          })}
        </select>
      </div>
      <div>
        <textarea placeholder="상품설명"></textarea>
      </div>
      <div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
};

export default UploadProduct;
