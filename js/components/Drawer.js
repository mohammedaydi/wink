const drawerToken = `<div class="drawer-container" id="drawerCont">
        <div class="drawer">
          <a href="#headerCont" onclick="toggleDrawer(false)"><p>Home</p></a>
          <a href="#itemsList" onclick="toggleDrawer(false)"><p>Products</p></a>
          <p id="navLogin" onclick="manageLogin()">Login</p>
          <p onclick="showCart(true)">Cart</p>
          <p onclick="toggleDrawer(false)">Close</p>
        </div>
      </div>`;

const renderDrawer = () => {
  document.getElementById("overlays").innerHTML += drawerToken;
};

export default renderDrawer;
