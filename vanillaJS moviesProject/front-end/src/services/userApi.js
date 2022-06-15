let baseUrl = "http://localhost:3030";
import { getToken } from "./auth.js";

export const sendUserData = async ({email, password,url}) => {
    try{
        let response = await fetch(`${baseUrl}${url}`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
          let jsonResponse = await response.json();
          if(jsonResponse.message) {
            throw new Error(jsonResponse.message)
          } else {
            return jsonResponse;
          }
    } catch(err) {
        return err
    }

};

export const logoutUser = async(url) => {
 let response = fetch(`${baseUrl}${url}`, {
    headers: {
      "X-Authorization" : getToken()
    }
  })
  return response
}
