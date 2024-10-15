let products = [];
const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    const response_data = await response.json();
    products = response_data;
    return products;
  } catch (error) {
    console.error(error);
    return null;
  }
};

window.fetchProducts = fetchProducts;
// export default products;

export { fetchProducts, products };
