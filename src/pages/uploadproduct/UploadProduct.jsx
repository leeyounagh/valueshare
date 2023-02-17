import React, { useState, useRef } from "react";
import axios from "axios";
import Continent from "data/Continent";
import Brand from "data/Brand";

function UploadProduct() {
  // 미리보기 이미지 배열
  const [previewImages, setPreviewImages] = useState([]);
  // 이미지 파일 배열
  const [images, setImages] = useState([]);
  const imgRef = useRef();

  const [data, setData] = useState({
    title: "",
    stock: "",
    price: "",
    category: "",
    brand: "",
    desc: "",
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
    setImages((prev) => [...prev, file]);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImages((prev) => {
        const newImgFile = [...prev];
        newImgFile.push(reader.result);
        return newImgFile;
      });
    };
  };
  const handleSubmit = async (event) => {
    const { title, stock, price, category, brand, desc } = data;
    event.preventDefault();

    const formData = new FormData();
    // back-end에서 imageFile로 넘겨받고 있으므로 for문을 돌며 image를 formData에 셋팅해주세요.
    images.forEach((image) => {
      formData.append("imageFile", image);
    });
    formData.append("productTitle", title);
    formData.append("productStock", stock);
    formData.append("productPrice", price);
    formData.append("productCategory", category);
    formData.append("productBrand", brand);
    formData.append("productDescriptioin", desc);

    try {
      // 헤더값은 아래와 같이 설정해줍니다.
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await axios.post(
        "http://localhost:4200/admin/product/images",
        formData,
        config
      );
      const responseData = await response.data;

      if (responseData.status === 200) {
        alert("상품 업로드에 성공하였습니다.");
      }
    } catch (err) {
      if (err) {
        alert("상품 등록에 실해했습니다");
      }
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
        {previewImages.map((item, index) => {
          return (
            <img
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              style={{ width: "100px", height: "100" }}
              src={item}
              alt="미리보기이미지"
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
        <textarea
          placeholder="상품설명"
          name="desc"
          value={data.desc}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">등록</button>
      </div>
    </form>
  );
}

export default UploadProduct;
