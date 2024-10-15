const toggleDesc = (event) => {
  console.log(event.target.id);
  const str = event.target.id + "Desc";

  document.getElementById(str).style = "display: block;";
};

window.toggleDesc = toggleDesc;
