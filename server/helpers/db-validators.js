import User from "../models/user.js";

export const emailExists = async (email = "") => {

    const emailExists = await User.findOne({ email });
    if(emailExists){
        throw new Error(`El correo ${email} ya está registrado`);
    }
}