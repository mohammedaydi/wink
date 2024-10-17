const navbarToken = `<div class="navbar">
        <div class="navbar-header"><h1>wink</h1></div>
        <div class="navbar-links">
          <a href=""><p>Home</p></a>
          <a href=""><p>Products</p></a>
          <a href=""><p>Login</p></a>
          <i class="fa-solid fa-cart-shopping" onClick="showCart()"></i>
        </div>
      </div>`;

const renderNavbar = () => {
  let root_html = document.getElementById("root").innerHTML;
  const afterNav = navbarToken + root_html;
  document.getElementById("root").innerHTML = afterNav;
};

window.renderNavbar = renderNavbar;

export default renderNavbar;
