import { getToken } from "./auth.js";

let baseUrl = "http://localhost:3030";


export const getMovies = async (url, movieId) => {
    let response = {};
    if (url && movieId) {
        response = await fetch(`${baseUrl}${url}${movieId}`, {
            headers: {
                'X-Authorization': getToken()
            }
        })
    } else {
        response = await fetch(`${baseUrl}${url}`);
    }
    let jsonResponse = await response.json();
    return jsonResponse;
};

export const updateMovie = async({title,description,imageUrl},url,currMovieData) => {
    let response = await fetch(`${baseUrl}${url}${currMovieData._id}`, {
        method: "PUT",
        headers: {
            'content-type':'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify({
            title,
            description,
            img: imageUrl
        })
    })
    let jsonResponse = await response.json();
    return jsonResponse;
}