/* eslint-disable no-underscore-dangle */
const handleBasket = (item) => {
  const baskets = localStorage.getItem("baskets");
  const basketsData = baskets ? JSON.parse(baskets) : [];

  const isExist =
    basketsData.filter((cartItem) => item._id === cartItem._id).length > 0;

  // 이미 로컬스토리지 장바구니에 담겨있는 상품인 경우 quantity만 올려준다.
  if (isExist) {
    const newCartItems = basketsData.map((cartItem) =>
      cartItem._id === item._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    localStorage.setItem("baskets", JSON.stringify(newCartItems));
  } else {
    // 로컬스토리지에 없는 새 상품인 경우 데이터를 추가해준다.
    const cartQuantity = { quantity: 1 };
    basketsData.push(Object.assign(item, cartQuantity));
    localStorage.setItem("baskets", JSON.stringify(basketsData));
  }

  const addedBaskets = JSON.parse(localStorage.getItem("baskets"));
  console.log(addedBaskets, item._id);
  // const checkSameItem = addedBaskets.filter(
  //   (element) => element._id === item._id
  // );
  // if(addedBaskets){

  // }
  // console.log(checkSameItem);
};

export default handleBasket;
