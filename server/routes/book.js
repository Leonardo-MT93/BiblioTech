import { Router } from "express";
import { check } from "express-validator";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { validateFields } from "../middlewares/validate-fields.js";
import { createBook } from "../controllers/books.js";


const BookRoutes = Router();


BookRoutes.get('/', (req,res) => res.json({msg: 'Get API - books'}));


BookRoutes.post('/', [
    validateJWT,
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('author', 'El autor es obligatorio').not().isEmpty(),
    check('genre', 'El genero es obligatorio').not().isEmpty(),
    check('year', 'El año es obligatorio').not().isEmpty(),
    validateFields
], createBook)


export default BookRoutes;