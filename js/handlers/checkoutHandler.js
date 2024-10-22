import render from "../manager/StateManager.js";
import { deleteElements } from "../components/Cart.js";
import { getUserID } from "../data/UserState.js";
import { removeAllFromStorage } from "../data/Storage.js";
const colorizeBlack = (event) => {
  document.getElementById(event.target.id).style.borderColor = "black";
  document.getElementById(event.target.id).style.color = "black";
  document.getElementById(event.target.id).style.borderWidth =
    "0px 0px 1px 0px";
};
const colorizeRed = (id) => {
  document.getElementById(id).style.borderColor = "red";
  document.getElementById(id).style.color = "red";
  document.getElementById(id).style.borderWidth = "0px 0px 2px 0px";
};
const validateData = (formData) => {
  let formValid = true;
  let errorMessage = "";
  const name = formData.get("name").trim();
  const address = formData.get("address").trim();
  const email = formData.get("email").trim();
  const phone = formData.get("phone").trim();
  const card = formData.get("card").trim();
  const pw = formData.get("pw").trim();

  if (name && address && email && phone && card && pw) {
    formValid = formValid && name.length > 1;
    errorMessage += name.length > 1 ? "" : "invalid name\n";
    !(name.length > 1) && colorizeRed("name");

    formValid = formValid && address.length > 2 && address.includes(",");
    errorMessage +=
      address.length > 2 && address.includes(",")
        ? ""
        : "invalid address(add a comma)\n";
    !(address.length > 2 && address.includes(",")) && colorizeRed("address");
    formValid =
      formValid &&
      email.length > 4 &&
      email.includes(".") &&
      email.split(".")[1].length > 0;
    errorMessage +=
      email.length > 4 && email.includes(".") && email.split(".")[1].length > 0
        ? ""
        : "invalid email\n";
    !(
      email.length > 4 &&
      email.includes(".") &&
      email.split(".")[1].length > 0
    ) && colorizeRed("email");
    formValid = formValid && phone.length === 10 && !isNaN(phone);
    errorMessage +=
      phone.length === 10 && !isNaN(phone) ? "" : "invalid phone\n";
    !(phone.length === 10 && !isNaN(phone)) && colorizeRed("phone");

    formValid = formValid && card.length === 12 && !isNaN(card);

    errorMessage +=
      card.length === 12 && !isNaN(card) ? "" : "invalid card number\n";
    !(card.length === 12 && !isNaN(card)) && colorizeRed("card");

    formValid = formValid && pw.length > 7;
    errorMessage +=
      pw.length > 7 ? "" : "invalid password, must be at least 8 characters\n";
    !(pw.length > 7) && colorizeRed("pw");
  } else {
    formValid = false;
    errorMessage = "please fill all fields";
  }

  if (!formValid) {
    document.getElementById("errorMsg").innerText = errorMessage;
  } else {
    //form is valid
    document.getElementById("errorMsg").innerText = "";
    //render the next page
    document.getElementById("checkoutSuccessful").style.display = "flex";
    document.getElementById("checkoutChecker").style.display = "none";
    setTimeout(() => {
      document.getElementById("checkoutSuccessful").style.display = "none";
      document.getElementById("checkoutChecker").style.display = "flex";
      // localStorage.clear(); replace with delete for the user
      const userid = getUserID();
      deleteElements();
      removeAllFromStorage(userid);

      render(1);
    }, 3000);
  }
};

const onCheckout = (event) => {
  event.preventDefault();
  const form = document.getElementById("checkoutForm");
  const formData = new FormData(form);

  validateData(formData);
};

window.onCheckout = onCheckout;
window.colorizeBlack = colorizeBlack;
