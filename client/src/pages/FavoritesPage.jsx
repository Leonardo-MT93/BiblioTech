import BookCard from "../components/BookCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/context/AuthContext.jsx";
import useFetch from "../hooks/useFetch.js";


const FavoritesPage = () => {
  const {user} = useContext(AuthContext);
  const {id} = user || {id: null};
  const [books, setBooks] = useState([]);
  const {getFavorites, getBookForId} = useFetch();



  useEffect(() => {
    if (!id) return;
    const fetchFavorites = async () => {
      try {
        const favorites = await getFavorites(id);
        const favoritesBooks = await getBooksForIds(favorites);
        setBooks(favoritesBooks);
      } catch (error) {
        console.error('Error al obtener favoritos:', error.message);
      }
    };
  
    fetchFavorites();
  }, []); 

  

  const getBooksForIds = async (ids) => {
    try {
      const promises = ids.map(id => getBookForId(id));
      const books = await Promise.all(promises);
      return books.filter(book => book);
    } catch (error) {
      console.error("Error obteniendo libros por IDs:", error);
      return [];
    }
  };


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {user && books.length === 0 && (<h1>No tienes libros favoritos</h1>)}
      {!user && (<h1>Debes iniciar sesión para ver tus libros favoritos</h1>)}
      {books.map((book) => ( 
        <BookCard
          key={book._id}
          genre={book.genre} 
          title={book.title}
          id={book._id}
          bookUserId={book.created_by}
          userId={id}
        />
      ))}
    </div>
  );
};

export default FavoritesPage;
