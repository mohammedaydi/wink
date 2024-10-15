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

const searchTitle = async () => {
  const searchTerm = document.getElementById("title").value;
  const products = await fetchProducts();
  const rndr = products.filter((product) => {
    return product.title === searchTerm;
  });
  renderItems(rndr);
};

const searchCategory = async (event) => {
  const products = await fetchProducts();
  if (event.target.value === "all") {
    renderItems(products);
  }
  const rndr = products.filter((product) => {
    return product.category === event.target.value;
  });

  renderItems(rndr);
};

window.toggleDesc = toggleDesc;
window.showItems = showItems;
window.searchTitle = searchTitle;
window.searchCategory = searchCategory;
