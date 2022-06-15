import { html } from "../../node_modules/lit-html/lit-html.js";
import { formSubmitHandler} from "../services/formUserData.js"

const renderPage = (ctx) => html`
  <section id="form-login">
    <form class="text-center border border-light p-5">
      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="" />
      </div>
      <!-- for some reason @submit on the form itself didnt work -->
      <button type="submit" class="btn btn-primary" @click="${ctx.loginHandler}">
        Login
      </button>
    </form>
  </section>
`;

export const loginView = (ctx) => {
  ctx.loginHandler = formSubmitHandler.bind(null, ctx);
  ctx.renderMiddleware(renderPage(ctx));
};


