import { fetchCategories } from "../data/product.js";
const filterToken = `
        <div class="search-bar">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="enter the name of an item"
          />
          <button onclick="searchTitle()"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div>
          <select name="catFilter" onChange="searchCategory(event)" id="catFilter">
            <option value="" selected disabled>Pick a category</option>
            <option value="all">All</option>
          </select>
        </div>`;

const renderFilter = async () => {
  document.getElementById("filterBox").innerHTML += filterToken;
  const categories = await fetchCategories();
  for (let i = 0; i < categories.length; i += 1) {
    const optionToken = ` <option value="${categories[i]}">${categories[i]}</option>`;
    document.getElementById("catFilter").innerHTML += optionToken;
  }
};

window.renderFilter = renderFilter;
