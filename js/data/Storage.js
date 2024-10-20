import { elements } from "../components/Cart.js";
const updateStorage = () => {
  const id = localStorage.getItem("currentUser");
  // localStorage.clear();
  //preserve the id value
  if (id) localStorage.setItem("currentUser", id);

  for (let i = 0; i < elements.length; i += 1) {
    if (id !== "0") {
      localStorage.setItem(id + "," + elements[i].id, elements[i].quantity);
    }
  }
};

const removeFromStorage = (itemID) => {
  const userID = localStorage.getItem("currentUser");
  localStorage.removeItem(userID + "," + itemID);
};
const removeAllFromStorage = (userID) => {
  for (let i = 0; i < localStorage.length; i += 1) {
    const currentUserID = localStorage.key(i).split(",")[0];
    if (userID === parseInt(currentUserID)) {
      localStorage.removeItem(localStorage.key(i));
    }
  }
};

const getStorage = () => {
  let storageData = [];
  for (let i = 0; i < localStorage.length; i += 1) {
    const id = localStorage.getItem("currentUser");
    const currentUserID = localStorage.key(i).split(",")[0];
    if (id === currentUserID) {
      let t = {
        key: 0,
        value: "",
      };
      t.key = localStorage.key(i);
      t.value = localStorage.getItem(t.key);
      if (t.key !== "currentUser") {
        t.key = t.key.split(",")[1];
        storageData.push(t);
      }
    }
  }

  return storageData;
};

const storeUser = (userID) => {
  localStorage.setItem("currentUser", userID);
};
const getUser = () => {
  return localStorage.getItem("currentUser");
};
export {
  updateStorage,
  getStorage,
  storeUser,
  getUser,
  removeFromStorage,
  removeAllFromStorage,
};
