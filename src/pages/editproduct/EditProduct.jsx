/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import AxiosInstance from "data/AxiosInstance";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const SLayout = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const SItemDiv = styled.div`
  width: 60%;

  background-color: white;
  padding-top: 50px;
  padding-bottom: 50px;
`;
const STitleDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`;

const SbuttonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const SButton = styled.button`
  width: 30%;
  height: 60px;
`;
const SProductItemDiv = styled.div`
  height: 100%;
`;
const SProductTitleDiv = styled.div`
  margin-bottom: 50px;
`;
const SInput = styled.input``;
const STextArea = styled.textarea`
  height: 20vh;
  width: 100%;
`;
const SImg = styled.img``;

function EditProduct() {
  const { pathname } = useLocation();
  // console.log(pathname);15
  const objectId = pathname.substr(15);
  const [productData, setProductData] = useState();
  const [images, setImages] = useState([]);
  // 미리보기 이미지 배열
  const [previewImages, setPreviewImages] = useState([]);
  const imgRef = useRef();
  const [data, setData] = useState({
    brandName: "",
    productStock: 0,
    productPrice: "",
    categoryName: "",
    productDescription: "",
    productTitle: "",
  });

  useEffect(() => {
    async function getOrderList() {
      const response = await AxiosInstance.get(`/admin/products/${objectId}`);
      setProductData([response.data.result]);
    }
    getOrderList();
  }, []);

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
  const handleEdit = async () => {
    const {
      brandName,
      productTitle,
      productStock,
      productPrice,
      categoryName,
      productDescription,
    } = data;
    const formData = new FormData();
    images.forEach((image) => {
      formData.append("productimage", image);
    });
    formData.append("productTitle", productTitle);
    formData.append("productStock", productStock);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", categoryName);
    formData.append("productBrand", brandName);
    formData.append("productDescription", productDescription);

    try {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const response = await AxiosInstance.patch(
        `/admin/products/${objectId}`,
        formData,
        config
      );
      if (response.status === 200) {
        setData({
          brandName: "",
          productStock: 0,
          productPrice: "",
          categoryName: "",
          productDescription: "",
          productTitle: "",
        });
        alert("상품 수정에 성공하였습니다.");
        window.location.reload();
      }
    } catch (err) {
      if (err) {
        console.log(err);
        alert("상품등록에 실패했습니다.");
      }
    }
  };
  return (
    <SLayout>
      <SItemDiv>
        <STitleDiv>
          <h2>상품 수정</h2>
        </STitleDiv>
        <SProductItemDiv>
          {productData?.map((item) => {
            return (
              <div>
                <SProductTitleDiv>
                  상품브랜드:{item.productBrand.brandName}
                  <SInput
                    onChange={handleChange}
                    name="brandName"
                    placeholder="변경할브랜드명을 기재해주세요"
                  />
                </SProductTitleDiv>
                <SProductTitleDiv>
                  상품이름:{item.productTitle}
                  <SInput
                    onChange={handleChange}
                    name="productTitle"
                    placeholder="변경할 상품명을 기재해주세요"
                  />
                </SProductTitleDiv>
                <SProductTitleDiv>
                  <div>상품이미지</div>

                  <SImg src={item.productImage[0]} width="50px" height="50px" />
                  <div>변경 상품 이미지</div>
                  <SInput
                    type="file"
                    accept="image/"
                    id="profileImg"
                    onChange={saveImgFile}
                    ref={imgRef}
                  />
                  {previewImages.map((previesImg, index) => {
                    return (
                      <SImg
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        style={{ width: "100px", height: "100" }}
                        src={previesImg}
                        alt="미리보기이미지"
                      />
                    );
                  })}
                </SProductTitleDiv>
                <SProductTitleDiv>
                  상품재고:{item.productStock}
                  <SInput
                    onChange={handleChange}
                    name="productStock"
                    placeholder="변경할 수량을 기재해주세요"
                  />
                </SProductTitleDiv>
                <SProductTitleDiv>
                  상품금액:{item.productPrice}
                  <SInput
                    onChange={handleChange}
                    name="productPrice"
                    placeholder="변경할 금액을 기재해주세요"
                  />
                </SProductTitleDiv>
                <SProductTitleDiv>
                  상품카테고리:{item.productCategory.categoryName}
                  <SInput
                    onChange={handleChange}
                    name="categoryName"
                    placeholder="변경할 카테고리이름을 기재해주세요"
                  />
                </SProductTitleDiv>
                <SProductTitleDiv>
                  상품설명:{item.productDescription}
                  <STextArea
                    onChange={handleChange}
                    name="productDescription"
                    placeholder="변경할 상세설명을 기재해주세요"
                  />
                </SProductTitleDiv>
              </div>
            );
          })}
          <SbuttonDiv>
            <SButton
              onClick={() => {
                handleEdit();
              }}
            >
              수정
            </SButton>
          </SbuttonDiv>
        </SProductItemDiv>
      </SItemDiv>
    </SLayout>
  );
}

export default EditProduct;
