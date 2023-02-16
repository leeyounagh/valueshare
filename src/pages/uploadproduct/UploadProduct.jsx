import React, { useState, useRef } from "react";
import axios from "axios";
import Continent from "data/Continent";
import Brand from "data/Brand";

function UploadProduct() {
  const [imgFile, setImgFile] = useState([]);
  const imgRef = useRef();

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

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile((prev) => {
        const newImgFile = [...prev];
        newImgFile.push(reader.result);
        return newImgFile;
      });
    };
  };
  const handleSubmit = async (event) => {
    const { title, stock, price, category, brand } = data;
    event.preventDefault();

    const formData = new FormData();
    formData.append("imageFile", JSON.stringify(imgFile));
    //  이미지를 formdata에 넣는다
    const body = {
      productTitle: title,
      productStock: stock,
      productPrice: price,
      productCategory: category,
      productBrand: brand,
      productImage: formData,
    };
    try {
      const response = await axios.post("http://10.10.5.246:3000/", body);
      console.log(response);
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

      <div>
        {imgFile.map((item) => {
          return (
            <img
              style={{ width: "100px", height: "100" }}
              src={item}
              alt="프로필 이미지"
            />
          );
        })}
        <input
          type="file"
          accept="image/"
          id="profileImg"
          onChange={saveImgFile}
          ref={imgRef}
        />
      </div>

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
