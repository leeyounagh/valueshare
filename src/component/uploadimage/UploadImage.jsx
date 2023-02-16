/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import axios from "axios";
import { useDispatch } from "react-redux";
import { productImage } from "slice/ImageSlice";

function UploadImage() {
	const [image, setImage] = useState([]);
	const dispatch = useDispatch();

	const handleDrop = async (files) => {
    const formData = new FormData();
		formData.append("file", files[0]);
		console.log(files[0]);

		try {
			const response = await axios.post("요청주소", formData);
			const data = await response.data;
			setImage((prev) => [...prev, ...data]);
			dispatch(productImage(image));
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
          return <img key={item.id} src={item.name} alt={item.name} />;
        })}
      </div>
    </div>
  );
}

export default UploadImage;
