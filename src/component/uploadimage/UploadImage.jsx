/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useState } from "react";

function UploadImage() {
  const [imgFile, setImgFile] = useState([]);
  const imgRef = useRef();

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
      <div>
        {imgFile.map((item) => {
          return <img src={item} alt="프로필 이미지" />;
        })}
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
