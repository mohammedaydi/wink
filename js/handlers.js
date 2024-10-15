import { fetchProducts } from "./data/product.js";
import { renderItems } from "./components/Item.js";
const toggleDesc = (event) => {
  const str = event.target.id + "Desc";
  document.getElementById(str).style = "display: block;";
};

const showItems = async (event) => {
  const products = await fetchProducts();
  const rndr = products.filter((product) => {
    return product.category === event.target.id;
  });
  renderItems(rndr);
};

window.toggleDesc = toggleDesc;
window.showItems = showItems;
