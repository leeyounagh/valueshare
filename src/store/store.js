import { configureStore } from "@reduxjs/toolkit";
import { productImage } from "../slice/ImageSlice";

export default configureStore({
  reducer: { Image: productImage },
});
