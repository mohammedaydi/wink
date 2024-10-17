import { fetchProducts, products } from "./data/product.js";
import { renderItems } from "./components/Item.js";
import {
  elements,
  renderCartElements,
  removeElement,
  CartElement,
  updateTotal,
} from "./components/Cart.js";
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
  } else {
    const rndr = products.filter((product) => {
      return product.category === event.target.value;
    });

    renderItems(rndr);
  }
};
const closeCart = () => {
  document.getElementById("cart").style = "display: none;";
};
const showCart = () => {
  document.getElementById("cart").style = "display: flex;";
};
const addToCart = (event) => {
  let ele = products.filter((prod) => {
    return prod.id == event.target.id;
  })[0];
  if (!elements.includes(ele)) {
    elements.push(new CartElement(ele.title, ele.price, ele.id, ele.image));
  }

  renderCartElements();
  updateTotal();
};
const decQuantity = (event) => {
  const id = "q" + event.target.id;
  const id_t = "t" + event.target.id;
  let value = parseInt(document.getElementById(id).innerText) - 1;
  document.getElementById(id).innerText = value;

  for (var i = 0; i < elements.length; i += 1) {
    if (elements[i].id === parseInt(event.target.id)) {
      elements[i].quantity -= 1;
      elements[i].total = elements[i].price * elements[i].quantity;
      document.getElementById(id_t).innerText = elements[i].total + "$";
    }
  }
  updateTotal();
};
const incQuantity = (event) => {
  const id = "q" + event.target.id;
  const id_t = "t" + event.target.id;
  let value = parseInt(document.getElementById(id).innerText) + 1;
  document.getElementById(id).innerText = value;

  for (var i = 0; i < elements.length; i += 1) {
    if (elements[i].id === parseInt(event.target.id)) {
      elements[i].quantity += 1;
      elements[i].total = elements[i].price * elements[i].quantity;
      document.getElementById(id_t).innerText = elements[i].total + "$";
    }
  }
  updateTotal();
};

const removeE = (event) => {
  removeElement(event.target.id);
};

window.toggleDesc = toggleDesc;
window.showItems = showItems;
window.searchTitle = searchTitle;
window.searchCategory = searchCategory;
window.closeCart = closeCart;
window.showCart = showCart;
window.addToCart = addToCart;
window.decQuantity = decQuantity;
window.incQuantity = incQuantity;
window.removeE = removeE;
