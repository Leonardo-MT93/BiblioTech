import Book from "../models/book.js";


export const getBooks = async(req, res) => {

    const books = await Book.find();
    res.json({
        books
    })

}   

export const getBookById = async(req, res) => {
    const {id} = req.params;
    const searchedBook = await Book.findById(id);

    res.json({
        searchedBook
    });

}

export const createBook = async(req, res) => {

    const { title, author, genre, year } = req.body;
    const bookDB = new Book({title, author, genre, year, created_by: req.user._id});
    await bookDB.save();

    res.status(201).json({
        bookDB
    })
}

export const updateBook = async(req, res) => {

    const {id} = req.params;
    const {user, ...data} = req.body;
    const title = data.title;
    data.created_by = req.user._id;
    const editedBook = await Book.findOne({title: title})
    if(editedBook){
        return res.status(400).json({
            msg: `El libro ${editedBook.title}, ya existe.`
        });
    }
    const bookUpdated = await Book.findByIdAndUpdate(id, data, {new:true} ).populate('created_by', 'title');
    
    res.json({
        bookUpdated
    });
}

export const deleteBook = async(req, res) => {
    const {id} = req.params;
    const deletedBook = await Book.findByIdAndDelete(id, {new:true} );
    
    res.json(deletedBook);
}
