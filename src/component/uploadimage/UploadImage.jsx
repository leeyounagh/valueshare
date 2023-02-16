/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { productImage } from "slice/ImageSlice";

function UploadImage() {
  // const [image, setImage] = useState([]);
  const dispatch = useDispatch();

  const handleDrop = async (files) => {
    console.log(files[0]);

    // const formData = new FormData();
    // formData.append("file", files[0]);
    // console.log(files[0]);
    dispatch(productImage(files[0]));
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
        {/* {image.map((item) => {
          return <img key={item.id} src={item.name} alt={item.name} />;
        })} */}
      </div>
    </div>
  );
}

export default UploadImage;
