import { storeUser } from "../data/Storage.js";
import { login } from "../data/UserState.js";
import render from "../manager/StateManager.js";
let users = [];

const fetchToken = async () => {
  const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Tell the server you're sending JSON
    },
    body: JSON.stringify({
      username: "mor_2314",
      password: "83r5^_",
    }),
  });

  const user = await response.json();
  if (response.ok === true) {
    return user.token;
  } else {
    return null;
  }
};

const fetchUsers = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/users");
    users = await response.json();

    if (response.ok === true) {
    }
  } catch (error) {
    console.error("no users found");
  }
};

const forwardUser = async (user) => {
  const token = await fetchToken();
  storeUser(user.id);
  login(user.id);
  render(1);
};

const loginColorizeBlack = (event) => {
  document.getElementById(event.target.id).style =
    "color: black; outline: none;";
};
const loginColorizeRed = (id) => {
  document.getElementById(id).style =
    "color: red; outline: 2px rgba(255,0,0,0.7) solid;";
};

const loginHandle = async (event) => {
  event.preventDefault();
  await fetchUsers();
  const form = document.getElementById("loginForm");
  const formData = new FormData(form);

  const username = formData.get("user").trim();
  const password = formData.get("pw").trim();

  let formValid = true;

  const usernameValid = username.length > 3;
  const passwordValid = password.length > 3;
  formValid = formValid && usernameValid && passwordValid;

  let userNfound = true;
  let wrongPass = false;
  if (formValid) {
    users.forEach((user) => {
      if (user.username === username) {
        if (user.password === password) {
          forwardUser(user);
        } else {
          wrongPass = true;
        }
        userNfound = false;
      }
    });
    if (userNfound || wrongPass) {
      let errorMsg = "";
      errorMsg += userNfound ? "User not found" : "";
      errorMsg += wrongPass ? "Wrong password try again.." : "";
      //make fiedls red
      if (userNfound) {
        loginColorizeRed("user");
      }
      if (wrongPass) {
        loginColorizeRed("pw");
      }
      document.getElementById("loginErrorMsg").innerText = errorMsg;
    }
  } else {
    document.getElementById("loginErrorMsg").innerText = "Fill in all fields..";
  }
};

window.loginHandle = loginHandle;
window.loginColorizeBlack = loginColorizeBlack;
