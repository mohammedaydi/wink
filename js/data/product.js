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
const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (response.ok === true) {
      const response_data = await response.json();
      return response_data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

window.fetchProducts = fetchProducts;
window.fetchCategories = fetchCategories;
// export default products;

export { fetchProducts, fetchCategories, products };
