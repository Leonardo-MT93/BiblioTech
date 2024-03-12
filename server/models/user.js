import { Schema, model } from "mongoose";


const userSchema = Schema({

    name: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'La contraseña es obligatoria']
    },
    favorites: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }],
    myBooks: [{
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }]
});

userSchema.methods.toJSON = function() {
    const { __v, password, ...user } = this.toObject();
    user.uid = this._id;
    return user;
}

const User = model('User', userSchema);

export default User;