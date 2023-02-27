import { atom } from "recoil";

const urlState = atom({
  key: "urlState",
  default: {
    Home: "Home",
    rootTitle: "Products",
    currentTitle: "Product",
  },
});

export default urlState;
