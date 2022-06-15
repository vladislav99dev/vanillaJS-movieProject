import { html } from "../../node_modules/lit-html/lit-html.js"
import { createMovie } from "../services/moviesApi.js";

const renderPage = (ctx) => html`
    <section id="add-movie">
        <form class="text-center border border-light p-5" action="#" method="">
            <h1>Add Movie</h1>
            <div class="form-group">
                <label for="title">Movie Title</label>
                <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="">
            </div>
            <div class="form-group">
                <label for="description">Movie Description</label>
                <textarea class="form-control" placeholder="Description" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="imageUrl">Image url</label>
                <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="imageUrl" value="">
            </div>
            <button type="submit" class="btn btn-primary" @click ="${ctx.createMovieHandler}">Submit</button>
        </form>
    </section>
`;
let url = '/data/movies'
export const createView = (ctx) => {
    ctx.createMovieHandler = createMovieHandler.bind(null, ctx);
    ctx.renderMiddleware(renderPage(ctx))
}

const createMovieHandler = (ctx,event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget.parentElement);
    let {title,description,imageUrl} = Object.fromEntries(formData);
    createMovie(title,description,imageUrl,url)
    ctx.page.redirect('/')
}