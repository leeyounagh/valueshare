import { configureStore } from "@reduxjs/toolkit";
import { productImage } from "../slice/ImageSlice";
import { PageInfo } from "../slice/PageSlice";

export default configureStore({
  reducer: { image: productImage, pageTitle: PageInfo },
});
