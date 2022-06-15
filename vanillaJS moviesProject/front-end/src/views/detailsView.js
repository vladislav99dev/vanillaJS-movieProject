import { html } from "../../node_modules/lit-html/lit-html.js"
import { getMovies } from "../services/moviesApi.js";
const renderPage = (movie) => html`
<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>${movie.title}</h1>
            <div class="col-md-8">
                <img class="img-thumbnail" src="${movie.img}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${movie.description}</p>
                <a class="btn btn-danger" href="#">Delete</a>
                <a class="btn btn-warning" href="/edit/432423">Edit</a>
                <a class="btn btn-primary" href="#">Like</a>
                <span class="enrolled-span">Liked 1</span>
            </div>
        </div>
    </div>
</section>
`;
let url = `/data/movies/`

export const detailsView = async (ctx) => {
    let response = await getMovies(url, ctx.params.movieId)
    if (response.message) {
        alert(`You should be logged in to see this page`)
    } else {
        ctx.movie = response
        ctx.renderMiddleware(renderPage(ctx.movie))
    }
}
