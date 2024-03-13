import { response } from "express";
import bcryptjs from "bcryptjs";
import { generateJWT } from "../helpers/generateJWT.js";
import User from "../models/user.js";


export const login = async (req, res = response) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          msg: "Usuario/Password no son validos",
        });
      }
      const validPassword = bcryptjs.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({
          msg: "Contraseña inválida",
        });
      }
  
      const token = await generateJWT(user.id);
  
      res.json({
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        msg: "Hable con el admin. Error al iniciar sesión",
      });
    }
  };