import { Router } from "express";
import { check } from "express-validator";
import { validateJWT } from "../middlewares/validate-jwt.js";
import { validateFields } from "../middlewares/validate-fields.js";
import { createBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers/books.js";
import { idBookExists } from "../helpers/db-validators.js";


const BookRoutes = Router();


BookRoutes.get('/', getBooks);

BookRoutes.get('/:id', [
], getBookById)


BookRoutes.post('/', [
    validateJWT,
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('author', 'El autor es obligatorio').not().isEmpty(),
    check('genre', 'El genero es obligatorio').not().isEmpty(),
    check('year', 'El año es obligatorio').not().isEmpty(),
    validateFields
], createBook)

BookRoutes.put('/:id', [
    validateJWT,
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('author', 'El autor es obligatorio').not().isEmpty(),
    check('genre', 'El genero es obligatorio').not().isEmpty(),
    check('year', 'El año es obligatorio').not().isEmpty(),
    validateFields
], updateBook)

BookRoutes.delete('/:id', [
    validateJWT,
    check('id', 'No es un ID de Mongo válido' ).isMongoId(),
    check('id').custom(idBookExists)
], deleteBook)


export default BookRoutes;