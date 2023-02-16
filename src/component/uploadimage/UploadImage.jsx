/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from "react";
// import Dropzone from "react-dropzone";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { productImage } from "slice/ImageSlice";

function UploadImage() {
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef();

  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    console.log(imgRef.current.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  return (
    <div>
      <div>
        <img src={imgFile} alt="상품이미지" />
        <input
          type="file"
          accept="image/*"
          id="profileImg"
          onChange={saveImgFile}
          ref={imgRef}
        />
      </div>
    </div>
  );
}

export default UploadImage;
