import page from "../../node_modules/page/page.mjs"
import { logoutUser } from "../services/userApi.js"
import { removeUserData } from "../services/auth.js"

let url = '/users/logout'

export const logoutView = (ctx) => {
    logoutUser(url).then(response => {
        if (response.status !== 204) {
            console.log(response);
        } else if (response.status === 204) {
            removeUserData();
            page.redirect('/')
        }
    })
};


