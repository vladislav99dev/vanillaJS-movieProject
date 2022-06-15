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

