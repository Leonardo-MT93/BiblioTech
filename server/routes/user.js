import { Router } from "express";
import { check } from 'express-validator';
import { getAllUsers, usersPost } from "../controllers/users.js";
import { validateFields } from "../middlewares/validate-fields.js";
import { emailExists } from "../helpers/db-validators.js";

const UserRoutes = Router();

UserRoutes.get('/', getAllUsers);

// UserRoutes.put('/:id', (req,res) => res.json({msg: 'Editar usuario API'}));

UserRoutes.post('/',[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').isEmail(),
    check('email').custom( emailExists),
    check('password', 'La contraseña es obligatoria y debe ser mayor a 6 letras').isLength({min: 6}),
    validateFields
], usersPost);

// UserRoutes.delete('/:id', (req,res) => res.json({msg: 'Eliminar usuario API'}));



export default UserRoutes;