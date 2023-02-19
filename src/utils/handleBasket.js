const handleBasket = (item) => {
  /* eslint no-underscore-dangle: 0 */
  const baskets = localStorage.getItem("baskets");
  const basketsData = baskets ? JSON.parse(baskets) : [];
  const cartQuantity = { quantity: 1 };
  basketsData.push(Object.assign(item, cartQuantity));
  localStorage.setItem("baskets", JSON.stringify(basketsData));
};

export default handleBasket;
