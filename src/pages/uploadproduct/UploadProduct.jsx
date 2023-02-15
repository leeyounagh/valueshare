import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import UploadImage from "component/uploadimage/UploadImage";
import Continent from "data/Continent";
import Brand from "data/Brand";

function UploadProduct() {
  const image = useSelector((state) => {
    return state.image.image;
  });

  const [data, setData] = useState({
    title: "",
    stock: "",
    price: "",
    category: "",
    brand: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    const newData = {
      ...data,
      [name]: value,
    };
    setData(newData);
  };
  const handleSubmit = async (event) => {
    const { title, stock, price, category, brand } = data;
    event.preventDefault();
    const body = {
      productTitle: title,
      productStock: stock,
      productPrice: price,
      productCategory: category,
      productBrand: brand,
      productImage: image,
    };
    try {
      const response = await axios.post("요청예정url", body);
      const status = await response.status;
      console.log(status);
    } catch (err) {
      console.log(err);
    }
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
        <input name="stock" onChange={handleChange} placeholder="재고" />
      </div>
      <div>
        <input name="price" onChange={handleChange} placeholder="가격" />
      </div>

      <UploadImage setData={setData} />

      <div>
        <select
          onChange={handleChange}
          value={Continent}
          name={Continent[0].id}
        >
          {Continent.map((item) => {
            return (
              <option
                style={{ textAlignLast: "center" }}
                value={item.value}
                key={item.key}
              >
                {item.value}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <select onChange={handleChange} name={Brand[0].id} value={Brand}>
          {Brand.map((item) => {
            return (
              <option
                style={{ textAlignLast: "center" }}
                value={item.key}
                key={item.key}
              >
                {item.value}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <textarea placeholder="상품설명" />
      </div>
      <div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
}

export default UploadProduct;
