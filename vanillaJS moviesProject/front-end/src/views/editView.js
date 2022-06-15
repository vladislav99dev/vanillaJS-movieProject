import { html } from "../../node_modules/lit-html/lit-html.js"
import { getMovies, updateMovie } from "../services/moviesApi.js";
import { getUserId } from "../services/auth.js";
import page from "../../node_modules/page/page.mjs"
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
        <button type="submit" class="btn btn-primary" @click="${ctx.addMovieHandler}">Submit</button>
    </form>
</section>
`;
let url = '/data/movies/'
export const editView = async (ctx) => {
    let currMovieData = await getMovies(url, ctx.params.movieId)
    ctx.currMovieData = currMovieData;
    ctx.addMovieHandler = addMovieHandler.bind(null, currMovieData)

    ctx.renderMiddleware(renderPage(ctx))
};

const addMovieHandler = async(currMovieData, event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget.parentElement);
    let {title,description,imageUrl} = Object.fromEntries(formData)
    let currUserId = getUserId()
    console.log(currUserId);
    console.log(currMovieData._ownerId);
    // TODO: if current id isnt the same as movie id user should not see the delete and edit button
    if(currUserId === currMovieData._ownerId) {
       let response = await updateMovie({title,description,imageUrl},url,currMovieData);
       page.redirect('/')
    } else {
        alert('You are not the owner of this movie!')
    }

    // ctx,currMovieData
}
