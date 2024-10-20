class Card {
  constructor(name, id, logo = "") {
    this.category = name;
    this.id = id;
    this.logo = logo;
  }
  htmlToken() {
    const token = `<div class="card" id="card${this.id}">
            <a href="#itms")"><p id="${this.category}" onClick="showItems(event)">${this.category}</p></a>
            ${this.logo}
          </div>`;
    return token;
  }
}
const headerToken = `<header class="header">
        <div class="header-cards" id="headerCards">
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

const renderHeader = async () => {
  document.getElementById("root").innerHTML += headerToken;
  //fetching the categories to render only 4 of them
  let categories = await fetchCategories();
  let logos = [
    '<i class="fa-solid fa-laptop"></i>',
    '<i class="fa-solid fa-gem"></i>',
    '<i class="fa-solid fa-user-tie"></i>',
    '<i class="fa-solid fa-shirt"></i>',
  ];

  for (var i = 0; i < 4; i += 1) {
    document.getElementById("headerCards").innerHTML += new Card(
      categories[i],
      i + 1,
      logos[i]
    ).htmlToken();
  }
};

window.renderHeader = renderHeader;
export default renderHeader;
