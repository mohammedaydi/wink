const navbarToken = `<div class="navbar">
        <div class="navbar-header" id="navHeader"><h1 onclick="gotoMain()">wink</h1></div>
        <div class="navbar-links" id="nbLinks">
          <a href="#headerCont"><p>Home</p></a>
          <a href="#itemsList"><p>Products</p></a>
          <p id="navLogin" onclick="manageLogin()">Login</p>
          <div class="navbar-links__cart">
          <div id="cardCount" >0</div>
          <i class="fa-solid fa-cart-shopping" onClick="showCart()"></i>
          </div>
        </div>
        <div class="navbar-drawer" id="navbarDrawer"><i class="fa-solid fa-bars" onclick="toggleDrawer(true)"></i></div>
      </div>`;

const renderLoginButton = (loginState) => {
  if (loginState === true) {
    document.getElementById("navLogin").innerText = "Logout";
  } else {
    document.getElementById("navLogin").innerText = "Login";
  }
};

const renderNavbar = (pageState, loginState) => {
  let root_html = document.getElementById("root").innerHTML;
  const afterNav = navbarToken + root_html;
  document.getElementById("root").innerHTML = afterNav;

  if (pageState == 1) {
    document.getElementById("nbLinks").style.display = "flex";
    renderLoginButton(loginState);
  } else if (pageState == 2) {
    document.getElementById("nbLinks").style.display = "none";
    document.getElementById("navbarDrawer").style.display = "none";
    document.getElementById("navHeader").style.flex = "0";
  }
};

window.renderNavbar = renderNavbar;

export default renderNavbar;
