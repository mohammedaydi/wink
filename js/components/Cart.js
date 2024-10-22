let elements = [];
let totalPrice = 0;
import {
  getStorage,
  getUser,
  removeFromStorage,
  updateStorage,
} from "../data/Storage.js";
import { fetchProducts } from "../data/product.js";
class CartElement {
  constructor(title, price, id, image, quantity) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.quantity = quantity;
    this.total = this.quantity * this.price;
    this.image = image;
  }
  cartElementToken() {
    const cartToken = `<div class="cart-element">
              <div class="cart-element__img" id="img${this.id}">
                <img src="${this.image}" />
              </div>
              <div class="cart-element__details">
                <h3>${this.title}</h3>
                <div>
                    <h2>${this.price}$</h2>
                    <button id="${this.id}" onClick="removeE(event)">remove</button>
                </div>
                
              </div>
              <div class="cart-element__quantity">
                <div class="cart-element__quantity_high">
                  <h1 class="counter-manager" id="${this.id}" onClick="decQuantity(event)">-</h1>
                  <h2 id="q${this.id}">${this.quantity}</h2>
                  <h1 class="counter-manager" id="${this.id}" onClick="incQuantity(event)">+</h1>
                </div>
                <div class="cart-element__quantity_low">
                  <h2 id="t${this.id}">${this.total}$</h2>
                </div>
              </div>
            </div>`;
    return cartToken;
  }
}

const cartsContainerToken = `<div class="cart-container" id="cart">
        <div class="cart-toggle">
          <i class="fa-solid fa-x" onclick="closeCart()"></i>
        </div>
        <div class="cart">
          <div class="cart-header">
            <h1>Cart</h1>
          </div>
          <div class="cart-box" id="cartBox">
            
          </div>
        </div>
        <div class="cart-checkout">
          <div class="cart-checkout__total"><h2 id="cartTotal">total: 55$</h2></div>
          <div><button onClick="checkoutHandler()">Checkout</button></div>
        </div>
      </div>`;

const renderCart = async () => {
  document.getElementById("overlays").innerHTML += cartsContainerToken;
  //get all items
  const storageData = getStorage();
  const products = await fetchProducts();
  const uid = getUser();
  if (uid !== "0") {
    for (var j = 0; j < storageData.length; j += 1) {
      for (var i = 0; i < products.length; i += 1) {
        if (products[i].id === parseInt(storageData[j].key)) {
          if (
            elements.filter((element) => {
              return element.id === parseInt(storageData[j].key);
            }).length === 0
          ) {
            elements.push(
              new CartElement(
                products[i].title,
                products[i].price,
                products[i].id,
                products[i].image,
                parseInt(storageData[j].value)
              )
            );
          }
        }
      }
    }
  }
  document.getElementById("cardCount").innerText = elements.length;
  renderCartElements();
  updateTotal();
};

const renderCartElements = () => {
  document.getElementById("cartBox").innerHTML = "";
  for (var i = 0; i < elements.length; i += 1) {
    document.getElementById("cartBox").innerHTML += new CartElement(
      elements[i].title,
      elements[i].price,
      elements[i].id,
      elements[i].image,
      elements[i].quantity
    ).cartElementToken();
  }
  updateStorage();
  document.getElementById("cardCount").innerText = elements.length;
};

const removeElement = (id) => {
  let f = elements.filter((ele) => {
    return ele.id !== parseInt(id);
  });
  elements = f;
  removeFromStorage(id);
  renderCartElements();
  updateTotal();
};

const updateTotal = () => {
  let total = 0;
  elements.forEach((element) => {
    total += element.price * element.quantity;
  });
  totalPrice = total;
  document.getElementById("cartTotal").innerText = `total: ${totalPrice}$`;
};
const deleteElements = () => {
  while (elements.length != 0) {
    elements.shift();
  }
};
window.renderCart = renderCart;
window.renderCartElements = renderCartElements;
window.removeElement = removeElement;
window.updateTotal = updateTotal;

export {
  elements,
  renderCartElements,
  removeElement,
  CartElement,
  updateTotal,
  renderCart,
  deleteElements,
};
