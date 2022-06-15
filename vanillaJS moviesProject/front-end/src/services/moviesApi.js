let baseUrl = "http://localhost:3030";

export const getMovies = async(url) => {
    let response = await fetch(`${baseUrl}${url}`)
    let jsonResponse = await response.json();
    return jsonResponse;
}

