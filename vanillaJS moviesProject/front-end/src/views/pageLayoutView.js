import { html } from "../../node_modules/lit-html/lit-html.js";

export  const userButtons = (ctx) =>  html`
  <li class="nav-item">
    <a class="nav-link">Welcome, ${ctx.isUserLoggedIn()}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/logout">Logout</a>
  </li>
`;
export  const guestButtons = () => html`
  <li class="nav-item">
    <a class="nav-link" href="/login">Login</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/register">Register</a>
  </li>
`;

export const navBar = (ctx) =>  html`
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
    <a class="navbar-brand text-light" href="/">Movies</a>
    <ul class="navbar-nav ml-auto ">
      ${ctx.isUserLoggedIn() 
      ?userButtons(ctx)
      :guestButtons()}
    </ul>
  </nav>
`;

export const footer = () => html`
  <div class="footer-copyright text-center py-3">
    © 2020
    <a href="#" class="text-dark">JS Applications</a>
  </div>
`;