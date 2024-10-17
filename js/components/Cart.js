let elements = [];
class CartElement {
  constructor(title, price, id, image) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.quantity = 1;
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
          <div><button>Checkout</button></div>
        </div>
      </div>`;

const renderCart = () => {
  document.getElementById("overlays").innerHTML = cartsContainerToken;
};

const renderCartElements = () => {
  document.getElementById("cartBox").innerHTML = "";
  for (var i = 0; i < elements.length; i += 1) {
    document.getElementById("cartBox").innerHTML += new CartElement(
      elements[i].title,
      elements[i].price,
      elements[i].id,
      elements[i].image
    ).cartElementToken();
  }
};

const removeElement = (id) => {
  let f = elements.filter((ele) => {
    return ele.id !== parseInt(id);
  });
  elements = f;
  renderCartElements();
};
const updateTotal = () => {
  let total = 0;
  elements.forEach((element) => {
    total += element.price * element.quantity;
  });
  document.getElementById("cartTotal").innerText = `total: ${total}$`;
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
};
