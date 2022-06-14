import page from "../node_modules/page/page.mjs";
import { homeView } from "./views/homeView.js";
import { renderMiddleware } from "./middleware/renderMiddleware.js";
import { loginView } from "./views/loginView.js";
import { registerView } from "./views/registerView.js";
import { createView } from "./views/createView.js";
import { detailsView } from "./views/detailsView.js";
import { editView } from "./views/editView.js"
import { authMiddleware } from "./middleware/authMiddleware.js";

page(authMiddleware);
page(renderMiddleware);
page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/create", createView);
page("/details/:movieId", detailsView);
page("/edit/:movieId", editView)
// page('/logout', logoutview)

page.start();
