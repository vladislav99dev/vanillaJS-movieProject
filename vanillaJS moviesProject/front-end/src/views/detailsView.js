import {html} from "../../node_modules/lit-html/lit-html.js"
const renderPage = () => html`
 <section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: Black Widow</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="https://miro.medium.com/max/735/1*akkAa2CcbKqHsvqVusF3-w.jpeg"
                     alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy
                    with ties to her past arises. Comes on the screens 2020.</p>
                <a class="btn btn-danger" href="#">Delete</a>
                <a class="btn btn-warning" href="/edit/432423">Edit</a>
                <a class="btn btn-primary" href="#">Like</a>
                <span class="enrolled-span">Liked 1</span>
            </div>
        </div>
    </div>
    </section>
`;

export const detailsView = (ctx) => {
    ctx.renderMiddleware(renderPage())
}