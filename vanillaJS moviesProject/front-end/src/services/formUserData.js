import { sendUserData } from "./userApi.js";
import { saveUserData } from "./auth.js";

let registerUrl = '/users/register';
let loginUrl = '/users/login';

export const formSubmitHandler = (ctx, event) => {
    event.preventDefault();
    let form = event.currentTarget.parentElement
    let data = getFormData(form);
    let formType = isLoginOrRegister(data.repeatPassword)
    let response = formDataValidator(formType, data.email, data.password, data.repeatPassword);
    if (typeof response === 'string') {
        alert(response)
    } else if (typeof response === 'object') {
        let data = manageSendData(formType,response)
        sendUserData(data).then(res => {
            if (res.message) {
                alert(res.message)
            } else {
                let { email, username, _id, accessToken } = res;
                saveUserData(email, username, _id, accessToken);
                ctx.page.redirect('/');
            }
        })
    }
};
const manageSendData = (formType, response) => {
    let data = {};
    if (formType === 'register') {
        response['url'] = registerUrl;
        Object.assign(data, response)
    } else if (formType === 'login') {
        response['url'] = loginUrl;
        Object.assign(data, response)
    }
    return data;
};
const formDataValidator = (formType, email, password, repeatPassword) => {
    if (formType === 'register') {
        if (email && password && repeatPassword) {
            if (password === repeatPassword) {
                return { email, password }
            } else {
                return 'Passwords should match.'
            }
        } else {
            return 'You  should fill all inputs.'
        }
    } else if (formType === 'login') {
        console.log('login');
        if (email && password) {
            return { email, password }
        } else {
            return 'You  should fill all inputs.'
        }
    }
};
const isLoginOrRegister = (repeatPassword) => {
    if (typeof repeatPassword === 'string') {
        return 'register'
    } else if (repeatPassword === null) {
        return 'login'
    }
};
const getFormData = (form) => {
    let formData = new FormData(form);
    let email = formData.get("email");
    let password = formData.get("password");
    let repeatPassword = formData.get("repeatPassword");
    return { email, password, repeatPassword };
};







