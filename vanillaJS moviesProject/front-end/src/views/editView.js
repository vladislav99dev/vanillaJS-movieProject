import { html } from "../../node_modules/lit-html/lit-html.js"
import { getMovies, updateMovie } from "../services/moviesApi.js";

const renderPage = (ctx) => html`
<section id="edit-movie">
    <form class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Movie Title"
                value="${ctx.currMovieData.title}" name="title">
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..."
                name="description">${ctx.currMovieData.description}</textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url"
                value="${ctx.currMovieData.img}" name="imageUrl">
        </div>
        <button type="submit" class="btn btn-primary" @click="${ctx.editMovieHandler}">Submit</button>
    </form>
</section>
`;
let url = '/data/movies/'


export const editView = async (ctx) => {
    let currMovieData = await getMovies(url, ctx.params.movieId)

    ctx.currMovieData = currMovieData;
    ctx.editMovieHandler = editMovieHandler.bind(null, currMovieData,ctx)
    ctx.renderMiddleware(renderPage(ctx))
};



const editMovieHandler = async (currMovieData,ctx, event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget.parentElement);

    let { title, description, imageUrl } = Object.fromEntries(formData)
    let response = await updateMovie({ title, description, imageUrl }, url, currMovieData);

    ctx.page.redirect('/')
}
