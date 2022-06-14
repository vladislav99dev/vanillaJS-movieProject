let baseUrl = "http://localhost:3030";

export const sendUserData = async (email, password) => {
    try{
        let response = await fetch(`${baseUrl}/users/login`, {
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
