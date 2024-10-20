const loginToken = `<div class="login-container">
        <form class="login" id="loginForm" onsubmit="loginHandle(event)">
          <div><h1>Login</h1></div>
          <div class="login-field">
            <label for="pw">username</label>
            <input type="text" name="user" id="user" onchange="loginColorizeBlack(event)" />
          </div>
          <div class="login-field">
            <label for="pw">password</label
            ><input type="password" name="pw" id="pw" onchange="loginColorizeBlack(event)"/>
          </div>
          <div class="login-field">
            <p id="loginErrorMsg" ></p>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>`;

const renderLogin = () => {
  document.getElementById("root").innerHTML += loginToken;
};

window.renderLogin = renderLogin;
export default renderLogin;
