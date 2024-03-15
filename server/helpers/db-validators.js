import mongoose from "mongoose";
import Book from "../models/book.js";
import User from "../models/user.js";

export const emailExists = async (email = "") => {

    const emailExists = await User.findOne({ email });
    if(emailExists){
        throw new Error(`El correo ${email} ya está registrado`);
    }
}

export const idBookExists = async (id) => {

    const bookExist = await Book.findById(id);
    if (!bookExist) {
        throw new Error(`El libro con ID ${id} no existe`);
    }
}
