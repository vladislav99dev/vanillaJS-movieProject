export const isUserLoggedIn = () => {
    let user = localStorage.getItem('user')
    return Boolean(user)
}