import { Router } from "express";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { addFavoriteBook, deleteFavoriteBook, getFavorites } from "../controllers/favorites.js";
import { check } from "express-validator";
import { validateFields } from "../middlewares/validate-fields.js";

const FavoritesRoutes = Router();

FavoritesRoutes.get("/list/:userId", [validateJWT], getFavorites);

FavoritesRoutes.post("/add/:userId", [
    validateJWT,
    check('bookId', 'El bookId es obligatorio').not().isEmpty(),
    validateFields
], addFavoriteBook);

FavoritesRoutes.delete("/remove/:userId", [
    validateJWT,
    check('bookId', 'El bookId es obligatorio').not().isEmpty(),
    validateFields
], deleteFavoriteBook);

export default FavoritesRoutes;
