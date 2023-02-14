import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";

const UploadImage = ({ handleChange, data }) => {
  const [image, setImage] = useState([]);

  const handleDrop = async (files) => {
    let formData = new FormData();
    formData.append("file", files[0]);
    try {
      const response = await axios.post("요청주소", formData);
      const data = await response.data;
      setImage((prev) => [...prev, ...data]);
    } catch (err) {
      alert("이미지 업로드에 실패했습니다.");
      console.log(err);
    }
  };

  return (
    <div>
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              style={{
                width: 250,
                height: 240,
                border: "1px solid black",
                borderRadius: "10px",
              }}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              이미지 업로드
            </div>
          </section>
        )}
      </Dropzone>
      <div>
        {image.map((item) => {
          return (
            <>
              <img src={item.name}></img>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default UploadImage;
