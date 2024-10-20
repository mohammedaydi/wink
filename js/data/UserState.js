import { storeUser } from "./Storage.js";

let isLoggedIn = false;
let userID = 0;
const fetchUser = async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/users/${userID}`);
    if (response.ok === true) {
      const user_data = await response.json();
      return user_data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
const login = (uid) => {
  isLoggedIn = true;
  userID = uid;
};
const logout = () => {
  isLoggedIn = false;
  userID = 0;
  storeUser(userID);
};
const isLogged = () => {
  return isLoggedIn;
};
const getUserID = () => {
  return userID;
};
export { login, logout, fetchUser, isLogged, getUserID };
