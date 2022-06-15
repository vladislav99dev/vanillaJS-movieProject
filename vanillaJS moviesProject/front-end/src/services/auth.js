export const isUserLoggedIn = () => {
    let email = localStorage.getItem('email')
    return email;
}

export const saveUserData = (email, username, _id, accessToken) => {
    localStorage.setItem("email", email)
    localStorage.setItem("username", username)
    localStorage.setItem("_id", _id)
    localStorage.setItem("accessToken", accessToken)
}
export const getToken = () => {
    let accessToken = localStorage.getItem("accessToken");
    return accessToken;
}
export const removeUserData = () => {
    localStorage.clear();
}

export const getUserId = () => {
  let _id =  localStorage.getItem("_id")
  return _id;
}