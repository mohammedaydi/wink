const checkoutToken = `<div class="checkout-container">
        <div id="checkoutSuccessful"><h2>Your order has been placed successfully</h2></div>
        <div class="checkout" id="checkoutChecker">
          <div class="checkout-img">
            <img src="./assets/cart.png" alt="" />
          </div>

          <form
            class="checkout-form"
            onsubmit="onCheckout(event)"
            id="checkoutForm"
          >
            <div class="form-item">
              <input
                placeholder="enter your name"
                type="text"
                name="name"
                id="name"
                onchange="colorizeBlack(event)"
              />
              <input
                placeholder="address.. state,city"
                type="text"
                name="address"
                id="address"
                onchange="colorizeBlack(event)"
              />
            </div>
            <div class="form-item">
              <input
                onchange="colorizeBlack(event)"
                type="email"
                name="email"
                id="email"
                placeholder="email"
              />
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="phone number"
                onchange="colorizeBlack(event)"
              />
            </div>
            <div class="form-item">
              <input
                type="text"
                name="card"
                id="card"
                placeholder="card number xxx-xxx-xxx"
                onchange="colorizeBlack(event)"
              />
              <input
                type="text"
                name="pw"
                id="pw"
                placeholder="password"
                onchange="colorizeBlack(event)"
              />

              <div class="form-item__button">
                <p id="errorMsg"></p>
                <button type="submit">Done</button>
              </div>
            </div>
          </form>
        </div>
      </div>`;

const renderCheckout = () => {
  document.getElementById("root").innerHTML += checkoutToken;
};

window.renderCheckout = renderCheckout;

export default renderCheckout;
