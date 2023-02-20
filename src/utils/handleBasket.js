const handleBasket = (item) => {
  /* eslint no-underscore-dangle: 0 */

  const baskets = localStorage.getItem("baskets");

  const basketsData = baskets ? JSON.parse(baskets) : [];

  const cartQuantity = { quantity: 1 };
  basketsData.push(Object.assign(item, cartQuantity));
  localStorage.setItem("baskets", JSON.stringify(basketsData));
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
