import {html} from "../../node_modules/lit-html/lit-html.js"


const renderPage = () => html`
    <section id="form-login">
    <form class="text-center border border-light p-5" action="" method="">
        <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" class="form-control" placeholder="Email" name="email" value="">
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input id="password" type="password" class="form-control" placeholder="Password" name="password" value="">
        </div>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    </section>
`;

export const loginView = (ctx) => {
    ctx.renderMiddleware(renderPage())
}
