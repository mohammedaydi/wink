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
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>`;

const renderFilter = () => {
  document.getElementById("filterBox").innerHTML += filterToken;
};

window.renderFilter = renderFilter;
