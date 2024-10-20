import renderNavbar from "../components/Navbar.js";
import renderHeader from "../components/Header.js";
import { initialRender } from "../components/Item.js";
import renderFilter from "../components/Filter.js";
import { renderCart } from "../components/Cart.js";
import renderCheckout from "../components/Checkout.js";
import renderLogin from "../components/Login.js";
import { isLogged, logout, login } from "../data/UserState.js";
import { getUser } from "../data/Storage.js";
import { deleteElements } from "../components/Cart.js";

const renderMainpage = () => {
  renderNavbar(1, isLogged());
  renderHeader();
  initialRender();
  renderFilter();
  deleteElements();
  renderCart();
};

const renderCheckoutpage = () => {
  renderNavbar(2, false);
  renderCheckout();
};
const renderLoginPage = () => {
  renderNavbar(2);
  renderLogin();
};

const manageSession = () => {
  const userID = getUser();
  if (userID) {
    if (parseInt(userID) === 0) {
      logout();
    } else {
      login(parseInt(userID));
    }
  }
};
const render = (state) => {
  document.getElementById("root").innerHTML = "";
  document.getElementById("overlays").innerHTML = "";

  //get the login state
  manageSession();

  if (state === 1) {
    renderMainpage();
  } else if (state === 2) {
    renderCheckoutpage();
  } else if (state === 3) {
    renderLoginPage();
  }
};

window.render = render;
export default render;
