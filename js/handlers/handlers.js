import { fetchProducts, products } from "../data/product.js";
import { renderItems } from "../components/Item.js";
import { updateStorage } from "../data/Storage.js";
import {
  elements,
  renderCartElements,
  removeElement,
  CartElement,
  updateTotal,
} from "../components/Cart.js";
import { getUserID, isLogged, logout } from "../data/UserState.js";
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
const showCart = (closeDrawer = false) => {
  if (closeDrawer) document.getElementById("drawerCont").style.display = "none";
  document.getElementById("cart").style = "display: flex;";

  //check local storage
};
const addToCart = (event) => {
  console.log(elements);
  let ele = products.filter((prod) => {
    return prod.id == event.target.id;
  })[0];

  if (
    elements.filter((element) => {
      return element.id == ele.id;
    }).length === 0
  ) {
    elements.push(new CartElement(ele.title, ele.price, ele.id, ele.image, 1));
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
  updateStorage();
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
  updateStorage();
};

const removeE = (event) => {
  removeElement(event.target.id);
};

const checkoutHandler = () => {
  if (getUserID() === 0) {
    render(3);
  } else {
    if (elements.length !== 0) {
      render(2);
    }
  }
};
const gotoMain = () => {
  render(1);
};

const manageLogin = () => {
  if (!isLogged()) {
    gotoLogin();
  } else {
    userLogout();
  }
};
const gotoLogin = () => {
  render(3);
};
const userLogout = () => {
  logout();
  render(1);
};

const toggleDrawer = (action) => {
  if (action) {
    document.getElementById("drawerCont").style.display = "flex";
  } else {
    document.getElementById("drawerCont").style.display = "none";
  }
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
window.checkoutHandler = checkoutHandler;
window.gotoMain = gotoMain;
window.gotoLogin = gotoLogin;
window.manageLogin = manageLogin;
window.toggleDrawer = toggleDrawer;
