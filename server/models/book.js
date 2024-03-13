import { Schema, model } from "mongoose";

const BookSchema = Schema({
    
        title: {
            type: String,
            required: [true, 'El título es obligatorio']
        },
        author: {
            type: String,
            required: [true, 'El nombre de autor es obligatorio']
        },
        genre: {
            type: String,
            required: [true, 'El género es obligatorio']
        },
        year: {
            type: Number,
            required: [true, 'El año de publicación es obligatorio']
        },
        created_by: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    });

    BookSchema.methods.toJSON = function() {
        const { __v, ...book } = this.toObject();
        book.uid = this._id;
        return book;
    }
    
    const Book = model('Book', BookSchema);
    
    export default Book;
