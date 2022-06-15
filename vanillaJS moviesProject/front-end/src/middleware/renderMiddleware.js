
import { html, render } from "../../node_modules/lit-html/lit-html.js";
let root = document.querySelector("#root");
import { navBar, footer } from "../views/pageLayoutView.js"


const renderPage = (ctx, template) => html`
  <main>${navBar(ctx)}</main>
  
  <body>
    ${template}
  </body>
  <footer>${footer()}</footer>
`;


export const renderMiddleware = (ctx, next) => {
  ctx.renderMiddleware = (template) => {
    return render(renderPage(ctx, template), root);
  };
  next();
};
