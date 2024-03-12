
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export const usersPost = async (req, res) => {

    const { name, email, password } = req.body;

    const user = new User({name, email, password});

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({
        user
    })

};

export const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.json({
        users
    })
}

