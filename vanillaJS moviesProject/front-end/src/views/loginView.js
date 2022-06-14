import { html } from "../../node_modules/lit-html/lit-html.js";
import page from "../../node_modules/page/page.mjs"

import { sendUserData } from "../services/userApi.js";
import { saveUserData } from "../services/auth.js";

const renderPage = (ctx) => html`
  <section id="form-login">
    <form class="text-center border border-light p-5">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          class="form-control"
          placeholder="Email"
          name="email"
          value=""
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="Password"
          name="password"
          value=""
        />
      </div>
      <!-- for some reason @submit on the form itself didnt work -->
      <button
        type="submit"
        class="btn btn-primary"
        @click="${ctx.loginHandler}"
      >
        Login
      </button>
    </form>
  </section>
`;

export const loginView = (ctx) => {
  ctx.loginHandler = loginHandler;
  ctx.renderMiddleware(renderPage(ctx));
};

const loginHandler = (ctx) => {
  ctx.preventDefault();
  let { email, password } = getFormData(ctx);
  sendUserData(email, password).then((user) => {
    if (user.message) {
      alert(user.message);
    } else {
      let { email, username, _id, accessToken } = user;
      saveUserData(email, username, _id, accessToken);
      page.redirect('/')
    }
  });
};

const getFormData = (ctx) => {
  let form = ctx.currentTarget.parentElement;
  let formData = new FormData(form);
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};
