const handleBasket = (item) => {
  const baskets = localStorage.getItem("baskets");
  const basketsData = baskets ? JSON.parse(baskets) : [];
  basketsData.push(item);
  localStorage.setItem("baskets", JSON.stringify(basketsData));
};

export default handleBasket;
