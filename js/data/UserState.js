import { storeUser } from "./Storage.js";

let isLoggedIn = false;
let userID = 0;

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
export { login, logout, isLogged, getUserID };
