import { fetchProducts } from "../data/product.js";
let items = [];
class Item {
  constructor(product) {
    this.product = product;
  }

  htmlToken() {
    const s = `<div class="item" id="${this.product.id}">
            <div class="item-img">
              <img src="${this.product.image}" alt="" />
            </div>
            <div class="item-data">
              <div class="item-details">
                <div class="item-details__title">
                  <h2>${this.product.title}</h2>
                  <p>${this.product.category}</p>
                </div>

                <div class="item-details__price">
                  <p class="rating">${this.product.rating.rate}/5</p>
                  <p onclick="toggleDesc(event)" id="${this.product.id}" class="det">details</p>
                </div>
              </div>
              <div class="item-price">
                <div><h2>${this.product.price}$</h2></div>
                <div><button type="button" onClick="addToCart(event)" id="${this.product.id}">Add to Cart</button></div>
              </div>
            </div>
            <div class="item-details__description" id="${this.product.id}Desc">
              <p>
                ${this.product.description}
              </p>
            </div>
          </div>
        </div>`;
    return s;
  }
}
const itemsToken = `<div class="items-list" id="itemsList">
<div class="filter-box" id="filterBox"></div>
<div class="items-box" id="itms">
</div>`;

const initialItems = async () => {
  let products = await fetchProducts();

  products.forEach((product) => {
    items.push(new Item(product));
  });
  return items;
};
const mapItems = (products) => {
  items = [];
  products.forEach((product) => {
    items.push(new Item(product));
  });
  return items;
};

const initialRender = async () => {
  document.getElementById("root").innerHTML += itemsToken;
  document.getElementById("itms").innerHTML = "";
  const items = await initialItems();

  for (var i = 0; i < items.length; i += 1) {
    document.getElementById("itms").innerHTML += items[i].htmlToken();
  }
};

const renderItems = (renderedProducts) => {
  const renderedItems = mapItems(renderedProducts);

  document.getElementById("itms").innerHTML = "";
  for (var i = 0; i < renderedItems.length; i += 1) {
    document.getElementById("itms").innerHTML += renderedItems[i].htmlToken();
  }
};

window.initialItems = initialItems;
window.renderItems = renderItems;
window.initialRender = initialRender;

export { initialItems, renderItems, initialRender };
