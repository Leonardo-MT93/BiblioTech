import Book from "../models/book.js";


export const getBooks = (req, res) => {


}   

export const getBookById = (req, res) => {

}

export const createBook = async(req, res) => {

    const { title, author, genre, year } = req.body;
    const bookDB = new Book({title, author, genre, year, created_by: req.uid});
    await bookDB.save();

    res.status(201).json({
        bookDB
    })
}

export const updateBook = (req, res) => {
}

export const deleteBook = (req, res) => {
}
