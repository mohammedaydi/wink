const headerToken = `<header class="header">
        <div class="header-cards">
          <a href=""><div class="card" id="card1">
            <p>Electronics</p>
            <i class="fa-solid fa-laptop"></i>
          </div></a>
          <a href=""><div class="card" id="card2">
            <p>Jewelery</p>
            <i class="fa-solid fa-gem"></i>
          </div></a>
          <a href=""><div class="card" id="card3">
            <p>Men's clothing</p>
            <i class="fa-solid fa-user-tie"></i>
          </div></a>
          <a href=""><div class="card" id="card4">
            <p>Women's clothing</p>
            <i class="fa-solid fa-shirt"></i>
          </div></a>
        </div>
        <div class="header-desc">
          <h1>wink</h1>
          <h2>The Leading E-commerce app</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            laboriosam corrupti delectus iure. Facilis quibusdam dolores omnis
            quam sequi expedita possimus accusantium, nihil, voluptas dolorem
            pariatur modi architecto repudiandae enim?
          </p>
        </div>
      </header>`;

const renderHeader = () => {
  document.getElementById("root").innerHTML += headerToken;
};

window.renderHeader = renderHeader;
