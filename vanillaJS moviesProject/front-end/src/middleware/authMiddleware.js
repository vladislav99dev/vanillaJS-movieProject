import { isUserLoggedIn } from "../services/auth.js";

export const authMiddleware = (ctx,next) => {
    ctx.isUserLoggedIn = isUserLoggedIn();
    next();
}