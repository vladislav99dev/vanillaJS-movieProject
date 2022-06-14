import { html, render } from "../../node_modules/lit-html/lit-html.js";
let root = document.querySelector("#root");

const userButtons = () =>  html`
  <li class="nav-item">
    <a class="nav-link">Welcome, email</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/logout">Logout</a>
  </li>
`;
const guestButtons = () => html`
  <li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/register">Register</a>
  </li>
`;

const navBar = (ctx) =>  html`
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <a class="navbar-brand text-light" href="/">Movies</a>
    <ul class="navbar-nav ml-auto ">
      ${ctx.isUserLoggedIn 
      ?userButtons()
      :guestButtons()}
    </ul>
  </nav>
`;
let footer = html`
  <div class="footer-copyright text-center py-3">
    © 2020
    <a href="#" class="text-dark">JS Applications</a>
  </div>
`;

const renderPage = (ctx,template) => html`
  <main>${navBar(ctx)}</main>
  <body>
    ${template}
  </body>
  <footer>${footer}</footer>
`;

export const renderMiddleware = (ctx, next) => {
  ctx.renderMiddleware = (template) => {
    return render(renderPage(ctx,template), root);
  };
  next();
};
