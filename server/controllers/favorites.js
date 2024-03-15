import User from "../models/user.js";


export const getFavorites = async(req, res) => {
    const {userId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    const favoritesBooks = user.favorites;
    res.json({
        favoritesBooks
    });
}

export const addFavoriteBook = async(req, res) => {

    const {userId} = req.params;
    const {bookId} = req.body;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    if(!bookId){
        return res.status(400).json({ message: 'Libro no encontrado' });
    }
    if(user.favorites.includes(bookId)){
        return res.status(400).json({ message: 'El libro no se encuentra en favoritos' });
    }
    user.favorites.push(bookId);
    await user.save();
    const favoritesBooks = user.favorites;

    res.status(201).json({
        favoritesBooks
    })
}

export const deleteFavoriteBook = async(req, res) => {
    const {userId} = req.params;
    const {bookId} = req.body;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    if(!bookId){
        return res.status(400).json({ message: 'Libro no encontrado' });
    }
    if(!user.favorites.includes(bookId)){
        return res.status(400).json({ message: 'El libro no se encuentra en favoritos' });
    }
    user.favorites = user.favorites.filter(book => book != bookId);
    await user.save();
    const favoritesBooks = user.favorites;
    
    res.status(201).json({
        favoritesBooks
    })
}
