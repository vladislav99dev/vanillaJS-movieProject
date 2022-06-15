import { html } from "../../node_modules/lit-html/lit-html.js"
import { getMovies,deleteMovie } from "../services/moviesApi.js";
import { getUserId } from "../services/auth.js";

const renderPage = (movie , _ownerId, currUserId,ctx) => html`
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
                ${_ownerId === currUserId 
                ?html`
                <a class="btn btn-danger" @click="${ctx.deleteMovieHandler}">Delete</a>
                <a class="btn btn-warning" href="/edit/${movie._id}">Edit</a>
                `
                :html`
                <a class="btn btn-primary" href="#">Like</a>
                <span class="enrolled-span">Liked 1</span>
                `
            }   
            </div>
        </div>
    </div>
</section>
`;
let url = `/data/movies/`;

export const detailsView = async (ctx) => {
    let movie = await getMovies(url, ctx.params.movieId)
    if (movie.message) {
        alert(`You should be logged in to see this page`)
    } else {
        ctx.movie = movie
        let currUserId = getUserId();
        ctx.deleteMovieHandler = deleteMovieHandler.bind(null,movie._id,ctx)
        ctx.renderMiddleware(renderPage(ctx.movie, movie._ownerId, currUserId,ctx))
    }
};



const deleteMovieHandler = async(movieId,ctx,event) => {
    event.preventDefault();
     deleteMovie(movieId,url)
     ctx.page.redirect('/')
}
